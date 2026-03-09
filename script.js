document.addEventListener('DOMContentLoaded', () => {

    /* ==============================
       MENU MOBILE
    ============================== */

    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        const icon = mobileMenu.querySelector('i');

        mobileMenu.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');

            if (icon) {
                icon.classList.toggle('fa-bars', !isActive);
                icon.classList.toggle('fa-times', isActive);
            }

            mobileMenu.setAttribute('aria-expanded', isActive);
        });

        // Fechar menu ao clicar em link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
                mobileMenu.setAttribute('aria-expanded', false);
            });
        });
    }


    /* ==============================
       ATUALIZAR ANO DO FOOTER
    ============================== */

    const currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* ==============================
       NAVBAR SCROLL EFFECT
    ============================== */

    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }


    /* ==============================
       SCROLL REVEAL
    ============================== */

    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '40px',
            duration: 800,
            delay: 150,
            opacity: 0,
            scale: 0.95,
            easing: 'ease-in-out',
            reset: false
        });

        sr.reveal('.hero-content h1');
        sr.reveal('.hero-content h2', { delay: 200 });
        sr.reveal('.hero-content p', { delay: 300 });
        sr.reveal('.hero-content .cta-button', { delay: 400 });

        sr.reveal('.section-title', { origin: 'left' });
        sr.reveal('.sobre-texto p', { interval: 150 });
        sr.reveal('.sobre-imagem img', { origin: 'right', scale: 1 });

        sr.reveal('.projeto-card', { interval: 150 });
        sr.reveal('.habilidade-categoria', { interval: 100 });

    } else {
        console.warn('ScrollReveal library not loaded.');
    }


});
