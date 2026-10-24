# Enerterra Design System

Sistema de diseño de **Enerterra Chile SpA**, distribuidor y representante oficial en Chile de **Ampd Energy** (ampd.energy), fabricante de sistemas de almacenamiento de energía en baterías (BESS) que reemplazan generadores diésel en faenas exigentes.

## Contexto

- **Cliente objetivo:** industria pesada chilena: minería, construcción, puertos, infraestructura, oil & gas, eventos. Compradores B2B técnicos y conservadores (gerentes de operaciones, jefes de faena, gerencias de sustentabilidad).
- **Propuesta de valor:** energía confiable, silenciosa, sin emisiones locales; hasta 80 % menos costo operativo y 90 % menos CO₂ que un generador diésel; 30x más silencioso.
- **Productos representados (Ampd Energy):** Ampd 200 (292 kW / 297 kVA peak; 193 kW / 214 kVA continuo; hasta 215 kWh), Ampd 400 (585 kW / 595 kVA; 386 kW / 428 kVA; hasta 430 kWh LFP; IP55; +55 °C; MPPT solar 60 kW opcional; hasta 4 en paralelo), Enertainer S+/M+/L+ (hasta 470 kW / 525 kVA; 427 kW / 437 kVA; IP45; −20 a +45 °C; 9,6 t), Ampd Silo S/M (57,5 / 115 kW peak; 50 / 100 kW continuo; 2,5 / 4 t), software Ampd Pulse / Enernet (monitoreo 24/7, OTA, Schedule Designer, API). Detalle completo en `assets/products/catalog.json`.
- **Cifras de flota Ampd:** 400 ESS en el mundo, 161k t CO₂ evitadas, 400+ proyectos, 8 regiones, garantía 5 años en partes, celdas CATL LFP 9.000 ciclos, certificación IEC/UL por SGS.
- **Personalidad:** ingeniería seria, confiabilidad industrial, tecnología de punta, energía limpia. Infraestructura crítica; nada de "startup juguetona" ni "eco-lifestyle".

## Fuentes

- Brief del cliente (texto en el chat inicial): identidad heredada de Ampd, elevada; requisitos de tokens, componentes, patrones de página.
- https://www.ampd.energy y https://www.ampd.energy/products/ampd-400 — leídos para specs de producto, industrias, métricas y testimonios. No se copiaron logos ni imágenes de Ampd.
- **No se entregó** logo, tipografías, Figma ni código de Enerterra. Lo visual de Enerterra es propuesta nueva.
- **Assets de Ampd** descargados del CDN de ampd.energy (Enerterra es representante oficial): fotografía de producto, casos de uso minería, capturas de Ampd Pulse, íconos de beneficios/proceso/garantía, logo Ampd y brochures PDF. Ver `assets/` y las cards del grupo "Products".

## Componentes

Namespace del bundle: `window.EnerterraDesignSystem_ae4ef7`.

- `components/core/` — **Button** (primary / secondary / ghost / acero · sm md lg · icon · href), **Badge** (7 tonos, dot, icon), **Icon** (Lucide por nombre).
- `components/forms/` — **Input** (label, hint, error, sufijo de unidad), **Select**, **Textarea**, **QuoteForm** (formulario de cotización completo con estado de éxito; `compact`).
- `components/product/` — **ProductCard** (imagen 4:3, specs en mono, CTA), **MetricBadge** (cifra tabular + etiqueta: "−90% CO₂"), **CompareTable** (BESS vs generador diésel, 8 filas por defecto).
- `components/content/` — **SectionHeader** (eyebrow + título + lead + acción), **Testimonial** (card / feature con métrica), **IndustryGrid** (6 industrias con íconos).
- `components/navigation/` — **Navbar** (sticky, wordmark tipográfico, CTA; exporta **Wordmark**), **Footer**.

Adiciones intencionales (no existe inventario fuente): `Icon` como wrapper de Lucide; `Wordmark` para el lockup Enerterra + Ampd; `SectionHeader` para estandarizar aperturas de sección.

## UI kits

- `ui_kits/website/` — sitio Enerterra: Home, Producto (Ampd 400), Industria (Minería), Cotizar. Interactivo (navegación por estado). Ver `ui_kits/website/README.md`.

## CONTENT FUNDAMENTALS

