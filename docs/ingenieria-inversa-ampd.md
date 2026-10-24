# Ingenieria inversa: ampd.energy/es

Analisis completo del sitio oficial de Ampd Energy (version espanol) para replicar
como sitio de Enerterra Chile. Fecha: 2026-10-24.

---

## 1. ARQUITECTURA DEL SITIO

### Paginas identificadas

| Ruta Ampd | Equivalente Enerterra | Tipo |
|-----------|----------------------|------|
| `/es` | `/` | Home |
| `/es/products/all` | `/productos` | Catalogo de productos |
| `/es/products/ampd-200` | `/productos/ampd-200` | Ficha producto |
| `/es/products/ampd-400` | `/productos/ampd-400` | Ficha producto |
| `/es/products/enertainer` | `/productos/enertainer` | Ficha producto |
| `/es/products/ampd-silo` | `/productos/ampd-silo` | Ficha producto |
| `/es/products/software` | `/productos/software` | Ficha producto |
| `/es/industries/construction` | `/sectores/construccion` | Pagina sector |
| `/es/industries/mining` | `/sectores/mineria` | Pagina sector |
| `/es/industries/infrastructure` | `/sectores/infraestructura` | Pagina sector |
| `/es/industries/concrete-batching` | `/sectores/hormigon` | Pagina sector |
| `/es/industries/oil-gas` | `/sectores/oil-gas` | Pagina sector |
| `/es/industries/microtunneling` | `/sectores/microtuneles` | Pagina sector |
| `/es/industries/events` | `/sectores/eventos` | Pagina sector |
| `/es/industries/ports` | `/sectores/puertos` | Pagina sector |
| `/es/about` | `/nosotros` | About |
| `/es/contact-us/contact-us` | `/contacto` | Contacto + formulario |

**Total: 17 paginas** (1 home + 5 producto + 8 sector + 1 catalogo + 1 about + 1 contacto)

### Stack original
- Webflow (CMS + hosting)
- Google Fonts: Lato + Montserrat
- jQuery (event handlers)
- HubSpot Forms (formulario contacto)
- Tracking: GA4, GTM, Google Ads, Clarity, Hotjar

### Stack Enerterra (propuesto)
- Astro (SSG) + tokens CSS del design system
- Archivo + Geist Mono (segun design system propio)
- Vanilla JS (sin jQuery)
- Formulario propio o Resend
- Vercel (deploy)

---

## 2. NAVBAR (comun a todas las paginas)

### Desktop
```
[Logo Ampd]  Productos▾  Industrias▾  Perspectivas  Nosotros  Socios  Contacto  [Idioma▾]
```

**Logo:** Ampd Brandmark (SVG), arriba izquierda, enlaza a home.

**Dropdown Productos** (mega menu con iconos):
- Ampd 200 — icono render
- Ampd 400 — icono render
- Enertainer — icono render
- Ampd Silo — icono render
- Software (Enernet) — icono pantalla

**Dropdown Industrias** (mega menu con iconos):
- Construccion — icono foto sector
- Mineria — icono foto sector
- Infraestructura — icono foto sector
- Dosificacion de hormigon — icono foto sector
- Petroleo y gas — icono foto sector
- Microtuneles — icono foto sector
- Eventos — icono foto sector
- Puertos — icono foto sector

**Altura navbar:** 72px, sticky.
**CTA derecha:** "Solicitar presupuesto" (boton primario verde).
**Selector idioma:** EN / ZH / PT / ES.

### Mobile (< 960px)
- Hamburguesa → panel full-screen, altura `calc(100vh - 72px)`, overflow scroll.
- Submenus expandibles con icono + que rota 45deg al abrir.
- CTA "Solicitar presupuesto" al fondo del panel.

### Adaptacion Enerterra
- Logo: Enerterra (wordmark) + "Representante oficial de [logo Ampd]"
- Quitar selector idioma (solo espanol chileno)
- Quitar "Socios" y "Perspectivas" (no aplican aun)
- CTA: "Cotiza tu proyecto"
- Links: Productos, Sectores, Nosotros, Contacto

---

## 3. HOME — SECCIONES

### 3.1 Hero
- **Fondo:** Imagen full-width con overlay oscuro (herohome.avif)
- **Layout:** Centrado
- **H1:** "Mejore la energia de su sitio"
- **H2:** "El futuro de la energia movil para industrias pesadas"
- **Texto:** Parrafo sobre confiabilidad, emisiones, ahorro operativo, BESS conectado.
- **CTAs:** "Pongase en contacto" (primario) + "Ver nuestros productos" (outline)

