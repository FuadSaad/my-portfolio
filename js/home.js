// ============================================
// HOME PAGE - Hero Animations
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // Typewriter effect for hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');

    if (heroTitle) {
        // Add extra glow effect on hover
        heroTitle.addEventListener('mouseenter', function () {
            this.style.textShadow = '0 0 30px rgba(99, 102, 241, 0.6)';
        });

        heroTitle.addEventListener('mouseleave', function () {
            this.style.textShadow = 'none';
        });
    }

    // Parallax effect for floating shapes
    const shapes = document.querySelectorAll('.shape');

    window.addEventListener('mousemove', function (e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 20;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;

            shape.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

});
