document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar-links a');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        navbar.style.boxShadow = window.scrollY > 10
            ? '0 4px 20px rgba(166, 35, 74, 0.08)'
            : 'none';

        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    });


    // ---------- Fade In Animation ----------
    const fadeElements = document.querySelectorAll(
        "section, .timeline-item, .project-card, .activity-card"
    );

    fadeElements.forEach((element) => {
        element.classList.add("fade-in");
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    fadeElements.forEach((element) => {
        observer.observe(element);
    });


    // ---------- Contact Form (Formspree) ----------
    if (window.formspree) {
        window.formspree('initForm', {
            formElement: '#contact-form',
            formId: 'xgogdeqn'
        });
    }
});