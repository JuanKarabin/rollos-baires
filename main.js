document.addEventListener("DOMContentLoaded", function() {

    // 1. Inicializar WOW.js
    // Esto buscará todas las clases .wow y aplicará las animaciones
    new WOW().init();


    // 2. Efecto de Navbar al hacer Scroll
    const navbar = document.getElementById('navbarPrincipal');
    
    // Función para cambiar la clase de la navbar
    function handleScroll() {
        if (window.scrollY > 50) {
            // Si el scroll es mayor a 50px, añade la clase 'scrolled'
            navbar.classList.add('scrolled');
        } else {
            // Si está arriba, la quita
            navbar.classList.remove('scrolled');
        }
    }

    // Escucha el evento 'scroll' en la ventana
    window.addEventListener('scroll', handleScroll);
    
    // Ejecuta la función una vez al cargar por si la página se carga a mitad
    handleScroll();

});