# CLAUDE.md · Enerterra Chile

Contexto: representante oficial de Ampd Energy en Chile (Ampd 200, Ampd 400, Enertainer, Ampd Silo, software Ampd Pulse). Público B2B de industria pesada. Español de Chile, tuteo sobrio, sin emojis.

Antes de diseñar: leer `readme.md` (design system) y usar solo los tokens de `tokens/*.css`.
Fuente de la landing: `landing/index.html`, `landing/producto.html`, `landing/productos-data.js`.

Marca:
- Verde Ampd #14B394 (landing #0CB494), hover #0F9E82, active #085C4B, texto sobre blanco #0B7A64. Solo CTAs, cifras, líneas, foco. Nunca fondo de sección.
- Acero #4F718A (#B6CBDA #96B3C8 #7B9DB6 #3D5A70). Oscuro #0E1216, blanco, gris #F5F7F9.
- Logo Enerterra teal #18B098 + petróleo #04343C. Ampd aparece como "Representante oficial de [logo Ampd]".
- Archivo (titulares wdth 105, tracking −0.025em) + Geist Mono tabular para cifras. Mostrar kW y kVA.
- Íconos Lucide finos. Sin ilustraciones, gradientes, glassmorphism ni glow. Solo fotos reales de Ampd.
- Animación: fade/slide al scroll, 700 ms, cubic-bezier(.2,.7,.2,1).

Landing: Hero · Statement · Pilares · Cifras · Costo real · Sectores · Productos · Detalle Enertainer · Piloto 60 días · Sustentabilidad · CTA + agendador · Footer. Breakpoints 1000 / 900 / 640px; probado a 390px.
