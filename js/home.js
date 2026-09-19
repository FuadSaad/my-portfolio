// ============================================
// HOME PAGE - Hero Animations
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // Title glow on hover
    const heroTitle = document.querySelector('.hero-title');

    if (heroTitle) {
        heroTitle.addEventListener('mouseenter', function () {
            this.style.textShadow = '0 0 35px rgba(59, 130, 246, 0.7), 0 0 60px rgba(139, 92, 246, 0.4)';
        });

        heroTitle.addEventListener('mouseleave', function () {
            this.style.textShadow = 'none';
        });
    }

    // 3D Developer Terminal Copy Button
    const copyCodeBtn = document.getElementById('copyCodeBtn');
    const copyBtnText = document.getElementById('copyBtnText');

    if (copyCodeBtn && copyBtnText) {
        copyCodeBtn.addEventListener('click', function () {
            const rawCode = `// CSE Graduate • Machine Learning Researcher • Software Engineer
const engineer: SoftwareEngineer = {
  name: 'Md Fuad Hossain Saad',
  institution: 'Daffodil International University (CGPA 3.51)',
  specialization: ['Deep Learning', 'Explainable AI', 'Robotics Systems'],
  research: ['NeuroGAT (3D CNN-GNN)', 'QPAIN2026', 'ICBISD'],
  stack: {
    languages: ['Python', 'C/C++', 'Dart', 'Java', 'SQL'],
    frameworks: ['PyTorch', 'Flutter', 'OpenGL (2D/3D)', 'Git', 'Firebase']
  },
  status: 'Architecting High-Performance Intelligent Software Systems'
};`;

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(rawCode).then(() => {
                    copyBtnText.textContent = 'Copied!';
                    copyCodeBtn.style.borderColor = '#10b981';
                    copyCodeBtn.style.color = '#10b981';

                    setTimeout(() => {
                        copyBtnText.textContent = 'Copy';
                        copyCodeBtn.style.borderColor = '';
                        copyCodeBtn.style.color = '';
                    }, 2200);
                }).catch(() => {
                    copyBtnText.textContent = 'Copied!';
                    setTimeout(() => { copyBtnText.textContent = 'Copy'; }, 2000);
                });
            } else {
                copyBtnText.textContent = 'Copied!';
                setTimeout(() => { copyBtnText.textContent = 'Copy'; }, 2000);
            }
        });
    }

    // Parallax effect for floating shapes
    const shapes = document.querySelectorAll('.shape');

    window.addEventListener('mousemove', function (e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 15;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;

            shape.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

});
