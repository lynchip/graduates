// ===================================
// Navigation Menu Toggle
// ===================================
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu on mobile
    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');

            // Animate hamburger icon
            const spans = navToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = '';
                    span.style.opacity = '';
                }
            });
        });
    }

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            }
        });
    });
});

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Header Scroll Effect
// ===================================
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// ===================================
// Phone Number Formatting
// ===================================
function formatPhoneNumber(input) {
    // Remove all non-numeric characters
    let value = input.value.replace(/\D/g, '');

    // Limit to 11 digits (XX XXXXX-XXXX)
    value = value.substring(0, 11);

    // Format as (XX) XXXXX-XXXX or (XX) XXXX-XXXX
    if (value.length > 0) {
        if (value.length <= 2) {
            input.value = `(${value}`;
        } else if (value.length <= 7) {
            input.value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
        } else if (value.length <= 11) {
            const ddd = value.substring(0, 2);
            const firstPart = value.substring(2, 7);
            const secondPart = value.substring(7, 11);
            input.value = `(${ddd}) ${firstPart}-${secondPart}`;
        }
    }
}

// Add phone formatting to phone inputs
const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(input => {
    input.addEventListener('input', function () {
        formatPhoneNumber(this);
    });
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    /* 
        // Contact Form Handling (DISABLED FOR WEB3FORMS)
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                profession: document.getElementById('profession').value,
                level: document.getElementById('level').value,
                interest: document.getElementById('interest').value,
                message: document.getElementById('message').value,
                availability: document.getElementById('availability').value,
                timestamp: new Date().toLocaleString('pt-BR')
            };
    
            // Validate required fields
            if (!formData.name || !formData.email || !formData.phone || 
                !formData.profession || !formData.level || !formData.interest) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
    
            // Save to localStorage for backup
            try {
                let submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
                submissions.push(formData);
                localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
            } catch (error) {
                console.error('Error saving to localStorage:', error);
            }
    
            // Create WhatsApp message
            const whatsappMessage = createWhatsAppMessage(formData);
            
            // Open WhatsApp with pre-filled message
            const whatsappNumber = '5511996005326';
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            
            // Show success message
            contactForm.style.display = 'none';
            document.getElementById('formSuccess').style.display = 'block';
            
            // Redirect to WhatsApp after 2 seconds
            setTimeout(() => {
                window.open(whatsappURL, '_blank');
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    contactForm.reset();
                    contactForm.style.display = 'flex';
                    document.getElementById('formSuccess').style.display = 'none';
                }, 3000);
            }, 2000);
        });
        */
}

// ===================================
// Create WhatsApp Message
// ===================================
function createWhatsAppMessage(data) {
    let message = `*Nova Solicitação de Consulta*\n\n`;
    message += `*Nome:* ${data.name}\n`;
    message += `*Email:* ${data.email}\n`;
    message += `*Telefone:* ${data.phone}\n`;
    message += `*Profissão:* ${data.profession}\n`;
    message += `*Nível de Inglês:* ${data.level}\n`;
    message += `*Interesse:* ${data.interest}\n`;

    if (data.availability) {
        message += `*Preferência de Horário:* ${data.availability}\n`;
    }

    if (data.message) {
        message += `\n*Mensagem:*\n${data.message}\n`;
    }

    message += `\n_Enviado em: ${data.timestamp}_`;

    return message;
}

// ===================================
// Scroll Animations (Simple Fade In)
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements with animation
    const animatedElements = document.querySelectorAll(
        '.service-card, .reason-card, .testimonial-card, .method-step, .hero-card'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// ===================================
// Active Navigation Link
// ===================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Update active link on scroll
window.addEventListener('scroll', updateActiveNavLink);

// ===================================
// WhatsApp Button Tracking
// ===================================
const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
whatsappButtons.forEach(button => {
    button.addEventListener('click', function () {
        console.log('WhatsApp contact initiated from:', this.getAttribute('href'));
        // You can add analytics tracking here if needed
    });
});

// ===================================
// Form Input Validation
// ===================================
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', function () {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailRegex.test(this.value)) {
            this.style.borderColor = '#e74c3c';
            this.setCustomValidity('Por favor, insira um email válido');
        } else {
            this.style.borderColor = '';
            this.setCustomValidity('');
        }
    });
}

// ===================================
// Loading State for Form
// ===================================
function setFormLoading(form, isLoading) {
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
        if (isLoading) {
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        } else {
            submitButton.disabled = false;
            submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Solicitação';
        }
    }
}

// ===================================
// Console Welcome Message
// ===================================
console.log('%c👋 Olá! ', 'font-size: 20px; font-weight: bold; color: #1e56a0;');
console.log('%cSite desenvolvido para Michael | Inglês Executivo', 'font-size: 12px; color: #5a6c7d;');
console.log('%cPara contato via WhatsApp: (11) 99600-5326', 'font-size: 12px; color: #28a745;');

// ===================================
// Service Worker Registration (Optional)
// ===================================
if ('serviceWorker' in navigator) {
    // Uncomment below to enable offline support
    // window.addEventListener('load', () => {
    //     navigator.serviceWorker.register('/sw.js')
    //         .then(reg => console.log('Service Worker registered'))
    //         .catch(err => console.log('Service Worker registration failed'));
    // });
}

// ===================================
// Error Handling
// ===================================
window.addEventListener('error', function (e) {
    console.error('Global error caught:', e.message);
    // You can add error reporting here
});

// ===================================
// Prevent Form Resubmission
// ===================================
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}