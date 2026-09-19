/**
 * Three.js Minimalist & Elegant 3D Ambient Canvas for Hero Section
 * Subtle 3D particle constellation & ambient orbital rings
 * Clean, lightweight, non-intrusive 60 FPS backdrop.
 */

(function () {
    'use strict';

    function initHero3D() {
        const canvas = document.getElementById('hero-3d-canvas');
        if (!canvas) return;

        if (typeof THREE === 'undefined') return;

        const container = canvas.parentElement;
        let width = container.clientWidth || window.innerWidth;
        let height = container.clientHeight || window.innerHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
        camera.position.z = 10;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const ambientGroup = new THREE.Group();
        scene.add(ambientGroup);

        // 1. Subtle Elegant 3D Orbital Tech Rings (Gentle background presence)
        const ringGeo1 = new THREE.RingGeometry(4.2, 4.22, 64);
        const ringMat1 = new THREE.MeshBasicMaterial({
            color: 0x3b82f6, // Royal Sapphire
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.12
        });
        const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
        ring1.rotation.x = Math.PI / 3;
        ambientGroup.add(ring1);

        const ringGeo2 = new THREE.RingGeometry(5.5, 5.52, 64);
        const ringMat2 = new THREE.MeshBasicMaterial({
            color: 0x8b5cf6, // Crown Amethyst
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.08
        });
        const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
        ring2.rotation.y = Math.PI / 4;
        ring2.rotation.x = -Math.PI / 6;
        ambientGroup.add(ring2);

        // 2. Dispersed Minimal 3D Tech Particles (Subtle constellation)
        const particleCount = 75;
        const particleGeo = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const particleData = [];

        for (let i = 0; i < particleCount; i++) {
            const x = (Math.random() - 0.5) * 18;
            const y = (Math.random() - 0.5) * 12;
            const z = (Math.random() - 0.5) * 6 - 2;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            particleData.push({
                x, y, z,
                vy: 0.002 + Math.random() * 0.003
            });
        }

        particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particleMat = new THREE.PointsMaterial({
            color: 0x93c5fd,
            size: 0.07,
            transparent: true,
            opacity: 0.55
        });
        const particleMesh = new THREE.Points(particleGeo, particleMat);
        ambientGroup.add(particleMesh);

        // Mouse interaction with smooth lerp
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        window.addEventListener('mousemove', function (e) {
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
            targetX = mouseX * 0.18;
            targetY = -mouseY * 0.12;
        });

        function onResize() {
            width = container.clientWidth || window.innerWidth;
            height = container.clientHeight || window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }
        window.addEventListener('resize', onResize);

        // Visibility observer to pause when scrolled out of view
        let isVisible = true;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { isVisible = entry.isIntersecting; });
        }, { threshold: 0.05 });
        observer.observe(container);

        function animate() {
            requestAnimationFrame(animate);
            if (!isVisible) return;

            // Very slow, calm rotation of rings
            ring1.rotation.z += 0.0008;
            ring2.rotation.z -= 0.0006;

            // Gentle particle drift
            const pos = particleGeo.attributes.position;
            for (let i = 0; i < particleCount; i++) {
                let y = pos.getY(i) + particleData[i].vy;
                if (y > 6) y = -6;
                pos.setY(i, y);
            }
            pos.needsUpdate = true;

            // Smooth parallax tracking
            ambientGroup.rotation.y += (targetX - ambientGroup.rotation.y) * 0.025;
            ambientGroup.rotation.x += (targetY - ambientGroup.rotation.x) * 0.025;

            renderer.render(scene, camera);
        }

        animate();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHero3D);
    } else {
        initHero3D();
    }
})();
