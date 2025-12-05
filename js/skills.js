// ============================================
// SKILLS PAGE - Progress Bar Animations
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // Intersection Observer for skill cards
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const skillObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animate')) {
                // Add animate class to trigger progress bar animation
                entry.target.classList.add('animate');

                // Get skill level from data attribute
                const skillLevel = entry.target.getAttribute('data-skill-level');
                const progressBar = entry.target.querySelector('.skill-progress-bar');

                // Set CSS variable for animation
                if (progressBar && skillLevel) {
                    progressBar.style.setProperty('--skill-level', skillLevel + '%');

                    // Animate the progress bar
                    setTimeout(() => {
                        progressBar.style.width = skillLevel + '%';
                    }, 100);
                }

                // Stop observing after animation
                skillObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        skillObserver.observe(card);
    });

    // Add hover effect to skill cards
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });

        card.addEventListener('mouseleave', function () {
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

});