- **Idioma:** español de Chile. Tuteo B2B moderno ("Cotiza tu proyecto", "Cuéntanos de tu faena"), nunca "usted" ni tono informal. Sin anglicismos innecesarios, pero se mantienen términos técnicos de la industria: BESS, kW, kVA, kWh, IP55, LFP, OPEX, faena, campamento, CAEX.
- **Tono:** directo, técnico, sobrio. Frases cortas con dato concreto. "Reemplaza el generador de 500 kVA sin ruido, sin humos y sin combustible." Nada de adjetivos de marketing vacíos ("revolucionario", "increíble").
- **Casing:** titulares y botones en *sentence case* ("Cotiza tu proyecto"). Eyebrows y badges en MAYÚSCULAS con tracking 0.12em. Nombres de producto tal como Ampd los escribe: "Ampd 400", "Enertainer", "Ampd Silo", "Ampd Pulse".
- **Números:** siempre con unidad y espacio fino: "585 kW", "430 kWh", "+55 °C", "161.000 t CO₂". Separador de miles con punto, decimales con coma (57,5 kW). Porcentajes con espacio: "80 %" en prosa; en cifras destacadas (MetricBadge) sin espacio: "−90%". Signo menos real (−), no guion.
- **CTA:** un verbo imperativo + objeto: "Cotiza tu proyecto", "Descargar ficha técnica", "Habla con un ingeniero", "Ver productos". El CTA primario del sitio es siempre "Cotiza tu proyecto".
- **Pronombres:** "tu faena", "tu proyecto", "te devolvemos una propuesta". Enerterra habla en primera persona plural ("Revisamos tus datos").
- **Emoji:** nunca. Íconos Lucide en su lugar.
- **Comparativa:** BESS siempre a la izquierda del diésel; celdas cortas en mono, nunca párrafos.
- **Testimonios:** cita literal del cliente (o traducción fiel al español), nombre, cargo, empresa.

## VISUAL FOUNDATIONS