### 3.2 Logos clientes
- **Fondo:** Claro
- **Layout:** Carrusel horizontal con ~28 logos de clientes
- **Logos:** ACC, Holcim, GMI, Vinci, McGoff, ADCO, Wolff Onsite, Uperio, Sisk, UR, Wika Gedung, Winvic, Adhi Karya, Built, Torsion Group, Careys, Domis, Lovell, ODG, B+K, Atlas, Torsion Homes, Wolffkran, A.W. Edwards, CDL, Hutchinson, Cornerstone Builders, Perennial

### 3.3 Galeria (slider 3 imagenes)
- 3 fotos de producto/faena en slider automatico
- Fotos de equipos Ampd 400, Ampd 200, hero faena

### 3.4 Por que Ampd (feature grid)
- **Fondo:** Oscuro
- **Layout:** Grid 2 columnas, cada card con imagen + titulo + texto
- **8 cards:**
  1. Sin interrupciones innecesarias para los trabajadores
  2. 30 veces mas silencioso que un generador diesel
  3. Mejore las condiciones de trabajo
  4. Hasta un 90% de reduccion en emisiones de CO2
  5. Disenados para condiciones extremas
  6. Cero contaminantes atmosfericos locales
  7. Grandes ahorros para su obra
  8. Hasta un 80% de reduccion en costes operativos

### 3.5 Productos (grid 5 cards)
- **Fondo:** Claro
- **Layout:** 5 columnas (1 por producto)
- **Cada card:** Imagen render + nombre + spec potencia + link
- Productos: Ampd 200, Ampd 400, Enertainer, Ampd Silo, Software

### 3.6 Sistemas ESS (stats + video)
- **Fondo:** Oscuro
- **Layout:** 2 columnas (texto+stats | video YouTube)
- **Titulo:** "Sistemas de almacenamiento de energia"
- **Stats (con animacion de carga desde API):**
  - 400 dispositivos ESS en todo el mundo
  - 161k toneladas de CO2 evitadas
  - 400+ proyectos energizados
  - 8 regiones con presencia
  - 10+ socios globales
- **Video:** YouTube embebido con lightbox (play button overlay)

### 3.7 Proceso (4 pasos)
- **Fondo:** Claro
- **Layout:** Grid 4 columnas, cada paso con icono 3D + titulo + texto
- **H2:** "Sin diesel, sin ruido, sin riesgos y sin complicaciones."
- **Pasos:**
  1. Hablemos hoy mismo
  2. Analisis a fondo
  3. Recomendaciones
  4. Conectar

### 3.8 Testimonios (slider)
- **Fondo:** Claro
- **Layout:** Slider con rotacion automatica cada 10s
- **3 testimonios** con foto + cita + nombre + cargo + empresa
- Navegacion por puntos, barra de progreso animada

### 3.9 CTA final
- **Fondo:** Oscuro
- **Titulo:** "Listo para impulsar su proximo proyecto con Ampd?"
- **Texto:** "Su especialista local puede ofrecerle un desglose completo..."
- **CTA:** "Contactenos"

---

## 4. PAGINA DE PRODUCTO (template)

Ejemplo: Ampd 400. Todas las fichas siguen el mismo template.

### 4.1 Product switcher (tabs)
- Barra horizontal debajo del navbar con tabs por producto
- Tab activo con borde inferior verde

### 4.2 Hero
- **Fondo:** Oscuro con imagen de producto
- **Layout:** 2 columnas (copy | imagen)
- **Eyebrow:** texto categoria
- **H1:** "El futuro de la energia movil: Ampd 400"
- **Tag:** "NextGen" (badge verde)
- **Intro:** Parrafo descriptivo
- **CTAs:** "Contacto" + "Mas informacion"

### 4.3 Statement
- **Fondo:** Claro
- **Layout:** Centrado
- **Texto:** Parrafo de posicionamiento del producto

### 4.4 Caracteristicas (specs grid)
- **Fondo:** Claro/gris
- **Eyebrow:** "CARACTERISTICAS DEL PRODUCTO"
- **H2:** "Rendimiento inigualable"
- **Grid 3x2 cards** con titulo + valor tecnico:
  - Sistema de refrigeracion → Refrigeracion liquida, +55C
  - Proteccion de ingreso → IP55
  - Potencia salida → 585 kW / 595 kVA
  - Quimica subsistema → LFP, 430 kWh
  - Integracion solar → MPPT 60 kW (opcional)
  - Compatibilidad → Paralelo con generadores
