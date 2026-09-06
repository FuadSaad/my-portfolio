// ============================================
// CONTACT PAGE - Form Validation
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');

    if (!form) return;

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate individual field
    function validateField(field) {
        const formGroup = field.closest('.form-group');
        if (!formGroup) return true;
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
            if (formGroup && formGroup.classList.contains('error')) {
                formGroup.classList.remove('error');
            }
        });
    });

    // Form submission with real email dispatch via FormSubmit AJAX
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validate all fields
        let isValid = true;
        formInputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (!isValid) {
            // Scroll to first error
            const firstError = form.querySelector('.form-group.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        // UI Loading State
        const originalBtnText = btnText ? btnText.textContent : 'Send Message 📨';
        if (submitBtn) submitBtn.disabled = true;
        if (btnText) btnText.textContent = 'Sending Message... ⏳';
        if (errorMessage) errorMessage.style.display = 'none';

        // Prepare submission payload
        const payload = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            subject: form.subject.value.trim(),
            message: form.message.value.trim(),
            _subject: `Portfolio Contact: ${form.subject.value.trim()} (from ${form.name.value.trim()})`,
            _template: 'table',
            _captcha: 'false'
        };

        // Send via FormSubmit AJAX API to contactwithfuad@gmail.com
        fetch('https://formsubmit.co/ajax/contactwithfuad@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(async (response) => {
            const data = await response.json().catch(() => ({}));
            if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
                // Success: Hide form, show success message
                form.reset();
                form.style.display = 'none';
                if (errorMessage) errorMessage.style.display = 'none';
                if (successMessage) {
                    successMessage.classList.add('show');
                    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }

                // Show form again after 8 seconds in case user wants to send another message
                setTimeout(() => {
                    if (successMessage) successMessage.classList.remove('show');
                    form.style.display = 'block';
                }, 8000);
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        })
        .catch((error) => {
            console.error('Contact Form Submission Error:', error);
            if (errorMessage) {
                errorMessage.style.display = 'block';
                errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                alert('Failed to send message. Please email contactwithfuad@gmail.com directly.');
            }
        })
        .finally(() => {
            if (submitBtn) submitBtn.disabled = false;
            if (btnText) btnText.textContent = originalBtnText;
        });
    });

});
