// Recibe el formulario de cotizacion del home y lo envia por correo via Resend.
// Variables de entorno (Vercel > Settings > Environment Variables):
//   RESEND_API_KEY  (obligatoria)
//   COTIZAR_TO      destinatario, por defecto gfernandez@enerterra.cl
//   COTIZAR_FROM    remitente, por defecto "Web Enerterra <web@enerterra.cl>" (dominio verificado en Resend)

const TO = process.env.COTIZAR_TO || 'gfernandez@enerterra.cl';
const FROM = process.env.COTIZAR_FROM || 'Web Enerterra <web@enerterra.cl>';
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method' });

  let b = req.body || {};
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = {}; } }
  const v = k => String(b[k] || '').trim().slice(0, k === 'mensaje' ? 4000 : 200);

  // Honeypot: los bots llenan el campo oculto; respondemos ok sin enviar nada
  if (v('web')) return res.status(200).json({ ok: true });

  const d = { nombre: v('nombre'), empresa: v('empresa'), email: v('email'), telefono: v('telefono'), sector: v('sector'), mensaje: v('mensaje') };
  if (!d.nombre || !d.empresa || !EMAIL_RE.test(d.email)) return res.status(400).json({ ok: false, error: 'campos' });

  if (!process.env.RESEND_API_KEY) {
    console.error('cotizar: falta RESEND_API_KEY');
    return res.status(500).json({ ok: false, error: 'config' });
  }

  const filas = [['Nombre', d.nombre], ['Empresa', d.empresa], ['Email', d.email], ['Teléfono', d.telefono || '—'], ['Sector', d.sector || '—']]
    .map(([k, val]) => `<tr><td style="padding:6px 16px 6px 0;color:#4F718A;font-weight:600">${k}</td><td style="padding:6px 0">${esc(val)}</td></tr>`).join('');
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;color:#0E1216">
<h2 style="margin:0 0 16px;font-size:20px">Nueva solicitud de cotización</h2>
<table style="border-collapse:collapse">${filas}</table>
<p style="margin:20px 0 6px;color:#4F718A;font-weight:600">Mensaje</p>
<p style="margin:0;white-space:pre-wrap">${esc(d.mensaje || '—')}</p>
<p style="margin:24px 0 0;font-size:12px;color:#7B9DB6">Enviado desde el formulario de enerterra.cl. Responde este correo para contestarle directo a ${esc(d.email)}.</p>
</div>`;
  const text = `Nueva solicitud de cotización\n\nNombre: ${d.nombre}\nEmpresa: ${d.empresa}\nEmail: ${d.email}\nTeléfono: ${d.telefono || '—'}\nSector: ${d.sector || '—'}\n\nMensaje:\n${d.mensaje || '—'}`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: FROM, to: [TO], reply_to: d.email, subject: `Cotización · ${d.empresa} · ${d.nombre}`, html, text }),
    });
    if (!r.ok) {
      console.error('cotizar: Resend respondio', r.status, await r.text());
      return res.status(502).json({ ok: false, error: 'envio' });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('cotizar: error de red', e);
    return res.status(502).json({ ok: false, error: 'envio' });
  }
};
