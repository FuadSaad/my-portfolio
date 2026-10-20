// ============================================
// MAIN JAVASCRIPT - Core Functionality
// Navigation, Scroll Effects, Page Transitions
// ============================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  
  // ----- MOBILE NAVIGATION TOGGLE -----
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navToggle) {
    navToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
  
  // ----- ACTIVE NAVIGATION HIGHLIGHTING -----
  const currentPath = window.location.pathname;
  const navItems = document.querySelectorAll('.nav-link');
  
  navItems.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    // Handle both root and page URLs
    if (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/Protfolio/') || currentPath.endsWith('/Protfolio/index.html')) {
      if (linkPath === '../index.html' || linkPath === './index.html' || linkPath === 'index.html') {
        link.classList.add('active');
      }
    } else if (currentPath.includes(linkPath.replace('../pages/', '').replace('.html', ''))) {
      link.classList.add('active');
    }
  });
  
  // ----- NAVBAR SCROLL EFFECT -----
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // ----- SCROLL TO TOP BUTTON -----
  const scrollBtn = document.querySelector('.scroll-to-top');
  
  if (scrollBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });
    
    scrollBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // ----- PAGE TRANSITION ON LOAD -----
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.3s ease-in';
    document.body.style.opacity = '1';
  }, 10);
  
  // ----- SCROLL ANIMATIONS -----
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);
  
  // Observe all elements with scroll-animate class
  const animateElements = document.querySelectorAll('.scroll-animate');
  animateElements.forEach(el => observer.observe(el));
  
});

// ----- UTILITY FUNCTIONS -----

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Smooth scroll to element
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// ----- TOAST NOTIFICATION & COPY EMAIL -----
function showToastNotification(message = 'Email copied to clipboard!') {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast-notification';
    toast.innerHTML = `
      <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span id="toastMsg">${message}</span>
    `;
    document.body.appendChild(toast);
  } else {
    const msgEl = document.getElementById('toastMsg');
    if (msgEl) msgEl.textContent = message;
  }

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

function copyEmailToClipboard(email = 'contactwithfuad@gmail.com') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(() => {
      showToastNotification(`Copied ${email} to clipboard!`);
    }).catch(() => {
      fallbackCopyText(email);
    });
  } else {
    fallbackCopyText(email);
  }
}

function fallbackCopyText(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.top = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToastNotification(`Copied ${text} to clipboard!`);
  } catch (err) {
    showToastNotification(`Email: ${text}`);
  }
  document.body.removeChild(textArea);
}

// Auto-attach to all copy email triggers
document.addEventListener('click', function(e) {
  const btn = e.target.closest('[data-copy-email], .copy-email-trigger');
  if (btn) {
    e.preventDefault();
    const email = btn.getAttribute('data-email') || 'contactwithfuad@gmail.com';
    copyEmailToClipboard(email);
  }
});
