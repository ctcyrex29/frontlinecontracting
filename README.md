# Frontline Construction Website

A professional, responsive website for Frontline Construction, a construction company specializing in residential and commercial projects.

## 🌟 Features

### Design & User Experience
- **Modern, Professional Design**: Clean layout with earthy color scheme (greens and browns)
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: WCAG compliant with proper focus states and semantic HTML
- **Fast Loading**: Optimized images and efficient code structure

### Pages & Sections
1. **Homepage** (`index.html`)
   - Hero section with call-to-action
   - Services overview
   - Why choose us section
   - Featured projects
   - Contact CTA

2. **About Us** (`about.html`)
   - Company story and history
   - Mission and vision statements
   - Core values (Integrity, Viability, Client Satisfaction)
   - Team member profiles
   - Company statistics

3. **Services** (`services.html`)
   - Detailed service descriptions
   - Construction equipment
   - Houses and residential construction
   - Infrastructure (roads and bridges)
   - Additional services

4. **Portfolio** (`portfolio.html`)
   - Project gallery with filtering
   - Interactive project modals
   - Project details and statistics
   - Image galleries

5. **Contact** (`contact.html`)
   - Contact form with validation
   - Contact information
   - Google Maps integration
   - FAQ section

### Interactive Features
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Contact Form**: JavaScript validation and submission handling
- **Portfolio Filtering**: Filter projects by category
- **Project Modals**: Detailed project information in popup windows
- **Smooth Scrolling**: Enhanced navigation experience
- **Image Lightbox**: Click to view larger project images

## 🛠️ Technical Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Interactive functionality and form handling
- **Google Fonts**: Inter font family for modern typography
- **Google Maps**: Embedded map for location display

## 📁 File Structure

```
frontlinecontracting/
├── index.html                 # Homepage
├── about.html                 # About Us page
├── services.html              # Services page
├── portfolio.html             # Portfolio page
├── contact.html               # Contact page
├── README.md                  # Documentation
└── assets/
    ├── css/
    │   └── style.css          # Main stylesheet
    ├── js/
    │   ├── script.js          # Main JavaScript
    │   └── portfolio.js       # Portfolio-specific JavaScript
    └── images/                # Image assets (placeholder)
        ├── project1.jpg
        ├── project2.jpg
        ├── project3.jpg
        └── portfolio/
            ├── residential-1.jpg
            ├── commercial-1.jpg
            └── ...
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#1e3a8a` - Main brand color
- **Secondary Blue**: `#3b82f6` - Supporting color
- **Light Blue**: `#60a5fa` - Accent color
- **Accent Orange**: `#f97316` - Call-to-action color
- **Light Orange**: `#fb923c` - Warm accent
- **Cream**: `#f8fafc` - Background color
- **White**: `#ffffff` - Clean backgrounds
- **Dark Gray**: `#1e293b` - Text color
- **Medium Gray**: `#64748b` - Secondary text

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive sizing** with rem units

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Navigate through the website to explore all features

### Development
1. Set up a local web server (recommended for development)
2. Make changes to HTML, CSS, or JavaScript files
3. Refresh browser to see changes

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Customization

### Adding New Projects
1. Add project images to `assets/images/portfolio/`
2. Update project data in `assets/js/portfolio.js`
3. Add portfolio items to `portfolio.html`

### Modifying Colors
1. Edit CSS custom properties in `assets/css/style.css`
2. Update `:root` variables for consistent theming

### Adding New Pages
1. Create new HTML file
2. Copy header and footer structure from existing pages
3. Update navigation links
4. Add page-specific styles to CSS

## 🔐 Admin Dashboard

The website includes a secure admin dashboard for content management and analytics:

### Features
- **Secure Login**: Password-protected access
- **Portfolio Management**: Add, edit, and delete portfolio projects
- **Analytics Dashboard**: Track visitor statistics and page views
- **Settings Management**: Update website information and admin password

### Access
- **URL**: `/admin/index.html`
- **Default Credentials**: `admin` / `frontline2024`
- **Security**: Session management with automatic timeout

### Documentation
See `admin/README.md` for detailed setup and usage instructions.

## 📧 Contact Form

The contact form includes:
- Form validation (JavaScript)
- Required field checking
- Email format validation
- Success/error messaging
- Responsive design
- Analytics tracking (admin dashboard)

**Note**: The form currently shows a success message but doesn't actually send data. To make it functional, you'll need to:
1. Add a backend service (PHP, Node.js, etc.)
2. Configure form action and method
3. Set up email sending functionality

## 🗺️ Google Maps Integration

The contact page includes an embedded Google Maps iframe. To customize:
1. Replace the iframe src URL with your actual location
2. Update the address in the contact information
3. Consider adding custom markers or styling

## 📸 Image Requirements

### Recommended Image Specifications
- **Hero Images**: 1920x1080px (16:9 ratio)
- **Project Images**: 800x600px (4:3 ratio)
- **Team Photos**: 400x400px (1:1 ratio)
- **Format**: JPG or PNG
- **Optimization**: Compress for web (under 500KB each)

### Placeholder Images
The website currently uses placeholder image references. Replace these with actual project photos:
- `assets/images/project1.jpg`
- `assets/images/project2.jpg`
- `assets/images/project3.jpg`
- Portfolio images in `assets/images/portfolio/`

## 🔍 SEO Features

- Semantic HTML structure
- Meta descriptions for each page
- Proper heading hierarchy
- Alt text for images
- Clean URL structure
- Fast loading times

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## 📄 License

This project is created for Frontline Construction. All rights reserved.

## 🤝 Support

For questions or support regarding this website:
- Contact: info@frontlinecontracting.net
- Phone: 00263-242-797241 / 3

---

**Built with ❤️ for Frontline Construction** 