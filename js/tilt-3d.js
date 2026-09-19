/**
 * Vanilla 3D Tilt Engine with Specular Glare
 * Provides hardware-accelerated 3D tilt and dynamic light reflection
 * Lightweight, 60fps, touch-friendly, zero external dependencies.
 */

(function () {
    'use strict';

    function initTilt(selector, options) {
        const defaultOptions = {
            maxTilt: 10,       // Maximum tilt rotation in degrees
            perspective: 900,  // 3D perspective value
            scale: 1.025,      // Scale on hover
            speed: 400,        // Transition speed in ms
            glare: true,       // Dynamic specular reflection glare
            maxGlare: 0.28     // Maximum glare opacity
        };

        const settings = Object.assign({}, defaultOptions, options);
        const elements = document.querySelectorAll(selector);

        elements.forEach(el => {
            if (el.dataset.tiltInitialized) return;
            el.dataset.tiltInitialized = 'true';

            let glareEl = null;

            el.style.transformStyle = 'preserve-3d';
            el.style.transition = `transform ${settings.speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;

            if (settings.glare) {
                glareEl = document.createElement('div');
                glareEl.className = 'tilt-glare';
                glareEl.style.position = 'absolute';
                glareEl.style.top = '0';
                glareEl.style.left = '0';
                glareEl.style.width = '100%';
                glareEl.style.height = '100%';
                glareEl.style.overflow = 'hidden';
                glareEl.style.pointerEvents = 'none';
                glareEl.style.borderRadius = window.getComputedStyle(el).borderRadius;
                glareEl.style.opacity = '0';
                glareEl.style.transition = `opacity ${settings.speed}ms ease`;
                glareEl.style.zIndex = '3';

                const glareInner = document.createElement('div');
                glareInner.className = 'tilt-glare-inner';
                glareInner.style.position = 'absolute';
                glareInner.style.top = '50%';
                glareInner.style.left = '50%';
                glareInner.style.pointerEvents = 'none';
                glareInner.style.backgroundImage = 'radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, rgba(96, 165, 250, 0.35) 35%, rgba(139, 92, 246, 0) 70%)';
                glareInner.style.width = '200%';
                glareInner.style.height = '200%';
                glareInner.style.transform = 'translate(-50%, -50%)';

                glareEl.appendChild(glareInner);
                el.appendChild(glareEl);
            }

            let isHovered = false;

            function onMouseEnter() {
                isHovered = true;
                el.style.transition = 'none';
                if (glareEl) glareEl.style.opacity = '1';
            }

            function onMouseMove(e) {
                if (!isHovered) return;

                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const xPercent = (x / rect.width) * 2 - 1;
                const yPercent = (y / rect.height) * 2 - 1;

                const tiltX = -(yPercent * settings.maxTilt).toFixed(2);
                const tiltY = (xPercent * settings.maxTilt).toFixed(2);

                el.style.transform = `perspective(${settings.perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})`;

                if (glareEl) {
                    const glareInner = glareEl.querySelector('.tilt-glare-inner');
                    if (glareInner) {
                        const angle = Math.atan2(y - rect.height / 2, x - rect.width / 2) * (180 / Math.PI) - 90;
                        const opacity = Math.min(
                            settings.maxGlare,
                            (Math.sqrt(Math.pow(xPercent, 2) + Math.pow(yPercent, 2)) * settings.maxGlare)
                        );
                        glareInner.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
                        glareEl.style.opacity = opacity.toString();
                    }
                }
            }

            function onMouseLeave() {
                isHovered = false;
                el.style.transition = `transform ${settings.speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
                el.style.transform = `perspective(${settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                if (glareEl) {
                    glareEl.style.opacity = '0';
                }
            }

            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mousemove', onMouseMove);
            el.addEventListener('mouseleave', onMouseLeave);
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        initTilt('.stat-card, .feature-card, .project-card, .research-card, .dev-terminal, [data-tilt]', {
            maxTilt: 10,
            perspective: 900,
            scale: 1.025,
            glare: true,
            maxGlare: 0.28
        });
    });

    window.initTilt = initTilt;
})();
