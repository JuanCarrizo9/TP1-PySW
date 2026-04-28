// ==========================================
// LÓGICA DE DESTINOS (Natali Suarez)
// ==========================================
$(document).ready(function() {

    // --- 1. Filtros Dinámicos ---
    $('.filter-btn').on('click', function() {
        // Obtenemos la categoría del botón apretado
        let categoria = $(this).attr('data-category');

        // Cambiamos el estilo de los botones para que se note cuál está activo
        $('.filter-btn').removeClass('btn-primary').addClass('btn-outline-primary');
        $(this).removeClass('btn-outline-primary').addClass('btn-primary');

        if (categoria === 'todos') {
            // Si es todos, mostramos todo
            $('.item-destino').fadeIn(500);
        } else {
            // Filtramos: ocultamos los que no coinciden y mostramos los que sí
            $('.item-destino').hide(); 
            $('.item-destino').filter('[data-type="' + categoria + '"]').fadeIn(500);
        }
    });

    // --- 2. Efecto Zoom con jQuery (Punto 2 de la consigna) ---
    // Cuando el mouse entra a la card
    $('.card-zoom').on('mouseenter', function() {
        $(this).find('img').css({
            'transform': 'scale(1.1)',
            'transition': 'transform 0.4s ease'
        });
    });

    // Cuando el mouse sale de la card
    $('.card-zoom').on('mouseleave', function() {
        $(this).find('img').css('transform', 'scale(1)');
    });

});