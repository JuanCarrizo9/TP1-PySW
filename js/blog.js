// BLOG.JS: Logica especifica de la pagina del blog

// FILTRO DE POSTS CON JQUERY
$(document).ready(function(){
    $(".filter-btn").click(function(){
        let value = $(this).attr('data-filter');
        if(value == "all") {
            $('.blog-post').show('300');
        } else {
            $(".blog-post").not('.'+value).hide('300');
            $('.blog-post').filter('.'+value).show('300');
        }
        $(".filter-btn").removeClass("btn-primary").addClass("btn-outline-primary");
        $(this).addClass("btn-primary").removeClass("btn-outline-primary");
    });
});

// ANIMACIONES AOS
AOS.init({
    duration: 1000,
    once: true
});
