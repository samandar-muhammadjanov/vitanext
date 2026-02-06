/**
 * Main JavaScript for VitaNext Website
 * Handles language switching, product rendering, modals, and animations
 */

// ===========================
// Language Management
// ===========================

let currentLang = 'uz';

/**
 * Switch the website language
 * @param {string} lang - Language code ('uz' or 'ru')
 */
function switchLanguage(lang) {
    currentLang = lang;
    
    // Update language button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update all text elements with data attributes
    document.querySelectorAll('[data-uz]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) el.textContent = text;
    });
    
    // Re-render products with new language
    renderProducts();
}

// ===========================
// Product Rendering
// ===========================

/**
 * Render all products to the products grid
 */
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    
    grid.innerHTML = productsData.map(product => `
        <div class="product-card fade-in" onclick="openProductDetail(${product.id})">
            <div class="product-image">
                ${product.image 
                    ? `<img src="${product.image}" alt="${product.name[currentLang]}" class="product-img">` 
                    : `<div class="product-emoji">${product.emoji}</div>`
                }
            </div>
            <div class="product-info">
                <div class="product-category">${product.category[currentLang]}</div>
                <h3 class="product-name">${product.name[currentLang]}</h3>
                <p class="product-description">${product.description[currentLang]}</p>
                <a href="#" class="product-link" onclick="event.stopPropagation(); openProductDetail(${product.id})">
                    ${currentLang === 'uz' ? 'Batafsil' : 'Подробнее'}
                    <span class="product-arrow">→</span>
                </a>
            </div>
        </div>
    `).join('');
    
    // Trigger animations for newly rendered elements
    observeElements();
}

// ===========================
// Product Detail Modal
// ===========================

/**
 * Open product detail modal
 * @param {number} id - Product ID
 */