- **Modo:** claro único. Página y cards `#FFFFFF`; secciones alternas `#F5F7F9`; hover `#EEF1F4`. Carbón `#0B0D10` solo como tinta de texto e íconos. Ningún bloque, sección, footer ni panel es oscuro. Los saltos de superficie son sutiles: los **hairlines** (carbón al 8 / 14 / 26 %) hacen el trabajo de separar.
- **Acento verde Ampd:** relleno `#0CB494` (hover `#0F9E82`) con texto carbón (3.1:1 · usar solo ≥18px bold o texto carbón); para texto, líneas e íconos sobre blanco se usa `#0B7A64` (green-700, 5.1:1). Uso disciplinado: un CTA primario por vista, cifras clave, eyebrows, check marks de la tabla, subrayado activo del nav, anillo de foco. **Nunca fondo de sección**, nunca párrafos en verde, nunca dos CTAs verdes juntos.
- **Secundario Enerterra: Acero** `#4F718A` (texto/íconos/botón, 5.5:1 sobre blanco; `#B6CBDA` solo como tinte decorativo). Azul-gris frío e industrial que diferencia a Enerterra sin competir con el verde. Se usa en eyebrows de industria, íconos en reposo de IndustryGrid, comillas de testimonios, íconos de contacto del footer, el botón `acero` y asteriscos de campo obligatorio. Para cambiarlo, editar la escala `--acero-*` en `tokens/colors.css`.
- **Neutros fríos:** texto primario `#0B0D10`, secundario `#4A545E`, terciario `#6B7580` (todos ≥ AA sobre blanco), deshabilitado `#B8C0C8`.
- **Semánticos:** éxito `#0B7A64`, ámbar `#B7791F`, rojo `#D23B36`, azul `#2B6FD6`, cada uno con fondo al 10–12 %.
- **Tipografía:** **Archivo** (variable, ancho y peso) para todo el texto. Display en peso 600, `wdth 105`, tracking −0.025em, interlineado 1.0. Encabezados 600, −0.015em, 1.1. Cuerpo 400, 16px, 1.55. Eyebrows 12px mayúsculas 0.12em 600. **Geist Mono** peso 500, tabular, −0.02em para toda cifra técnica (kW, kVA, kWh, t CO₂, dB, °C, precios, teléfonos). Escala: display-xl clamp(56–88), display clamp(44–64), h1 clamp(36–48), h2 clamp(28–36), h3 24, h4 20, body-lg 18, body 16, body-sm 14, caption 12; spec 48 / 32 / 20 / 14.
- **Espaciado:** base 4px (4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128). Contenedor 1280px, 12 columnas, gap 24, padding lateral clamp(20px, 4vw, 48px). Secciones 72–128px verticales. Nav 72px sticky.
- **Radios:** industriales y contenidos. 6px en botones y campos, 10px en cards y tablas, 4px en badges, 2px en detalles, pill solo para indicadores.
- **Cards:** fondo blanco, hairline al 8 %, radio 10, sombra shadow-1 (tenue). Hover: borde al 26 %, shadow-2, translateY(−2px). Sin bordes de color izquierdos, sin gradientes en cards.
- **Elevación/sombras:** tres niveles suaves y de bajo contraste (`--shadow-1/2/3`, carbón al 6 / 10 / 16 %). Foco: anillo doble `--shadow-focus` (2px blanco + 2px verde Ampd). Glow verde Ampd (`--shadow-green`) solo en campos enfocados.
- **Fondos:** planos. Sin gradientes decorativos, sin patrones ni texturas. Las secciones alternan blanco / blanco-1 con hairlines. La única "textura" permitida es fotografía real.
- **Fotografía:** faenas reales a luz de día, equipos en terreno, tono frío y limpio con cielo abierto, sin filtros oscuros ni HDR, grano fino, sin stock genérico ni "manos con ampolletas". Protección de texto con **scrims** de gradiente blanco (`--scrim-bottom`, `--scrim-left`) para que el texto siga en carbón; nunca cápsulas ni blur detrás del texto. Los placeholders `Photo` del kit indican qué foto va en cada lugar.
- **Transparencia y blur:** solo el navbar sticky (`rgba(255,255,255,.82)` + blur 12px) y el navbar `transparent` sobre héroes. Nada más translúcido.
- **Hover:** oscurecer fondo (+4 % carbón) y borde; links de gris-500 a carbón; íconos de acero a verde Ampd; flecha +3px a la derecha. **Press:** fondo +8 % carbón y translateY(1px), sin encogerse. **Disabled:** opacidad 40 %.
- **Movimiento:** 120 ms (color/borde), 200 ms (fondo, transform), 400 ms (revelados). Easing `cubic-bezier(.2,.7,.2,1)`. Sin rebotes, sin parallax, sin animaciones de entrada agresivas. Los datos en vivo pulsan sutilmente (punto verde Ampd con halo).
- **Layout:** navbar sticky; bloques laterales sticky a top 96 en secciones largas (comparativa, cotización). Grillas `auto-fit` con `minmax` para reflujo; colapso a una columna bajo 960px (igual que el navbar).
- **Logo Enerterra:** `assets/brand/enerterra-logo.png` (3246×432, transparente): isotipo teal `#18B098` (barras escalonadas) + wordmark en petróleo `#04343C`. Versión blanca `enerterra-logo-white.png` para fondos oscuros. Tokens `--enerterra-teal`, `--enerterra-petrol` (este último también sirve como tinta de titulares de marca, `--text-brand-ink`). Mínimo 24px de alto; nunca sobre verde Ampd; siempre acompañado del lockup "Representante oficial + logo Ampd" en navbar y footer.

## ICONOGRAPHY

