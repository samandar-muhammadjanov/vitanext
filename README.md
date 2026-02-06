# VitaNext - Pharmaceutical Website

A modern, responsive website for VitaNext pharmaceutical company offering premium health and wellness products.

## 📁 Project Structure

```
vitanext-structured/
├── index.html          # Main HTML file with page structure
├── styles.css          # All CSS styling and responsive design
├── products.js         # Product database with multilingual support
├── script.js           # Main JavaScript functionality
└── README.md           # This file
```

## 📄 File Descriptions

### index.html
- Contains the complete semantic HTML structure
- Organized sections: Navigation, Hero, Advantages, Products, About, Footer
- Supports multilingual content with data attributes
- Product modal for detailed product information
- References external CSS and JavaScript files

### styles.css
- **Size:** ~1,200 lines of organized, well-commented CSS
- **Features:**
  - CSS custom properties (variables) for easy theme management
  - Responsive design with breakpoints at 1024px and 768px
  - Modern animations (fade-in, float, pulse, slide-up)
  - Gradient backgrounds and glass-morphism effects
  - Smooth transitions and hover states
  - Mobile-first approach with media queries

**CSS Sections:**
1. Variables and Reset
2. Navigation Styles
3. Hero Section
4. Section Styles
5. Advantages Section
6. Products Section
7. About Section
8. Footer
9. Modal Styles
10. Scroll Animations
11. Responsive Design

### products.js
- Contains `productsData` array with 18 pharmaceutical products
- Each product includes:
  - `id`: Unique identifier
  - `category`: Product category (Uzbek & Russian)
  - `name`: Product name (Uzbek & Russian)
  - `description`: Short description (Uzbek & Russian)
  - `emoji`: Visual representation
  - `details`: Composition, Benefits, Usage, Audience (Uzbek & Russian)

**Products Include:**
- Vitamins (C, D3, E, B-Complex)
- Minerals (Magnesium, Calcium, Iron, Zinc)
- Omega-3 Fish Oil
- Probiotics
- Antioxidants (Coenzyme Q10, Resveratrol)
- Supplements (Collagen, Turmeric, L-Theanine, Melatonin, Lutein)

### script.js
- **Size:** ~300 lines of well-commented, modular JavaScript
- **Main Features:**

1. **Language Management**
   - `switchLanguage(lang)` - Switch between Uzbek and Russian

2. **Product Rendering**
   - `renderProducts()` - Dynamically render product cards
   - Supports multilingual product information

3. **Modal Functionality**
   - `openProductDetail(id)` - Open product details modal
   - `closeModal()` - Close modal
   - Keyboard and click-outside handlers

4. **Animations**
   - `observeElements()` - Intersection Observer for fade-in animations
   - Smooth scroll behavior for anchor links

5. **Event Handlers**
   - Navbar scroll effect
   - Mobile menu toggle
   - Language switcher
   - Modal controls

## 🎨 Design Features

- **Color Scheme:**
  - Primary: #092256 (Dark Blue)
  - Secondary: #32B452 (Green)
  - Light Background: #F8FAFB
  - Neutral: #64748B to #1E293B

- **Typography:**
  - Font: Inter (Google Fonts)
  - Weights: 300, 400, 500, 600, 700, 800

- **Effects:**
  - Glassmorphism (backdrop blur)
  - Gradient backgrounds
  - Smooth animations and transitions
  - Interactive hover states
  - Responsive gradients

## 🌐 Language Support

- **Uzbek (uz)** - Default language
- **Russian (ru)** - Alternative language

Text content is stored in data attributes for easy multilingual support:
```html
<span data-uz="Uzbek text" data-ru="Russian text">Uzbek text</span>
```

## 📱 Responsive Breakpoints

- **Desktop:** > 1024px
- **Tablet:** 768px - 1024px
- **Mobile:** < 768px

Mobile adjustments include:
- Single-column layouts
- Hamburger navigation menu
- Reduced font sizes
- Optimized spacing and padding
- Full-width buttons

## 🚀 Key Components

### Navigation
- Fixed top navigation with blur effect
- Language switcher
- Responsive mobile menu
- Scroll effect detection

### Hero Section
- Large title with gradient background
- Animated background shapes
- Statistics cards
- Call-to-action buttons

### Advantages Section
- Three feature cards with hover effects
- Icon, title, and description
- Top border animation on hover

### Products Section
- Dynamic 3-column grid (responsive)
- Product cards with emoji representation
- Quick links to product details

### About Section
- Mission, Values, and Goals display
- Split layout with visual elements
- Gradient background card

### Product Modal
- Detailed product information
- Composition, Benefits, Usage, Audience
- Smooth animations
- Keyboard and click-outside close

### Footer
- Four-column layout
- Social media links
- Quick links
- Contact information
- Copyright notice

## 🎯 Features

✅ Fully responsive design
✅ Multilingual support (Uzbek & Russian)
✅ Interactive product modal
✅ Smooth animations and transitions
✅ Mobile-optimized navigation
✅ SEO-friendly structure
✅ Accessibility features
✅ Cross-browser compatibility
✅ Modern CSS practices
✅ Clean, organized code

## 📝 Code Organization

Each file has clear comments and logical sections:
- **HTML**: Semantic structure with data attributes
- **CSS**: Organized by component with custom properties
- **JavaScript**: Modular functions with JSDoc comments
- **Products**: Clean data structure for easy maintenance

## 🔧 Customization

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #092256;
    --secondary: #32B452;
    /* ... more variables ... */
}
```

### Add Products
Add new product to `productsData` array in `products.js`:
```javascript
{
    id: 19,
    category: { uz: "...", ru: "..." },
    name: { uz: "...", ru: "..." },
    // ... more properties
}
```

### Update Translations
Modify data attributes in HTML files:
```html
<span data-uz="New Uzbek text" data-ru="New Russian text">New Uzbek text</span>
```

## 📦 Dependencies

- **Fonts:** Google Fonts (Inter family)
- **Icons:** Unicode emojis
- **No external libraries required** - Pure vanilla JavaScript

## 🌟 Best Practices Implemented

- Semantic HTML5 structure
- BEM-inspired CSS naming
- Mobile-first responsive design
- Progressive enhancement
- Clean code with comments
- Modular JavaScript functions
- Accessibility considerations
- Performance optimizations

## 🎓 Learning Resources

This project demonstrates:
- Modern CSS (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (DOM manipulation, Events)
- Responsive Web Design
- Animation techniques
- Component-based structure
- Multilingual support
- State management
- User interactions

---

**Created:** 2024
**Language:** Uzbek, Russian
**Location:** Tashkent, Uzbekistan
