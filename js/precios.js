$(document).ready(function() {
    // 1. INICIALIZAR TOOLTIPS (Requisito de Bootstrap)
    // Esto hace que los iconos (i) con data-bs-toggle muestren el texto
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // 2. LÓGICA DE MODO OSCURO
    $('#dark-mode-toggle').on('click', function() {
        $('body').toggleClass('dark-mode');
        const isDark = $('body').hasClass('dark-mode');
        $(this).text(isDark ? '☀ Modo Claro' : '☽ Modo Oscuro');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Cargar tema guardado
    if (localStorage.getItem('theme') === 'dark') {
        $('body').addClass('dark-mode');
        $('#dark-mode-toggle').text('☀ Modo Claro');
    }

    // 3. EVENTO EXTRA JQUERY (Opcional: Click en fila)
    $('#tabla-precios tbody tr').on('click', function() {
        const destino = $(this).find('td:first').text();
        console.log("Seleccionaste el plan para: " + destino);
    });
});