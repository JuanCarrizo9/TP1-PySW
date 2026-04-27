 //LOGICA DEL HERO USANDO JQuery
 $(document).ready(function() {
    $('.titulo-principal').animate({
        opacity: 1,
        top: '0px'
    }, 1000);

    $('.sub').delay(500).animate({
        opacity: '1',
        top: '0px'
    }, 1000);
 })

 // DARK MODE
    const btnContainer = document.getElementById('btn-dark');
    const body = document.body;
    const btnToggle = document.getElementById('dark-mode-toggle');

    function actualizarBoton(isDark) {
    if (isDark) {
        // Inyecta el ícono del sol si está en oscuro
        btnToggle.innerHTML = '<i class="bi bi-sun"></i> Modo Claro';
    } else {
        // Inyecta el ícono de la luna si está en claro
        btnToggle.innerHTML = '<i class="bi bi-moon"></i> Modo Oscuro';
    }
}

    btnContainer.addEventListener('click', () => {
        const esOscuro = body.classList.toggle('dark-mode');
        actualizarBoton(esOscuro);
        localStorage.setItem('theme', esOscuro ? 'dark' : 'light');
    });

        const temaGuardado = localStorage.getItem('theme');
        if (temaGuardado === 'dark') {
            body.classList.add('dark-mode');
            actualizarBoton(true);
        }

        // SPINNER DE CARGA
        window.addEventListener('load', () => {
            const spinner = document.getElementById('spinner');
            spinner.classList.add('oculto');
        });

        // SCROLL REVEAL
        const elementos = document.querySelectorAll('.scroll-reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.15 });

        elementos.forEach(el => observer.observe(el));

        // STATS CON JQUERY

       $(document).ready(function() {
    // 1. Creamos el observador
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si la sección es visible en la pantalla
            if (entry.isIntersecting) {
                iniciarAnimacion(); 
                observer.unobserve(entry.target); // Dejamos de vigilar para que solo lo haga una vez
            }
        });
    }, { threshold: 0.5 }); // Se activa cuando se ve el 50% de la sección

    // 2. Le decimos qué vigilar (la sección .stats)
    const target = document.querySelector('.stats');
    if (target) {
        observer.observe(target);
    }

    
    function iniciarAnimacion() {
        $('.numero').each(function () {
            let valorFinal = parseInt($(this).text().replace(/[^0-9]/g, ''));
            let tienePlus = $(this).text().includes('+');

            $(this).prop('Counter', 0).animate({
                Counter: valorFinal
            }, {
                duration: 3500,
                easing: 'swing',
                step: function (now) {
                    $(this).text((tienePlus ? "+" : "") + Math.ceil(now));
                }
            });
        });
    }
});