- **CTA:** "Descargar folleto" (PDF)

### 4.5 Software (Ampd Pulse)
- **Fondo:** Claro
- **Layout:** 2 columnas (copy | screenshot)
- **H2:** "Impulsado por software: Ampd Pulse"
- **Texto + CTA** "mas informacion" a pagina software

### 4.6 Industrias cross-sell
- **Fondo:** Oscuro
- **H2:** "Los productos Ampd son ideales para impulsar una gran variedad de sectores"
- **CTA:** "Industrias"

### 4.7 Garantia Ampd (4 pasos)
- **Fondo:** Claro
- **H2:** "La garantia Ampd"
- **Subtitulo:** "No solo suministramos energia, brindamos tranquilidad..."
- **Grid 4 columnas** con icono 3D + paso + titulo + texto:
  1. Tecnologia de baterias de primer nivel (CATL LFP, 9000 ciclos)
  2. Certificacion global (IEC/UL por SGS)
  3. Fiabilidad validada (cientos de horas en campo)
  4. Soporte local, garantia global (5 anos partes)

### 4.8 CTA final
- Igual que home

### Variaciones por producto
- **Enertainer:** Agrega seccion hibrido (generador+ESS), caso economico con numeros
- **Ampd Silo:** Agrega seccion detalle con render exterior/interior (hover)
- **Software:** Reemplaza specs por features de Ampd Pulse, agrega seccion tecnica y aplicaciones por industria

---

## 5. PAGINA DE SECTOR (template)

Ejemplo: Construccion. Todas las industrias siguen el mismo template.

### 5.1 Hero
- **Layout:** 2 columnas (texto | imagen del sector)
- **H1:** Nombre del sector
- **Subtitulo:** "Energia mas inteligente para [sector]"
- **Texto:** Parrafo contextual
- **CTAs:** "Contacto" + "Mas informacion"

### 5.2 Desafio vs Solucion
- **Layout:** Split 2 columnas
- **Izquierda "El desafio":** Titulo + imagen + 2-3 parrafos del problema
- **Derecha "La solucion":** Titulo + imagen + 2-3 parrafos de como BESS resuelve
- **3 boxes debajo:**
  - Rendimiento financiero (ROI en ~1-2 anos)
  - Sostenibilidad (reduccion CO2 hasta 90%)
  - Probado (referente mundial en BESS)

### 5.3 Casos de uso (grid cards)
- **H2:** "Ejemplos de casos de uso en [sector]"
- **Grid 2-3 columnas** con 5-6 cards
- **Cada card:** Imagen + titulo + descripcion 1-2 lineas
- Ejemplos construccion: Gruas torre, Herramientas, Bombas, Montacargas, Respaldo emergencia

### 5.4 Gama productos
- Simple link a pagina de productos

### 5.5 Ventajas ESS (grid iconos)
- **H2:** "Por que Ampd?"
- **Grid 5x2** con 10 iconos + etiqueta:
  1. Reduccion de gastos operativos
  2. Funcionamiento silencioso
  3. Reduccion de emisiones in situ
  4. Energia redundante
  5. Reduccion de personal
  6. Mayor resiliencia y disponibilidad
  7. Disponibilidad de despliegues integrados
  8. Mejora en salud y seguridad
  9. Robusto y movil
  10. Integracion con controladores de terceros

### 5.6 Ejemplos ROI
- **Grid 2x2 cards** con metricas por caso de uso:
  - Gruas torre: 1.7 anos ROI, 72% CO2
  - Planta hormigon: 2.2 anos ROI, 50% CO2
  - Casetas obra: 1.7 anos ROI, 58% CO2
  - Construccion edificios: 1 ano ROI, 72% CO2
- **Disclaimer:** "Los ejemplos se proporcionan solo con fines ilustrativos."

### 5.7 CTA final
- Igual que home

### Variaciones por sector
- **Mineria:** 5 casos especificos (campamentos, talleres remotos, oficinas, bombeo drenaje, EV), ROI 7m-2.2a
- **Puertos:** Shore power, gruas, reefers, respaldo
- **Eventos:** Enfasis en silencio y cero emisiones
- Cada sector tiene sus propias fotos hero, desafio, solucion y casos de uso

