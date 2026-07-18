/* ═══════════════════════════════════════════════════════════════ */
/*                    JAVASCRIPT FUNCTIONALITY                     */
/* ═══════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────────
// HAMBURGER MENU TOGGLE
// ─────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            if (!event.target.closest('.navbar')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// ─────────────────────────────────────────────────────────────────
// CONTACT FORM SUBMISSION
// ─────────────────────────────────────────────────────────────────

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;

        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email', 'error');
            return;
        }

        // Simulate sending (in real app, send to backend)
        const formBtn = this.querySelector('button[type="submit"]');
        const originalText = formBtn.textContent;
        formBtn.textContent = 'Sending...';
        formBtn.disabled = true;

        setTimeout(() => {
            showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            this.reset();
            formBtn.textContent = originalText;
            formBtn.disabled = false;
        }, 1500);
    });
}

// ─────────────────────────────────────────────────────────────────
// NOTIFICATION SYSTEM
// ─────────────────────────────────────────────────────────────────

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#4caf50' : '#f44336'};
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    z-index: 10000;
    animation: slideIn 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    max-width: 300px;
  `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ─────────────────────────────────────────────────────────────────
// SCROLL ANIMATIONS
// ─────────────────────────────────────────────────────────────────

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe feature cards, testimonials, and pricing cards
document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ─────────────────────────────────────────────────────────────────
// SMOOTH SCROLL BEHAVIOR FOR BUTTONS
// ─────────────────────────────────────────────────────────────────

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ─────────────────────────────────────────────────────────────────
// BUTTON CLICK HANDLERS
// ─────────────────────────────────────────────────────────────────

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        // Skip if it's a form submit button
        if (this.type !== 'submit') {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        animation: ripple 0.6s ease;
      `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        }
    });
});

// ─────────────────────────────────────────────────────────────────
// NAVBAR SCROLL EFFECT
// ─────────────────────────────────────────────────────────────────

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ─────────────────────────────────────────────────────────────────
// COUNTER ANIMATION
// ─────────────────────────────────────────────────────────────────

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ─────────────────────────────────────────────────────────────────
// PRICING CARD INTERACTION
// ─────────────────────────────────────────────────────────────────

document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        document.querySelectorAll('.pricing-card').forEach(c => {
            c.style.opacity = '0.6';
        });
        this.style.opacity = '1';
    });

    card.addEventListener('mouseleave', function () {
        document.querySelectorAll('.pricing-card').forEach(c => {
            c.style.opacity = '1';
        });
    });
});

// ─────────────────────────────────────────────────────────────────
// FEATURE CARDS INTERACTION
// ─────────────────────────────────────────────────────────────────

document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.querySelector('.feature-icon').style.animation = 'bounce 0.6s ease';
    });

    card.addEventListener('mouseleave', function () {
        this.querySelector('.feature-icon').style.animation = 'none';
    });
});

// ─────────────────────────────────────────────────────────────────
// LAZY LOADING FOR IMAGES
// ─────────────────────────────────────────────────────────────────

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ─────────────────────────────────────────────────────────────────
// KEYBOARD NAVIGATION
// ─────────────────────────────────────────────────────────────────

document.addEventListener('keydown', function (e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger && hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// ─────────────────────────────────────────────────────────────────
// FORM INPUT FOCUS ANIMATION
// ─────────────────────────────────────────────────────────────────

document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function () {
        this.style.transform = 'translateY(-2px)';
    });

    input.addEventListener('blur', function () {
        this.style.transform = 'translateY(0)';
    });
});

// ─────────────────────────────────────────────────────────────────
// ADD ANIMATION KEYFRAMES DYNAMICALLY
// ─────────────────────────────────────────────────────────────────

const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(400px);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(400px);
    }
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .form-group input,
  .form-group textarea {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
`;
document.head.appendChild(style);

// ─────────────────────────────────────────────────────────────────
// PERFORMANCE OPTIMIZATION - DEBOUNCE
// ─────────────────────────────────────────────────────────────────

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

// Debounced scroll handler
const debouncedScroll = debounce(() => {
    // Add scroll-specific logic here if needed
}, 250);

window.addEventListener('scroll', debouncedScroll);

// ─────────────────────────────────────────────────────────────────
// ACCESSIBILITY IMPROVEMENTS
// ─────────────────────────────────────────────────────────────────

// Add focus visible style
document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', function () {
    document.body.classList.remove('keyboard-nav');
});

// ─────────────────────────────────────────────────────────────────
// DYNAMIC FEATURE CARDS DATA (Example)
// ─────────────────────────────────────────────────────────────────

const featuresData = [
    {
        icon: 'fas fa-magic',
        title: 'AI-Powered Design',
        description: 'Let AI help you create beautiful designs instantly with smart suggestions.'
    },
    {
        icon: 'fas fa-palette',
        title: 'Vast Template Library',
        description: 'Choose from thousands of professionally designed templates for any occasion.'
    },
    {
        icon: 'fas fa-image',
        title: 'Millions of Assets',
        description: 'Access photos, icons, illustrations, and fonts from our massive library.'
    },
    {
        icon: 'fas fa-users',
        title: 'Team Collaboration',
        description: 'Work together with your team in real-time on the same design project.'
    },
    {
        icon: 'fas fa-download',
        title: 'Export Anywhere',
        description: 'Download your designs in multiple formats - PNG, PDF, SVG, and more.'
    },
    {
        icon: 'fas fa-mobile-alt',
        title: 'Mobile Friendly',
        description: 'Design on any device with our responsive web and mobile apps.'
    }
];

// ─────────────────────────────────────────────────────────────────
// LOCAL STORAGE - SAVE USER PREFERENCES
// ─────────────────────────────────────────────────────────────────

function saveUserPreference(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error('Local storage error:', e);
    }
}

function getUserPreference(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (e) {
        console.error('Local storage error:', e);
        return null;
    }
}

// Example: Track user theme preference
const savedTheme = getUserPreference('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// ─────────────────────────────────────────────────────────────────
// ANALYTICS TRACKING (Example)
// ─────────────────────────────────────────────────────────────────

function trackEvent(eventName, eventData = {}) {
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
}

// Track button clicks
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function () {
        trackEvent('button_click', {
            button_text: this.textContent,
            button_type: this.className
        });
    });
});

// ─────────────────────────────────────────────────────────────────
// INITIALIZATION
// ─────────────────────────────────────────────────────────────────

console.log('✓ DesignHub website loaded successfully!');
console.log('Features: Responsive Design, Interactive UI, Form Validation, Animations');
