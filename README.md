# Turismo y Nada Mas

Sitio web de turismo hecho con HTML, CSS y un poco de JavaScript vanilla. La idea era armar algo visualmente atractivo sin usar ningun framework ni libreria externa, todo desde cero

## Como esta organizado el proyecto

```
TP1-PySW-main/
├── pages/
│   ├── index.html         → Pagina principal con hero, cards, estadisticas y testimonios
│   ├── destinos.html      → Galeria con filtros y tabla de precios
│   ├── agencias.html      → Tarjetas con efecto flip y rating
│   └── precios.html       → Comparador de planes con tooltips
├── styles/
│   ├── main.css           → Estilos globales compartidos entre todas las paginas
│   ├── index.css          → Estilos especificos del index
│   ├── destinos.css       → Estilos de la galeria, filtros y comentarios
│   ├── agencias.css       → Estilos de las flip cards y estrellas
│   └── precios.css        → Estilos de la tabla y los tooltips
└── assets/                → Imagenes y el video del hero
```

## Por que hice las cosas asi

### Separar el CSS en archivos

En vez de meter todo en un solo CSS gigante, preferi tener un `main.css` con lo que se repite en todas las paginas (header, footer, dark mode, reset) y despues un archivo aparte por cada pagina. Asi si tengo que tocar algo de destinos no me arriesgo a romper otra cosa

### Variables CSS

Use custom properties para los colores, fuentes, sombras, etc. La ventaja principal es que si quiero cambiar un color lo cambio en un solo lugar y se actualiza en todo el sitio, ademas me sirvio mucho para el dark mode

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

Para el modo oscuro simplemente le agrego la clase `dark-mode` al `<body>` con JavaScript y en el CSS redefino las variables. Por ejemplo `--blanco` pasa a ser `#121212` y con eso todo el sitio se adapta sin tener que cambiar cada elemento uno por uno. La preferencia del usuario se guarda en `localStorage` para que no se pierda al recargar

### Filtrado de destinos sin JavaScript

Esta fue una de las partes que mas me gusto. Los filtros de la galeria funcionan solo con CSS usando `<input type="radio">` escondidos y selectores de hermanos (`~`). Cuando seleccionas una categoria se ocultan los que no coinciden:

```css
#cultural:checked ~ .masonry-gallery .destinos-item:not(.cultural) {
    display: none;
}
```

No necesite JS para esto, lo cual me parecio bastante interesante

### Galeria estilo masonry

Para lograr ese efecto de mosaico donde las imagenes tienen distintas alturas use CSS Grid con `grid-auto-rows: 200px` y `grid-auto-flow: dense`. Las imagenes que queria mas grandes tienen la clase `.tall` que les da `grid-row: span 2`

### Tarjetas con efecto flip (agencias)

Las tarjetas de las agencias giran en 3D al pasar el mouse. Esto lo logre usando `perspective` en el contenedor, `transform-style: preserve-3d` para que se mantenga el efecto 3D y `backface-visibility: hidden` para esconder la cara de atras cuando no corresponde. Al hacer hover rota 180 grados en el eje Y

### Rating de estrellas con CSS

Las estrellas de calificacion estan hechas solo con CSS. Use `flex-direction: row-reverse` asi el selector `~` (hermano general) funciona para iluminar las estrellas desde la que haces hover hacia la izquierda. Las que estan activas por defecto tienen una animacion de brillo con delays escalonados para que se vea un efecto tipo "ola"

### Carrusel de testimonios

El carrusel del index tambien funciona sin JS. Son radio buttons escondidos que al seleccionarse mueven el contenedor con `translateX`, cada slide ocupa un 33.333% del ancho total

### Tooltips en la tabla de precios

Algunos precios tienen un tooltip que aparece al pasar el mouse. Esta hecho con `::after` y `content: attr(data-text)`, asi que el texto del tooltip esta en el HTML como atributo `data-text` y el CSS lo muestra sin necesidad de JS

### Avatares generados con CSS

Los avatares de la seccion de comentarios no son imagenes, estan hechos con un `div` con degradado y un `::after` que muestra las iniciales usando `content: attr(data-iniciales)`

## El JavaScript que use

Trate de usar la menor cantidad posible de JS, lo que hay es:

- **Dark mode**: toggle de la clase en el body + guardar preferencia en localStorage
- **Spinner de carga**: se esconde con la clase `.oculto` cuando la pagina termina de cargar (`window.load`)
- **Scroll reveal**: usa `IntersectionObserver` para ir mostrando los elementos con una animacion cuando entran en pantalla

El script se repite en cada HTML porque no quise crear un archivo `.js` aparte para tan poco codigo

## Animaciones

| Animacion | Donde se usa | Que hace |
|---|---|---|
| `fadeUp` | Titulo del hero | Aparece de abajo hacia arriba |
| `bounceIn` | Numeros de estadisticas | Hace un efecto de rebote al aparecer |
| `flotar` | Iconos de agencias | Sube y baja suavemente en loop |
| `pulsar` | Texto "Gira la tarjeta" | Parpadea para llamar la atencion |
| `brillar` | Estrellas del rating | Escala que se repite con delays |
| `girar` | Spinner de carga | Gira 360 grados infinitamente |

## Accesibilidad

Le puse `aria-label` a los botones, iframes y elementos interactivos. Tambien use `focus-visible` para que el outline solo aparezca cuando navegas con teclado. La tabla de destinos en mobile se transforma en formato de tarjeta usando `data-label` y `::before` para mostrar los encabezados

## Imagenes

Use formatos modernos como `avif` y `webp` porque pesan menos, y para las que no consegui en esos formatos quedaron en `jpg`. El video del hero esta en `mp4` con `autoplay muted loop`
