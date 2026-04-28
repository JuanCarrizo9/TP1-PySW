# Turismo y Nada Mas

Sitio web de turismo hecho con HTML, CSS, JavaScript vanilla, jQuery y Bootstrap 5. La idea fue armar algo visualmente atractivo combinando interacciones CSS puras con logica dinamica en JS, todo sin frameworks pesados

## Como esta organizado el proyecto

```
TP1-PySW-main/
├── index.html              → Pagina principal con hero, cards, estadisticas y testimonios
├── pages/
│   ├── destinos.html       → Galeria con filtros dinamicos y tabla de precios
│   ├── agencias.html       → Tarjetas con efecto flip y rating de estrellas
│   ├── precios.html        → Comparador de planes con tooltips
│   ├── contacto.html       → Formulario de contacto con validacion completa
│   └── blog.html           → Blog con filtros por categoria y comentarios
├── styles/
│   ├── main.css            → Estilos globales (header, footer, dark mode, reset, spinner)
│   ├── index.css           → Estilos del hero, cards y estadisticas
│   ├── destinos.css        → Estilos de la galeria y filtros
│   ├── agencias.css        → Estilos de las flip cards y estrellas
│   ├── precios.css         → Estilos de la tabla y tooltips
│   ├── contacto.css        → Estilos del formulario y la info de contacto
│   └── blog.css            → Estilos de los posts y comentarios del blog
├── js/
│   ├── main.js             → Logica global (dark mode, spinner, scroll reveal, stats)
│   ├── destinos.js         → Filtros dinamicos y efecto zoom en cards
│   ├── agencias.js         → Flip cards toggle y rating de estrellas interactivo
│   ├── precios.js          → Inicializacion de tooltips y seleccion de filas
│   ├── contacto.js         → Validacion de formulario campo por campo y envio simulado
│   └── blog.js             → Filtro de posts por categoria y animaciones AOS
├── assets/                 → Imagenes (avif, webp, jpg, jfif) y video del hero (mp4)
└── package.json            → Dependencia: Bootstrap 5.3
```

## Tecnologias usadas

| Tecnologia | Para que se uso |
|---|---|
| HTML5 | Estructura semantica de todas las paginas |
| CSS3 | Estilos, animaciones, dark mode, diseño responsivo |
| JavaScript vanilla | IntersectionObserver, localStorage, manipulacion del DOM |
| jQuery 3.7 | Animaciones del hero, contadores, validacion de formularios, filtros |
| Bootstrap 5.3 | Grid responsivo, navbar, carousel, modals, tooltips, iconos |
| AOS (Animate On Scroll) | Animaciones de entrada en la pagina del blog |

## Por que hice las cosas asi

### Separar CSS y JS en archivos

En vez de meter todo en archivos gigantes, hay un `main.css` y un `main.js` con lo que se repite en todas las paginas (header, footer, dark mode, spinner, scroll reveal) y despues un archivo aparte por cada pagina. El JavaScript antes estaba inline en cada HTML y se modularizo a archivos dedicados en la carpeta `js/`

### Variables CSS

Use custom properties para los colores, fuentes, sombras, etc. Si hay que cambiar un color se cambia en un solo lugar y se actualiza en todo el sitio, ademas es la base del dark mode

```css
:root {
    --primario: #2a9d8f;
    --secundario: #264653;
    --acento: #e9c46a;
    --blanco: #ffffff;
    --negro: #212121;
    --gris-claro: #f4f4f4;
}
```

### Dark mode

Para el modo oscuro se agrega la clase `dark-mode` al `<body>` con JavaScript y en el CSS se redefinen las variables. Por ejemplo `--blanco` pasa a ser `#121212` y con eso todo el sitio se adapta sin tener que cambiar cada elemento. La preferencia se guarda en `localStorage` y el boton cambia entre el icono de luna y sol segun el estado

### Navegacion con Bootstrap

La navegacion usa el componente `navbar` de Bootstrap 5 con `navbar-expand-lg`, lo que la hace responsiva automaticamente: en pantallas chicas se colapsa en un menu hamburguesa. Los links se mantienen consistentes entre todas las paginas usando rutas relativas (`./` desde el index y `../` desde las subpaginas)

## Funcionalidades por pagina

### Index (pagina principal)

- **Hero con video**: Video de fondo en `autoplay muted loop` con overlay de texto y boton CTA
- **Animacion del hero con jQuery**: El titulo y subtitulo aparecen con `.animate()` controlando opacidad y posicion
- **Cards de destinos**: Grid responsivo con Bootstrap (`col-12 col-md-6 col-lg-3`) mostrando 4 destinos destacados
- **Estadisticas animadas**: Circulos con numeros que se animan usando jQuery `.animate()` con un `IntersectionObserver` para que arranque cuando la seccion es visible (solo una vez)
- **Carrusel de testimonios**: Usa el componente `carousel` de Bootstrap con indicadores circulares personalizados, flechas de control y fotos de viajeros
- **Modal de phishing educativo**: Un modal de Bootstrap que simula un correo fraudulento y enseña a detectar estafas (modulo de ciberseguridad de la UNJu)
- **Newsletter en el footer**: Formulario de suscripcion con boton que tiene un icono sprite animado

### Destinos

