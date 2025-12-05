// ============================================
// CONTACT PAGE - Form Validation
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate individual field
    function validateField(field) {
        const formGroup = field.closest('.form-group');
        const value = field.value.trim();

        // Remove previous error state
        formGroup.classList.remove('error');

        // Check if field is empty
        if (field.hasAttribute('required') && value === '') {
            formGroup.classList.add('error');
            return false;
        }

        // Validate email
        if (field.type === 'email' && !emailRegex.test(value)) {
            formGroup.classList.add('error');
            return false;
        }

        return true;
    }

    // Real-time validation on blur
    const formInputs = form.querySelectorAll('.form-input, .form-textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function () {
            validateField(this);
        });

        // Remove error on input
        input.addEventListener('input', function () {
            const formGroup = this.closest('.form-group');
            if (formGroup.classList.contains('error')) {
                formGroup.classList.remove('error');
            }
        });
    });

    // Form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validate all fields
        let isValid = true;
        formInputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        // If form is valid, show success message
        if (isValid) {
            // Hide form
            form.style.display = 'none';

            // Show success message
            successMessage.classList.add('show');

            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Reset form after 3 seconds and show it again
            setTimeout(() => {
                form.reset();
                successMessage.classList.remove('show');
                form.style.display = 'block';
            }, 5000);
        } else {
            // Scroll to first error
            const firstError = form.querySelector('.form-group.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });

});