function openProductDetail(id) {
    const product = productsData.find(p => p.id === id);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    
    // Set modal title and category
    document.getElementById('modalCategory').textContent = product.category[currentLang];
    document.getElementById('modalTitle').textContent = product.name[currentLang];
    
    // Define section labels for both languages
    const labels = {
        uz: {
            composition: 'Tarkibi',
            benefits: 'Foydalari',
            usage: 'Qo\'llash',
            audience: 'Kimlar uchun'
        },
        ru: {
            composition: 'Состав',
            benefits: 'Преимущества',
            usage: 'Применение',
            audience: 'Для кого'
        }
    };
    
    // Populate modal body with product details
    document.getElementById('modalBody').innerHTML = `
        <div class="detail-section">
            <h3><span class="detail-icon">📋</span> ${labels[currentLang].composition}</h3>
            <p>${product.details.composition[currentLang]}</p>
        </div>
        <div class="detail-section">
            <h3><span class="detail-icon">✨</span> ${labels[currentLang].benefits}</h3>
            <p>${product.details.benefits[currentLang]}</p>
        </div>
        <div class="detail-section">
            <h3><span class="detail-icon">💊</span> ${labels[currentLang].usage}</h3>
            <p>${product.details.usage[currentLang]}</p>
        </div>
        <div class="detail-section">
            <h3><span class="detail-icon">👥</span> ${labels[currentLang].audience}</h3>
            <p>${product.details.audience[currentLang]}</p>
        </div>
    `;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Close product detail modal
 */
function closeModal() {
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ===========================
// Scroll Animations
// ===========================

/**
 * Observe elements for fade-in animation when they enter viewport
 */
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// ===========================
// Navbar Scroll Effect
// ===========================

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const currentScroll = window.pageYOffset;
    
    // Add scroll effect to navbar
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Smooth Scroll
// ===========================

/**
 * Handle smooth scrolling for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.getElementById('navMenu').classList.remove('active');
        }
    });
});

// ===========================
// Language Switcher
// ===========================

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
});

// ===========================
// Mobile Menu Toggle
// ===========================

document.getElementById('mobileToggle').addEventListener('click', () => {
    document.getElementById('navMenu').classList.toggle('active');
});

// ===========================
// Modal Controls
// ===========================

// Close modal when clicking outside content
document.getElementById('productModal').addEventListener('click', (e) => {
    if (e.target.id === 'productModal') closeModal();
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ===========================
// Contact Form Handler
// ===========================

/**
 * Format phone number with spaces: +998 (XX) XXX-XX-XX
 * @param {string} value - Input value
 * @returns {string} Formatted phone number
 */
function formatPhoneNumber(value) {
    // Remove all non-digits except +
    let cleaned = value.replace(/[^\d+]/g, '');
    
    // Ensure +998 prefix
    if (!cleaned.startsWith('+998')) {
        cleaned = '+998' + cleaned.replace(/^\+?998?/, '');
    }
    
    // Extract digits after +998
    const digits = cleaned.replace(/\D/g, '').slice(3); // Remove +998 and get remaining digits
    
    if (digits.length === 0) {
        return '+998';
    }
    
    // Format: +998 (XX) XXX-XX-XX
    let formatted = '+998';
    if (digits.length > 0) {
        formatted += ' (' + digits.slice(0, 2);
    }
    if (digits.length > 2) {
        formatted += ') ' + digits.slice(2, 5);
    }
    if (digits.length > 5) {
        formatted += '-' + digits.slice(5, 7);
    }
    if (digits.length > 7) {
        formatted += '-' + digits.slice(7, 9);
    }
    
    return formatted;
}

/**
 * Show success or error notification
 * @param {string} message - Notification message
 * @param {string} type - 'success' or 'error'
 */
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#10B981' : '#EF4444'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-weight: 500;
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Validate contact form inputs
 * @returns {object} Validation result with isValid flag and errors
 */
function validateContactForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    
    const errors = [];
    
    // Validate name
    if (!fullName || fullName.length < 3) {
        errors.push(currentLang === 'uz' ? 'Ism kamida 3 ta belgidan iborat bo\'lishi kerak' : 'Имя должно содержать минимум 3 символа');
    }
    
    // Validate phone - Uzbek format: +998 (XX) XXX-XX-XX or +998XXXXXXXXX
    const phoneDigits = phone.replace(/\D/g, ''); // Remove all non-digits
    if (!phone || phoneDigits.length !== 12 || !phoneDigits.startsWith('998')) {
        errors.push(currentLang === 'uz' ? 'Telefon raqam +998 (XX) XXX-XX-XX formatida bo\'lishi kerak' : 'Номер телефона должен быть в формате +998 (XX) XXX-XX-XX');
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors,
        data: {
            name: fullName,
            phone: phone,
            message: message
        }
    };
}

/**
 * Display form validation errors
 * @param {array} errors - Array of error messages
 */
function showFormErrors(errors) {
    const errorMessage = errors.join('\n');
    alert(errorMessage);
}

/**
 * Handle contact form submission
 */
if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate inputs
        const validation = validateContactForm();
        
        if (!validation.isValid) {
            showFormErrors(validation.errors);
            return;
        }
        
        const submitBtn = e.target.querySelector('.btn-submit');
        const originalContent = submitBtn.innerHTML;
        
        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>${currentLang === 'uz' ? '⏳ Yuborilmoqda...' : '⏳ Отправляю...'}</span>`;
        
        try {
            // POST to webhook
            // Clean phone number - remove formatting but keep + and digits
            const cleanedPhone = '+' + validation.data.phone.replace(/\D/g, '');
            
            const response = await fetch(
                'https://auto.shahzod.me/webhook/20459db9-4774-4ca1-b857-05086ca52a6e',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: validation.data.name.trim(),
                        phone: cleanedPhone,
                        message: validation.data.message.trim(),
                    }),
                }
            );

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            const successMsg = currentLang === 'uz' 
                ? '✓ Forma muvaffaqiyatli yuborildi!' 
                : '✓ Форма успешно отправлена!';
            showNotification(successMsg, 'success');
            
            setTimeout(() => {
                e.target.reset();
                submitBtn.innerHTML = originalContent;
                submitBtn.disabled = false;
            }, 1500);
            
            console.log('Form submitted successfully:', validation.data);
            
        } catch (error) {
            console.error('Form submission error:', error);
            
            const errorMsg = currentLang === 'uz' 
                ? '✗ Xato! Qaytadan urinib ko\'ring.' 
                : '✗ Ошибка! Попробуйте еще раз.';
            showNotification(errorMsg, 'error');
            
            setTimeout(() => {
                submitBtn.innerHTML = originalContent;
                submitBtn.disabled = false;
            }, 1500);
        }
    });
}

// ===========================
// Initialize
// ===========================

/**
 * Initialize the website when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    observeElements();
    
    // Phone input formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        // Auto-insert +998 on focus
        phoneInput.addEventListener('focus', (e) => {
            if (!e.target.value) {
                e.target.value = '+998';
            }
        });
        
        // Format phone number on input
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value;
            
            // Prevent removing +998
            if (!value.startsWith('+998')) {
                value = '+998' + value.replace(/^\+?998?/, '');
            }
            
            e.target.value = formatPhoneNumber(value);
        });
        
        // Prevent backspace from removing +998
        phoneInput.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                const value = e.target.value;
                // Prevent deletion of +998 prefix
                if (value.length <= 4) {
                    e.preventDefault();
                }
            }
        });
    }
});
