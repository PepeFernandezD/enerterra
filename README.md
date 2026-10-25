# Enerterra Chile

Sitio web de **Enerterra Chile SpA**, representante oficial de [Ampd Energy](https://ampd.energy) en Chile. Sistemas de almacenamiento de energía en baterías (BESS) que reemplazan generadores diésel en faenas de minería, construcción, puertos e infraestructura.

**Dominio:** [enerterra.cl](https://enerterra.cl)  
**Deploy:** Vercel (root directory: `landing/`)

---

## Estructura del repositorio

```
enerterra-chile/
├── landing/                  ← Root del deploy en Vercel
│   ├── index.html            ← Landing original (v1)
│   ├── producto.html         ← Fichas de producto v1
│   ├── productos-data.js     ← Data productos v1
│   ├── img/                  ← Imágenes landing (32 archivos)
│   ├── assets/               ← Assets del design system (135 archivos)
│   │   ├── brand/            ← Logos Enerterra + Ampd
│   │   ├── products/         ← Renders y fotos por producto
│   │   ├── industries/       ← Fotos de sectores
│   │   ├── icons/            ← Iconos proceso, assurance, beneficios
│   │   ├── clients/          ← Logos clientes (~28)
│   │   ├── awards/           ← Premios (8)
│   │   ├── team/             ← Fotos equipo directivo
│   │   ├── site/             ← Fotos generales sitio web
│   │   └── docs/             ← Brochures PDF
│   └── v2/                   ← Sitio v2 (14 páginas)
│       ├── index.html        ← Home
│       ├── productos/        ← 5 fichas producto (?p=slug)
│       │   ├── index.html
│       │   └── data.js
│       └── sectores/         ← 8 páginas industria (?s=slug)
│           ├── index.html
│           └── data.js
├── design-system/            ← Design system exportado de Claude Design
│   ├── README.md             ← Documentación completa del sistema
│   ├── styles.css            ← Entry point CSS
│   ├── tokens/               ← Variables CSS (colors, typography, spacing, fonts, base)
│   ├── catalog.json          ← Catálogo completo de productos y empresa
│   └── assets/               ← Assets originales (copia en landing/assets/)
├── astro-site/               ← Proyecto Astro (experimental, no en producción)
├── docs/
│   └── ingenieria-inversa-ampd.md  ← Análisis de ampd.energy/es
├── CLAUDE.md                 ← Instrucciones de marca para Claude
└── .gitignore
```

## Sitio v2

Réplica del sitio de Ampd Energy adaptada para Enerterra Chile. 14 páginas estáticas con JS vanilla para renderizado dinámico de productos y sectores.

### Páginas

| Página | URL | Descripción |
|--------|-----|-------------|
| Home | `/v2/` | Hero, logos clientes, por qué Ampd, productos, proceso, testimonios, CTA |
| Ampd 200 | `/v2/productos/?p=ampd-200` | Ficha producto NextGen |
| Ampd 400 | `/v2/productos/?p=ampd-400` | Ficha producto NextGen |
| Enertainer | `/v2/productos/?p=enertainer` | Ficha producto original (stats, detalle, híbrido) |
| Ampd Silo | `/v2/productos/?p=ampd-silo` | Ficha producto compacto |
| Software | `/v2/productos/?p=software` | Ampd Pulse (monitoreo, reportes) |
| Construcción | `/v2/sectores/?s=construccion` | Sector con desafío/solución y ROI |
| Minería | `/v2/sectores/?s=mineria` | Sector con casos de uso mineros |
| Infraestructura | `/v2/sectores/?s=infraestructura` | Túneles, ferroviario, vial |
| Hormigón | `/v2/sectores/?s=hormigon` | Plantas de dosificación |
| Oil & Gas | `/v2/sectores/?s=oil-gas` | Perforación y operaciones |
| Microtúneles | `/v2/sectores/?s=microtuneles` | Tunelería de precisión |
| Eventos | `/v2/sectores/?s=eventos` | Energía silenciosa para eventos |
| Puertos | `/v2/sectores/?s=puertos` | Shore power y terminales |

### Stack técnico

- **HTML estático** con CSS custom properties (tokens del design system)
- **JS vanilla** para renderizado dinámico de productos/sectores y UI (mega menus, scroll reveal)
- **Google Fonts:** Archivo (variable width) + Geist Mono (tabular nums)
- **Imágenes:** AVIF, WebP, JPG, PNG — renders de producto y fotos de faena
- **Deploy:** Vercel (static hosting)

### Estilo visual

- Fondo secciones: `#2d2d36` (gris azulado oscuro)
- Cards contenedoras: `#f0f2f5`, border-radius 16px
- Acento verde Ampd: `#0CB494`
- CTA final: foto + panel verde con botón outline blanco
- Navbar: sticky `#2d2d36` con mega menus desplegables
- Padding secciones: `clamp(48px, 5vw, 72px)`

### Pendiente

- [ ] Página "Nosotros"
- [ ] Página "Contacto" con formulario
- [ ] SEO: meta tags, sitemap, robots.txt
- [ ] Decidir si v2 reemplaza v1 como landing principal

## Design System

Documentación completa en `design-system/README.md`. Incluye tokens CSS, catálogo de productos (`catalog.json`), guidelines de marca y componentes.

## Desarrollo local

```bash
# Servir el sitio completo
npx serve landing -l 3000

# Ver v1: http://localhost:3000
# Ver v2: http://localhost:3000/v2/
# Ver producto: http://localhost:3000/v2/productos/?p=ampd-400
# Ver sector: http://localhost:3000/v2/sectores/?s=mineria
```