- **Filtros dinamicos con jQuery**: Los botones filtran las cards por categoria usando `fadeIn/fadeOut` y cambiando las clases de estilo activo
- **Efecto zoom con jQuery**: Las cards tienen un efecto de escala en la imagen al hacer `mouseenter/mouseleave` usando `.css()` de jQuery
- **Galeria estilo masonry**: CSS Grid con `grid-auto-rows` y `grid-auto-flow: dense` para el mosaico de imagenes

### Agencias

- **Tarjetas flip 3D**: Las tarjetas giran al hacer click usando `perspective`, `transform-style: preserve-3d` y `backface-visibility: hidden`. El toggle es con jQuery agregando/removiendo la clase `.flipped`
- **Rating de estrellas interactivo con jQuery**: Sistema de calificacion con click, hover preview y restauracion al salir. Las estrellas activas se manejan con `.toggleClass()` y los textos descriptivos cambian dinamicamente

### Precios

- **Tooltips de Bootstrap**: Se inicializan con jQuery sobre los elementos que tienen `data-bs-toggle="tooltip"`
- **Seleccion de filas**: Evento jQuery `click` en las filas de la tabla que loguea el destino seleccionado

### Contacto

- **Formulario con validacion completa en jQuery**: Validacion en tiempo real campo por campo (nombre, email, telefono, asunto, mensaje y terminos). Usa regex para email y telefono, contadores de caracteres con cambio de color segun el limite
- **Boton deshabilitado hasta completar**: El boton de envio se habilita solo cuando todos los campos requeridos son validos
- **Spinner de envio**: Overlay con spinner de Bootstrap que aparece al enviar, simula un delay de 2 segundos
- **Modal de confirmacion**: Despues del "envio" aparece un modal de Bootstrap confirmando el mensaje
- **Info de contacto lateral**: Tarjetas con direccion, telefono, email, WhatsApp y horarios de atencion

### Blog

- **Filtros de posts con jQuery**: Botones que filtran los articulos por categoria (`norte`, `aventura`) usando `.show()/.hide()` con animacion de 300ms
- **Animaciones AOS**: Los posts aparecen con efecto `fade-up` usando la libreria AOS (Animate On Scroll) con delays escalonados
- **Seccion de comentarios**: Comentarios de la comunidad con fotos de perfil circulares

## El JavaScript que se usa

El JS se organiza en un archivo global y archivos por pagina:

### main.js (global, se carga en todas las paginas)

- **Dark mode**: Toggle de clase en el body + icono dinamico + persistencia en `localStorage`
- **Spinner de carga**: Se oculta con la clase `.oculto` cuando la pagina termina de cargar (`window.load`)
- **Scroll reveal**: `IntersectionObserver` que agrega la clase `.visible` a los elementos cuando entran en pantalla
- **Animacion de hero con jQuery**: `.animate()` para opacidad y posicion del titulo y subtitulo
- **Contadores animados con jQuery**: `.animate()` con `Counter` y `IntersectionObserver` para los numeros de la seccion de estadisticas

### Archivos por pagina

| Archivo | Que hace |
|---|---|
| `destinos.js` | Filtros por categoria con jQuery + efecto zoom en imagenes |
| `agencias.js` | Toggle de flip cards + rating de estrellas interactivo |
| `precios.js` | Inicializa tooltips de Bootstrap + click en filas de tabla |
| `contacto.js` | Validacion completa del formulario con jQuery + envio simulado |
| `blog.js` | Filtro de posts con jQuery + inicializacion de AOS |

## Animaciones

| Animacion | Donde se usa | Que hace |
|---|---|---|
| `fadeUp` | Titulo del hero | Aparece de abajo hacia arriba |
| `bounceIn` | Numeros de estadisticas | Efecto de rebote al aparecer |
| `flotar` | Iconos de agencias | Sube y baja suavemente en loop |
| `pulsar` | Texto "Gira la tarjeta" | Parpadea para llamar la atencion |
| `brillar` | Estrellas del rating | Escala que se repite con delays |
| `girar` | Spinner de carga | Gira 360 grados infinitamente |
| `fade-up` (AOS) | Posts del blog | Aparecen desde abajo con delay escalonado |
| jQuery `.animate()` | Hero y contadores | Transiciones de opacidad y posicion |

## Accesibilidad

- `aria-label` en botones, iframes, spinner y elementos interactivos
- `focus-visible` para que el outline solo aparezca cuando se navega con teclado
- HTML semantico con `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`
- La tabla de destinos en mobile se transforma en formato tarjeta usando `data-label` y `::before`
- Meta descriptions en las paginas de contacto y blog

## Responsividad

El sitio es responsivo usando la combinacion de Bootstrap 5 (grid system con `col-12 col-md-* col-lg-*`) y media queries propias en CSS. La navbar se colapsa en hamburguesa en pantallas chicas con `navbar-expand-lg`. Los layouts cambian de multiples columnas a una sola columna en mobile

## Imagenes y recursos

- Formatos modernos: `avif` y `webp` como primera opcion por su menor peso
- Fallbacks en `jpg` y `jfif` para las imagenes que no se consiguieron en formatos modernos
- Video del hero en `mp4` con `autoplay muted loop playsinline`
- Sprite sheet para los iconos de redes sociales (`logos.webp`) y el boton del newsletter (`btn.png`)

## Librerias externas (via CDN)

- [Bootstrap 5.3.3](https://getbootstrap.com/) - CSS + JS + Iconos
- [jQuery 3.7.1](https://jquery.com/) - Manipulacion del DOM y animaciones
- [AOS 2.3.1](https://michalsnik.github.io/aos/) - Animaciones al hacer scroll (solo en blog)
