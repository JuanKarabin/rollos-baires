document.addEventListener("DOMContentLoaded", function() {

    // 1. Animaciones de Scroll con IntersectionObserver (Tu código)
    const animatedElements = document.querySelectorAll(".fade-slide-left, .fade-slide-right, .fade-slide-up");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("visible");
                // Desconectamos el observador para este elemento una vez animado
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Se activa al 10% de visibilidad

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    
    // 2. Efecto de Navbar al hacer Scroll (Lo dejamos)
    const navbar = document.getElementById('navbarPrincipal');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    // Ejecuta la función una vez al cargar por si la página se carga a mitad
    handleScroll();

});