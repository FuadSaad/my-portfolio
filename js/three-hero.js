/**
 * Three.js Minimalist Software Engineering Node Network
 * Dynamic tech graph / neural constellation backdrop
 * Lightweight, 60 FPS, clean developer aesthetic.
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
        camera.position.z = 12;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const graphGroup = new THREE.Group();
        scene.add(graphGroup);

        // Tech Nodes Configuration
        const nodeCount = 65;
        const maxDistance = 3.6;
        const positions = new Float32Array(nodeCount * 3);
        const nodeData = [];

        for (let i = 0; i < nodeCount; i++) {
            const x = (Math.random() - 0.5) * 22;
            const y = (Math.random() - 0.5) * 14;
            const z = (Math.random() - 0.5) * 8 - 1;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            nodeData.push({
                vx: (Math.random() - 0.5) * 0.006,
                vy: (Math.random() - 0.5) * 0.006,
                vz: (Math.random() - 0.5) * 0.004
            });
        }

        const nodeGeo = new THREE.BufferGeometry();
        nodeGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const nodeMat = new THREE.PointsMaterial({
            color: 0x38bdf8,
            size: 0.09,
            transparent: true,
            opacity: 0.55
        });
        const nodeMesh = new THREE.Points(nodeGeo, nodeMat);
        graphGroup.add(nodeMesh);

        // Dynamic Line Connections between Nodes
        const maxConnections = (nodeCount * (nodeCount - 1)) / 2;
        const linePositions = new Float32Array(maxConnections * 6);
        const lineGeo = new THREE.BufferGeometry();
        lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

        const lineMat = new THREE.LineBasicMaterial({
            color: 0x0ea5e9,
            transparent: true,
            opacity: 0.14,
            blending: THREE.AdditiveBlending
        });
        const lineMesh = new THREE.LineSegments(lineGeo, lineMat);
        graphGroup.add(lineMesh);

        // Mouse interaction with smooth lerp
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        window.addEventListener('mousemove', function (e) {
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
            targetX = mouseX * 0.2;
            targetY = -mouseY * 0.15;
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

        // Visibility observer to pause rendering when scrolled out of view
        let isVisible = true;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { isVisible = entry.isIntersecting; });
        }, { threshold: 0.05 });
        observer.observe(container);

        function animate() {
            requestAnimationFrame(animate);
            if (!isVisible) return;

            const pos = nodeGeo.attributes.position.array;
            let lineIdx = 0;

            // Move nodes and wrap boundaries
            for (let i = 0; i < nodeCount; i++) {
                const i3 = i * 3;
                pos[i3] += nodeData[i].vx;
                pos[i3 + 1] += nodeData[i].vy;
                pos[i3 + 2] += nodeData[i].vz;

                if (pos[i3] < -11 || pos[i3] > 11) nodeData[i].vx *= -1;
                if (pos[i3 + 1] < -7 || pos[i3 + 1] > 7) nodeData[i].vy *= -1;
                if (pos[i3 + 2] < -5 || pos[i3 + 2] > 3) nodeData[i].vz *= -1;

                // Check distance to other nodes to form connections
                for (let j = i + 1; j < nodeCount; j++) {
                    const j3 = j * 3;
                    const dx = pos[i3] - pos[j3];
                    const dy = pos[i3 + 1] - pos[j3 + 1];
                    const dz = pos[i3 + 2] - pos[j3 + 2];
                    const distSq = dx * dx + dy * dy + dz * dz;

                    if (distSq < maxDistance * maxDistance) {
                        linePositions[lineIdx++] = pos[i3];
                        linePositions[lineIdx++] = pos[i3 + 1];
                        linePositions[lineIdx++] = pos[i3 + 2];

                        linePositions[lineIdx++] = pos[j3];
                        linePositions[lineIdx++] = pos[j3 + 1];
                        linePositions[lineIdx++] = pos[j3 + 2];
                    }
                }
            }

            nodeGeo.attributes.position.needsUpdate = true;
            lineGeo.setDrawRange(0, lineIdx / 3);
            lineGeo.attributes.position.needsUpdate = true;

            // Smooth parallax tracking
            graphGroup.rotation.y += (targetX - graphGroup.rotation.y) * 0.03;
            graphGroup.rotation.x += (targetY - graphGroup.rotation.x) * 0.03;

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
