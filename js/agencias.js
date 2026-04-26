// AGENCIAS - Flip cards y rating con jQuery

$(document).ready(function() {

    // FLIP CARD TOGGLE
    $('.flip-card').on('click', function(e) {
        if ($(e.target).hasClass('estrella-js')) return;
        $(this).toggleClass('flipped');
    });

    // RATING DE ESTRELLAS
    var textos = ['Muy malo', 'Malo', 'Regular', 'Bueno', 'Excelente'];

    // Inicializar ratings
    $('.rating-jquery').each(function() {
        activarEstrellas($(this), $(this).data('rating'));
    });

    // Click en estrella
    $('.estrella-js').on('click', function(e) {
        e.stopPropagation();
        var valor = $(this).data('value');
        var contenedor = $(this).parent();
        contenedor.data('rating', valor);
        activarEstrellas(contenedor, valor);
        contenedor.siblings('.rating-texto')
            .text(textos[valor - 1])
            .css('color', 'rgba(255, 255, 255, 0.9)');
    });

    // Hover preview
    $('.estrella-js').on('mouseenter', function() {
        var valor = $(this).data('value');
        var contenedor = $(this).parent();
        activarEstrellas(contenedor, valor);
        contenedor.siblings('.rating-texto')
            .text(textos[valor - 1])
            .css('color', 'rgba(255, 255, 255, 0.6)');
    });

    // Restaurar al salir del hover
    $('.rating-jquery').on('mouseleave', function() {
        activarEstrellas($(this), $(this).data('rating'));
        $(this).siblings('.rating-texto').text('');
    });

    // Activar estrellas hasta un valor
    function activarEstrellas(contenedor, valor) {
        contenedor.find('.estrella-js').each(function() {
            $(this).toggleClass('activa', $(this).data('value') <= valor);
        });
    }

});