---

## 6. ABOUT / NOSOTROS

### 6.1 Hero
- **Titulo:** Mision de la empresa
- **Texto:** Parrafo sobre transicion energetica
- **CTAs:** "mas informacion" + "conozca a nuestro equipo"

### 6.2 Video YouTube embebido

### 6.3 Logos clientes (mismos que home)

### 6.4 Objetivo/Vision
- Parrafo destacado centrado sobre plantas industriales del futuro

### 6.5 Equipo directivo
- **Grid 4 cards** con foto + nombre + cargo + link LinkedIn:
  - Brandon Ng — Cofundador y Presidente
  - Anthony Stewart — CEO
  - Chrystin Matuszek — CCO
  - Andrzej Skoskiewicz — COO

### 6.6 Stats empresa
- 400+ dispositivos ESS
- 196k t CO2 evitado
- 400+ proyectos
- 8 regiones
- 10+ socios

### 6.7 Evolucion ESS
- Texto + CTA a productos

### 6.8 Awards (grid 8 logos)
- Norrsken Impact/100 2023
- Earthshot Prize 2022 (Finalista)
- Hong Kong Green Innovations
- CLP 2022
- AEE International 2022
- Social Impact 2021
- Hong Kong ICT 2021
- Meaningful Business 100 2020

### 6.9 Diversidad e inclusion
- Stats: 10+ etnias, 13 nacionalidades, 18 idiomas

### 6.10 Formulario HubSpot + seccion Carreras

---

## 7. CONTACTO

### 7.1 Hero
- **Titulo:** "Contacte a Ampd"
- **Subtitulo:** "Red global"
- **Texto:** "Contamos con presencia global, con socios autorizados y personal local"

### 7.2 Mapa interactivo de distribuidores

