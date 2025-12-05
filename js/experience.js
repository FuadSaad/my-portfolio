// ============================================
// EXPERIENCE PAGE - Timeline Scroll Animations
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // Timeline scroll animations
    const timelineObserver = new IntersectionObserver(function (entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered animation delay
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100);

                // Stop observing after animation
                timelineObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observe all timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

    // Add pulse animation to timeline dots on hover
    timelineItems.forEach(item => {
        const dot = item.querySelector('.timeline-dot');
        const content = item.querySelector('.timeline-content');

        if (content && dot) {
            content.addEventListener('mouseenter', function () {
                dot.style.animation = 'pulse 1s ease-in-out infinite';
            });

            content.addEventListener('mouseleave', function () {
                dot.style.animation = 'none';
            });
        }
    });

});
