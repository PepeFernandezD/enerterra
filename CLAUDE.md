# CLAUDE.md · Enerterra Chile

Contexto: representante oficial de Ampd Energy en Chile (Ampd 200, Ampd 400, Enertainer, Ampd Silo, software Ampd Pulse). Público B2B de industria pesada. Español de Chile, tuteo sobrio, sin emojis.

Antes de diseñar: leer `readme.md` (design system) y usar solo los tokens de `tokens/*.css`.
Fuente del sitio (root del deploy Vercel = `landing/`): home `landing/index.html`, fichas `landing/productos/` (index.html + data.js, `?p=slug`), sectores `landing/sectores/` (index.html + data.js, `?s=slug`). Usar rutas absolutas (`/img/`, `/assets/`, `/productos/?p=`). La landing v1 está archivada en `landing/v1/`; no editarla salvo pedido explícito.

Marca:
- Verde Ampd #14B394 (landing #0CB494), hover #0F9E82, active #085C4B, texto sobre blanco #0B7A64. Solo CTAs, cifras, líneas, foco. Nunca fondo de sección.
- Acero #4F718A (#B6CBDA #96B3C8 #7B9DB6 #3D5A70). Oscuro #0E1216, blanco, gris #F5F7F9.
- Logo Enerterra teal #18B098 + petróleo #04343C. Ampd aparece como "Representante oficial de [logo Ampd]".
- Archivo (titulares wdth 105, tracking −0.025em) + Geist Mono tabular para cifras. Mostrar kW y kVA.
- Íconos Lucide finos. Sin ilustraciones, gradientes, glassmorphism ni glow. Solo fotos reales de Ampd.
- Animación: fade/slide al scroll, 700 ms, cubic-bezier(.2,.7,.2,1).

Home actual: Hero · Logos clientes · Por qué Ampd · Productos · Proceso · Testimonios · CTA · Footer. Navbar con mega menús Sectores (8) y Productos (5).
Landing v1 (archivada): Hero · Statement · Pilares · Cifras · Costo real · Sectores · Productos · Detalle Enertainer · Piloto 60 días · Sustentabilidad · CTA + agendador · Footer. Breakpoints 1000 / 900 / 640px; probado a 390px.
