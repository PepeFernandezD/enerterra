// Recibe el formulario de cotizacion del home y lo envia por correo via Resend.
// Variables de entorno (Vercel > Settings > Environment Variables):
//   RESEND_API_KEY  (obligatoria)
//   COTIZAR_TO      destinatario, por defecto gfernandez@enerterra.cl
//   COTIZAR_FROM    remitente, por defecto "Web Enerterra <web@enerterra.cl>" (dominio verificado en Resend)

const TO = process.env.COTIZAR_TO || 'gfernandez@enerterra.cl';
const FROM = process.env.COTIZAR_FROM || 'Web Enerterra <web@enerterra.cl>';
const SUBJECT = '[ Cotización - Enerterra ]';
const LOGO = 'https://www.enerterra.cl/img/email/enerterra-logo-white.png';
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Fecha en hora de Chile continental, ej. "30 de octubre de 2026, 15:42 hrs"
function sello() {
  const now = new Date();
  const p = Object.fromEntries(new Intl.DateTimeFormat('es-CL', {
    timeZone: 'America/Santiago', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false,
  }).formatToParts(now).map(x => [x.type, x.value]));
  const fecha = `${+p.day} de ${new Intl.DateTimeFormat('es-CL', { timeZone: 'America/Santiago', month: 'long' }).format(now)} de ${p.year}, ${p.hour}:${p.minute} hrs`;
  return { fecha };
}

function fila(label, valor) {
  return `<tr>
<td style="padding:12px 0;border-bottom:1px solid #E6ECF1;width:140px;vertical-align:top;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#4F718A;font-weight:bold">${label}</td>
<td style="padding:12px 0;border-bottom:1px solid #E6ECF1;vertical-align:top;font-size:15px;color:#0E1216">${valor}</td>
</tr>`;
}

function htmlCorreo(d, s) {
  const tel = d.telefono ? `<a href="tel:${esc(d.telefono.replace(/[^\d+]/g, ''))}" style="color:#0B7A64;text-decoration:none">${esc(d.telefono)}</a>` : '<span style="color:#96B3C8">No indicado</span>';
  const mensaje = d.mensaje ? esc(d.mensaje).replace(/\n/g, '<br>') : '<span style="color:#96B3C8">Sin mensaje adicional</span>';
  return `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${SUBJECT}</title></head>
<body style="margin:0;padding:0;background:#F5F7F9;font-family:Arial,Helvetica,sans-serif">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F5F7F9"><tr><td align="center" style="padding:32px 16px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#FFFFFF;border-radius:12px;overflow:hidden">

  <tr><td style="background:#2D2D36;padding:28px 32px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td><img src="${LOGO}" width="180" height="24" alt="Enerterra" style="display:block;border:0;width:180px;height:auto"></td>
      <td align="right" style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#96B3C8;line-height:1.5">Representante oficial<br>de Ampd Energy</td>
    </tr></table>
  </td></tr>
  <tr><td style="background:#0CB494;height:4px;line-height:4px;font-size:0">&nbsp;</td></tr>

  <tr><td style="padding:32px 32px 8px">
    <p style="margin:0 0 6px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#0B7A64;font-weight:bold">Solicitud de cotización</p>
    <h1 style="margin:0;font-size:24px;line-height:1.3;color:#0E1216">${esc(d.empresa)}</h1>
    <p style="margin:8px 0 0;font-size:13px;color:#7B9DB6">${esc(s.fecha)}</p>
  </td></tr>

  <tr><td style="padding:24px 32px 8px">
    <p style="margin:0 0 4px;font-size:14px;font-weight:bold;color:#0E1216">Datos de contacto</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${fila('Nombre', esc(d.nombre))}
      ${fila('Empresa', esc(d.empresa))}
      ${fila('Email', `<a href="mailto:${esc(d.email)}" style="color:#0B7A64;text-decoration:none">${esc(d.email)}</a>`)}
      ${fila('Teléfono', tel)}
    </table>
  </td></tr>

  <tr><td style="padding:24px 32px 8px">
    <p style="margin:0 0 4px;font-size:14px;font-weight:bold;color:#0E1216">Proyecto</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${fila('Sector', d.sector ? esc(d.sector) : '<span style="color:#96B3C8">No indicado</span>')}
    </table>
    <div style="margin-top:16px;padding:18px 20px;background:#F5F7F9;border-left:3px solid #0CB494;border-radius:6px;font-size:15px;line-height:1.6;color:#0E1216">${mensaje}</div>
  </td></tr>

  <tr><td style="padding:28px 32px 32px">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background:#0CB494;border-radius:6px">
      <a href="mailto:${esc(d.email)}?subject=${encodeURIComponent('Re: Cotización Enerterra · ' + d.empresa)}" style="display:inline-block;padding:14px 24px;font-size:14px;font-weight:bold;letter-spacing:.04em;color:#FFFFFF;text-decoration:none">Responder a ${esc(d.nombre.split(' ')[0])}</a>
    </td></tr></table>
  </td></tr>

  <tr><td style="background:#F5F7F9;padding:20px 32px;border-top:1px solid #E6ECF1;font-size:12px;line-height:1.6;color:#7B9DB6">
    Enerterra Chile SpA &nbsp;·&nbsp; Santiago, Chile &nbsp;·&nbsp; <a href="https://www.enerterra.cl" style="color:#4F718A;text-decoration:none">enerterra.cl</a><br>
    Solicitud recibida a través del formulario de cotización de enerterra.cl.
  </td></tr>

</table>
</td></tr></table>
</body></html>`;
}

function textoCorreo(d, s) {
  return `${SUBJECT}\n${s.fecha}\n\nDATOS DE CONTACTO\nNombre: ${d.nombre}\nEmpresa: ${d.empresa}\nEmail: ${d.email}\nTeléfono: ${d.telefono || 'No indicado'}\n\nPROYECTO\nSector: ${d.sector || 'No indicado'}\n\n${d.mensaje || 'Sin mensaje adicional'}\n\n--\nEnerterra Chile SpA · Santiago, Chile · enerterra.cl`;
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

  const s = sello();
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: FROM, to: [TO], reply_to: d.email, subject: SUBJECT, html: htmlCorreo(d, s), text: textoCorreo(d, s) }),
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

module.exports.htmlCorreo = htmlCorreo;
module.exports.sello = sello;
