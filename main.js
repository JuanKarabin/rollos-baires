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

    // ==================================================
    //       Manejo del Formulario de Contacto
    // ==================================================
    const contactForm = document.querySelector('form[name="contacto"]'); 

    if (contactForm) { 
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que la página se recargue

            const formData = new FormData(contactForm);
            const body = new URLSearchParams(formData).toString(); 

            // Enviar a Netlify
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: body 
            })
            .then(response => {
                if (response.ok) {
                    // Si el envío fue exitoso:
                    // 1. Obtener la instancia del modal
                    const successModalElement = document.getElementById('successModal');
                    const successModal = new bootstrap.Modal(successModalElement);
                    
                    // 2. Mostrar el modal
                    successModal.show();
                    
                    // 3. Limpiar el formulario
                    contactForm.reset(); 
                } else {
                    // Si hubo un error en Netlify
                    alert('Hubo un error al enviar el mensaje. Por favor, intentá de nuevo.');
                }
            })
            .catch(error => {
                console.error('Error de red:', error);
                alert('Hubo un error de conexión. Por favor, revisá tu internet e intentá de nuevo.');
            });
        });
    } 

});