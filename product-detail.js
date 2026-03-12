/**
 * Product Detail Page Script
 * Handles loading and displaying individual product information
 */

// Get product ID from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// Language Management
let currentLang = localStorage.getItem('vitanext_lang') || 'uz';

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('vitanext_lang', lang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    document.querySelectorAll('[data-uz]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) el.textContent = text;
    });
    
    // Reload product data in new language
    loadProductData();
}

// Load Product Data
function loadProductData() {
    const product = productsData.find(p => p.id === productId);
    
    if (!product) {
        window.location.href = 'index.html#products';
        return;
    }
    
    // Update page title
    document.title = `VitaNext - ${product.name[currentLang]}`;
    
    // Breadcrumb
    document.getElementById('breadcrumbProduct').textContent = product.name[currentLang];
    
    // Hero Section
    document.getElementById('productImage').src = product.image;
    document.getElementById('productImage').alt = product.name[currentLang];
    document.getElementById('productCategory').textContent = product.category[currentLang];
    document.getElementById('productTitle').textContent = product.name[currentLang];
    document.getElementById('productShortDesc').textContent = product.description[currentLang];
    
    // Quick Info (you can customize these based on your product data)
    const productFormEl = document.getElementById('productForm');
    if (productFormEl) productFormEl.textContent = currentLang === 'uz' ? 'Tabletkalar' : 'Таблетки';
    
    const productPackagingEl = document.getElementById('productPackaging');
    if (productPackagingEl) productPackagingEl.textContent = '30 dona';
    
    // Main Content
    const fullDesc = currentLang === 'uz' ? product.fullDescriptionUz : product.fullDescriptionRu;
    document.getElementById('fullDescription').innerHTML = fullDesc || 
        `<p>${product.description[currentLang]}</p>`;
    
    document.getElementById('productComposition').textContent = product.details.composition[currentLang];
    document.getElementById('productBenefits').textContent = product.details.benefits[currentLang];
    document.getElementById('productUsage').textContent = product.details.usage[currentLang];
    document.getElementById('productAudience').textContent = product.details.audience[currentLang];
    
    // Sidebar
    document.getElementById('sidebarCategory').textContent = product.category[currentLang];
    document.getElementById('sidebarId').textContent = `#${String(product.id).padStart(3, '0')}`;
}

// Navbar Scroll Effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Language Switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
});

// Mobile Menu Toggle
document.getElementById('mobileToggle').addEventListener('click', () => {
    document.getElementById('navMenu').classList.toggle('active');
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLang);
});