### 7.3 Formulario HubSpot
- Campos: nombre, empresa, email, telefono (con validacion intl), mensaje
- Boton: "ENVIAR" (verde #0fb694)
- Validacion: verde #10B981 OK, rojo #F43F5E error

### 7.4 Oficinas por region
- Australia (Sydney)
- Hong Kong
- Singapur
- Reino Unido (Londres)
- EE.UU. (Delaware)

### Adaptacion Enerterra
- Reemplazar oficinas globales por: Santiago, Chile
- Formulario propio (Resend o similar)
- Agregar WhatsApp como canal

---

## 8. FOOTER (comun a todas)

### Estructura
```
[Logo Ampd]  [Login/Registro]  [Solicitar presupuesto]

[QR code] [AppStore] [GooglePlay]

PRODUCTOS        INDUSTRIAS           RECURSOS
- Ampd 200       - Construccion       - Servicio
- Ampd 400       - Mineria            - Perspectivas
- Enertainer     - Infraestructura    - Socios
- Ampd Silo      - Hormigon           - News
- Software       - Petroleo/gas       - Video Testimonials
                 - Microtuneles       - Sobre nosotros
                 - Eventos            - Contactenos
                 - Puertos            - FAQ
                                      - Terminos
                                      - Privacidad

CONTACTO POR REGION (5 oficinas con direccion + telefono)

[Instagram] [Facebook] [LinkedIn] [YouTube]

(c) 2026 AMPD ENERGY. TODOS LOS DERECHOS RESERVADOS.
```

### Adaptacion Enerterra
- Logo Enerterra + "Representante oficial de Ampd Energy"
- Quitar QR/apps (no aplica)
- Quitar login plataforma
- Simplificar a: Productos, Sectores, Empresa (Nosotros, Contacto, Terminos)
- Una sola ubicacion: Santiago, Chile
- Agregar email + WhatsApp + telefono local

---

## 9. DESIGN TOKENS — COMPARACION

| Aspecto | ampd.energy | Enerterra (design system) |
|---------|-------------|--------------------------|
| **Fuente titulos** | Montserrat 600-800 | Archivo 600, wdth 105 |
| **Fuente body** | Lato 400 | Archivo 400 |
| **Fuente cifras** | Montserrat | Geist Mono 500, tabular |
| **Verde primario** | #0fb694 | #0CB494 (landing) / #14B394 |
| **Verde hover** | #28ac8a | #0F9E82 |
| **Verde texto** | — | #0B7A64 (AA sobre blanco) |
| **Oscuro** | #2d2d36 | #0E1216 (carbon) |
| **Acero** | — | #4F718A (secundario propio) |
| **Navbar** | 72px sticky | 72-80px sticky |
| **Radios** | ~5px | 6px botones, 10px cards |
| **Modo** | Claro + secciones oscuras | Solo claro, secciones alternas |

**Nota:** El design system de Enerterra ya eleva la identidad de Ampd. La tipografia
Archivo es mas industrial que Montserrat, y el color Acero #4F718A diferencia a
Enerterra sin competir con el verde Ampd. Mantener estos tokens, no copiar los de Webflow.

---

## 10. PLAN DE PAGINAS A CONSTRUIR

### Prioridad 1 (lanzamiento)
1. Home (/)
2. Producto: Enertainer (/productos/enertainer)
3. Producto: Ampd 400 (/productos/ampd-400)
4. Producto: Ampd 200 (/productos/ampd-200)
5. Producto: Ampd Silo (/productos/ampd-silo)
6. Producto: Software (/productos/software)
7. Contacto (/contacto)

### Prioridad 2 (post-lanzamiento)
8. Catalogo productos (/productos)
9. Sector: Mineria (/sectores/mineria)
10. Sector: Construccion (/sectores/construccion)
11. Sector: Puertos (/sectores/puertos)
12. Sector: Infraestructura (/sectores/infraestructura)

### Prioridad 3 (expansion)
13. Sector: Hormigon (/sectores/hormigon)
14. Sector: Oil & Gas (/sectores/oil-gas)
15. Sector: Microtuneles (/sectores/microtuneles)
16. Sector: Eventos (/sectores/eventos)
17. Nosotros (/nosotros)

---

## 11. COMPONENTES REUTILIZABLES

Basado en el analisis, estos son los componentes que se repiten entre paginas:

| Componente | Usado en | Descripcion |
|------------|----------|-------------|
| `Navbar` | Todas | Sticky, mega menus, mobile hamburger |
| `Footer` | Todas | Links, contacto, copyright |
| `Hero` | Home, productos, sectores, about | Imagen + copy + CTAs, variantes dark/light |
| `SectionHeader` | Multiples | Eyebrow + titulo + lead + CTA opcional |
| `ProductCard` | Home, catalogo | Render + nombre + spec + link |
| `ProductSwitcher` | Fichas producto | Tabs horizontales entre productos |
| `FeatureGrid` | Productos, sectores | Grid de cards con titulo + texto |
| `StatsBar` | Home, about | Cifras animadas en fila |
| `ProcessSteps` | Home | 4 pasos con iconos 3D |
| `TestimonialSlider` | Home | Slider con auto-rotacion 10s |
| `AssuranceGrid` | Productos (400/200) | 4 pasos garantia con iconos |
| `ChallengeVsSolution` | Sectores | Split 2 columnas + 3 benefit boxes |
| `UseCaseGrid` | Sectores | Grid cards con imagen + titulo + desc |
| `BenefitsIconGrid` | Sectores | 10 iconos + etiquetas en 5x2 |
| `ROIExamples` | Sectores | Cards con metricas ROI + CO2 |
| `CTABlock` | Todas (cierre) | Titulo + texto + boton, fondo oscuro |
| `ClientLogos` | Home, about | Carrusel horizontal de logos |
| `CompareTable` | (del design system) | BESS vs diesel, 8 filas |
| `QuoteForm` | Contacto, sidebar | Formulario cotizacion |
| `HybridFlow` | Enertainer | Diagrama generador + ESS + carga |
| `EconomicCase` | Enertainer | 3 columnas con calculo ahorro |
| `ProductDetail` | Enertainer, Silo | Render exterior/interior con hover |

---

## 12. ASSETS A DESCARGAR DE AMPD

La mayoria de los assets ya estan en `design-system/assets/`. Faltarian:

### Fotos de sectores (para paginas de industria)
- construction.avif (hero construccion)
- mining.avif (hero mineria) — ya tenemos algunas en assets/industries/
- Fotos de casos de uso por sector (~5 por sector × 8 sectores = ~40 fotos)

### Iconos de beneficios (grid 10 ventajas)
- Icons-01 a Icons-05 + Icons-07/08/10/15/16 (.png/.avif)
- Algunos ya estan en assets/icons/ como benefit-*.png

### Fotos de testimonios
- 3 fotos de testimonios del home

### Video
- YouTube embed (no necesita descarga, solo ID: 2pemy5FPHiI)