- **Sistema:** **Lucide** (trazo 1.75px por defecto; 1.5 a ≥32px, 2 a ≤16px), cargado desde CDN `https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js` y renderizado por el componente `Icon` por nombre kebab-case. **Sustitución declarada**: no se entregó un set propio; Lucide se eligió por su trazo técnico y cobertura industrial. Si Enerterra adopta otro set, reemplazar en `components/core/Icon.jsx`.
- **Vocabulario:** battery-charging (BESS), fuel (diésel), zap, volume-x (ruido), leaf (CO₂), shield-check (seguridad/certificación), thermometer, droplets (IP), sun (solar), gauge, wifi/activity (monitoreo), arrow-right (CTAs), check (comparativa), download, phone, mail, map-pin. Industrias: pickaxe (minería), hard-hat (construcción), anchor (puertos), route (infraestructura), flame (oil & gas), tent (eventos).
- **Color:** íconos heredan `currentColor`. En reposo gris-200/gris-400; destacados en verde Ampd; industria y contacto en acero. Nunca íconos rellenos, nunca dos colores en un ícono.
- **Contenedores:** íconos de industria en caja 44px, radio 6, fondo blanco 4 % + hairline; en hover fondo verde Ampd 12 % + ícono verde Ampd.
- **Emoji y unicode:** emoji nunca. Unicode solo para símbolos técnicos (₂, °, −, ·, ×) dentro de texto.
- **Logos:** logo oficial de Enerterra en `assets/brand/enerterra-logo.png` (+ `-white.png`), usado por `Wordmark`. El logo oficial de Ampd Energy (entregado por el usuario) está en `assets/brand/ampd-logo-full-color.png` (1920×747, gris #A4A8A8 + teal #0CB494); además `ampd-logo.svg` (versión blanca para fondos oscuros) y `ampd-brandmark.avif` y se usa como "Representante oficial" junto al wordmark, nunca como marca principal de Enerterra.
- **Íconos Ampd:** `assets/icons/` contiene los íconos oficiales de Ampd en trazo teal (beneficios: benefit-*.png/avif) y los íconos 3D de proceso y garantía (process-*, assurance-*). Úsalos en secciones "Por qué Ampd", proceso y garantía; Lucide cubre el resto de la UI.

## Índice

- `styles.css` — punto de entrada (solo `@import`).
- `tokens/` — `fonts.css` (Google Fonts: Archivo + Geist Mono), `colors.css`, `typography.css`, `spacing.css` (espaciado, radios, sombras, scrims, motion), `base.css` (reset mínimo, links).
- `guidelines/` — 20 specimen cards: Colors (carbón, verde Ampd, acero, neutros, semánticos, hairlines, contraste), Type (display, encabezados, cuerpo, cifras mono, etiquetas), Spacing (escala, radios, elevación, grilla), Brand (wordmark, reglas del verde Ampd, fotografía/scrims, movimiento y estados).
- `components/` — core, forms, product, content, navigation (cada carpeta: `.jsx`, `.d.ts`, `.prompt.md`, `*.card.html`).
- `ui_kits/website/` — sitio completo interactivo.
- `assets/products/catalog.json` — **catálogo completo de producto**: specs de Ampd 200 / 400 / Enertainer (S+, M+, L+) / Silo (S, M) / Ampd Pulse, beneficios, imágenes por producto, brochure, URL; más datos de empresa, argumentos BESS vs diésel, qué alimenta, aplicaciones por industria, casos ejemplo minería (payback y CO₂), proceso de venta en 4 pasos y 6 testimonios. Extraído del sitio y los 3 brochures.
- `assets/` — `brand/` (logo Ampd), `products/` ordenado por producto: `ampd-200/`, `ampd-400/`, `enertainer/`, `ampd-silo/`, `gama/`, `software/` (prefijos: `render-*` PNG transparente desde brochures, `web-*` fotos del sitio, `field-*` instalaciones reales), `industries/` (minería: hero, desafío, solución, 5 casos; túnel, puerto, infraestructura, construcción), `icons/` (beneficios, proceso, garantía), `clients/` (20 logos de clientes Ampd), `site/` (why-*, CTA, about, badges app), `awards/` (8 premios), `team/` (4 líderes Ampd), `docs/` (4 brochures PDF). Cards "Identidad Ampd" y "Equipo Ampd" en Brand; puertos en Products.
- `thumbnail.html` — tile del sistema.
- `SKILL.md` — skill para Claude Code.

## Caveats

- Sin fuentes propias de Enerterra: Google Fonts (Archivo, Geist Mono). El logo Enerterra es PNG; pedir SVG vectorial para impresión. La fotografía es la oficial de Ampd; faltan fotos de faenas chilenas.
- Tres imágenes del carrusel de Ampd (400_HK, 200_HK, hero 4:3) devolvieron 403 y no se descargaron.
- Las cifras de la comparativa "faena tipo" en la página de Minería son estimaciones ilustrativas de Enerterra, no datos publicados por Ampd; validar antes de publicar.
- Testimonios traducidos del inglés (sitio Ampd); verificar autorización de uso por parte de Enerterra.
