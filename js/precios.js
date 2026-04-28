$(document).ready(function() {
    // INICIALIZAR TOOLTIPS DE BOOTSTRAP
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // EVENTO JQUERY: Click en fila de la tabla
    $('#tabla-precios tbody tr').on('click', function() {
        const destino = $(this).find('td:first').text();
        console.log("Seleccionaste el plan para: " + destino);
    });
});