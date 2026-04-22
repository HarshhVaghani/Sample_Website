# 🎓 Study Point Academy — Website

A premium, fully responsive React website for Study Point Academy coaching institute.

## 📋 Features
- **6 full pages**: Home, About, Courses, Team, Testimonials, Contact
- **Premium UI**: Navy + Gold + Cream color palette
- **Responsive**: Mobile-first, works on all screen sizes
- **React Router**: Smooth client-side navigation with page transitions
- **Form Validation**: Contact form with real-time validation
- **WhatsApp Float Button**: Animated floating button with pulse effect
- **Animated Counters**: Stats section with scroll-triggered number animation
- **Google Fonts**: Playfair Display + DM Sans + Space Grotesk
- **Hover Effects**: Subtle card animations throughout
- **SEO Ready**: Meta tags in index.html

## 🚀 Getting Started

### Prerequisites
- Node.js v16+ installed
- npm v7+

### Installation & Run

```bash
# 1. Navigate to project folder
cd study-point-academy

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

The app will open at **http://localhost:3000**

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
study-point-academy/
├── public/
│   └── index.html          # SEO meta tags
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky, responsive navbar
│   │   ├── Footer.jsx       # Full footer with links
│   │   ├── Cards.jsx        # CourseCard, TeacherCard, TestimonialCard
│   │   └── WhatsAppFloat.jsx # Floating WhatsApp button
│   ├── pages/
│   │   ├── Home.jsx         # Hero, stats, highlights, courses preview
│   │   ├── About.jsx        # Mission, vision, achievements
│   │   ├── Courses.jsx      # All courses with filter
│   │   ├── Team.jsx         # Faculty grid
│   │   ├── Testimonials.jsx # Reviews with filter
│   │   └── Contact.jsx      # Form, map, contact info
│   ├── data/
│   │   └── index.js         # All content data (courses, teachers, etc.)
│   ├── styles/
│   │   └── global.css       # CSS variables, utilities, animations
│   ├── App.js               # Router + layout
│   └── index.js             # React entry point
└── package.json
```

## 🎨 Customization

### Update Contact Info
Edit `/src/data/index.js` → `contactInfo` object

### Add/Edit Courses
Edit `/src/data/index.js` → `courses` array

### Add Teachers
Edit `/src/data/index.js` → `teachers` array

### Update Colors
Edit `/src/styles/global.css` → `:root` CSS variables

## 📦 Dependencies
- react + react-dom: ^18.2.0
- react-router-dom: ^6.22.0
- lucide-react: ^0.330.0
- react-scripts: 5.0.1

No Tailwind needed — uses custom CSS with variables for full control.

## 📱 WhatsApp Integration
Update the `whatsapp` field in `/src/data/index.js` with the actual WhatsApp number (country code + number, no spaces):
```js
whatsapp: "919876543210"
```
