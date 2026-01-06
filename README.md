# Usama Zahoor - MERN Stack Developer Portfolio

A modern, responsive portfolio website showcasing full-stack development expertise with the MERN stack. Built with React, Vite, and Tailwind CSS, featuring smooth animations and a professional design.

## 🎯 Features

- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Modern UI**: Glassmorphism effects with dark theme and gradient accents
- **Scroll Navigation**: Traditional scrolling with smooth section transitions
- **Interactive Elements**: Hover effects, animated icons, and micro-interactions
- **Professional Content**: Real project showcases and work experience

## 📧 **EmailJS Integration**

The contact form is integrated with EmailJS to send messages directly to `usamazahoor216@gmail.com`.

### Setup EmailJS (Required for contact form)

1. **Create EmailJS Account**
   - Go to [EmailJS.com](https://www.emailjs.com/) and sign up
   - Verify your email address

2. **Configure Email Service**
   - Add Gmail service connected to `usamazahoor216@gmail.com`
   - Note the Service ID

3. **Create Email Template**
   - Create template with variables: `from_name`, `from_email`, `subject`, `message`, `to_email`
   - Set destination email to `usamazahoor216@gmail.com`
   - Note the Template ID

4. **Update Configuration**
   - Edit `src/config/emailjs.js`
   - Replace placeholder values with your actual EmailJS credentials:
     ```javascript
     export const emailjsConfig = {
       serviceId: 'your_actual_service_id',
       templateId: 'your_actual_template_id', 
       publicKey: 'your_actual_public_key'
     }
     ```

5. **Test the Form**
   - Fill out the contact form on the website
   - Check `usamazahoor216@gmail.com` for received messages

For detailed setup instructions, see `EMAILJS_SETUP.md`.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd usama-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Comprehensive icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx           # Navigation header
│   ├── Hero.jsx            # Hero section with intro
│   ├── About.jsx           # About me section
│   ├── Skills.jsx          # Skills and technologies
│   ├── Experience.jsx      # Work experience
│   ├── Projects.jsx        # Featured projects
│   ├── Education.jsx       # Educational background
│   ├── Contact.jsx         # Contact information
│   └── BackgroundAnimation.jsx # Animated background
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
└── index.css              # Global styles and Tailwind imports
```

## 🎨 Sections

### Hero Section
- Professional introduction
- MERN stack technology showcase
- Contact information and availability status

### About Me
- Professional summary
- Core competencies and focus areas
- Personal philosophy and approach

### Skills & Technologies
- Frontend development (React, JavaScript, HTML, CSS, Tailwind)
- Backend development (Node.js, Express.js, MongoDB, JWT)
- Tools & technologies (Git, GitHub, Firebase, WordPress)
- Interactive skill level indicators

### Work Experience
- **Full-stack Developer** at Maaz Informatics (Oct 2025 - Present)
- **Web Development Intern** at Rhombix Technologies (Jul 2025 - Aug 2025)
- Final Year Project: ProPath AI career counseling app

### Featured Projects
- **Job Finder Web App**: Full-stack MERN job portal with JWT authentication
- **Derma Hospital Management System**: Healthcare management system with secure data handling

### Education
- **Bachelor of Science in Software Engineering** from The University of Lahore - Sargodha
- Core coursework and academic achievements

### Contact
- Direct contact information
- Social media links
- Contact form for inquiries

## 🎮 Navigation

- **Smooth Scrolling**: Click navigation links to smoothly scroll to sections
- **Mobile Responsive**: Hamburger menu for mobile devices
- **Sticky Header**: Navigation remains accessible while scrolling

## 🎨 Customization

### Personal Information
Update the content in each component file to reflect your own:
- Contact details in `Hero.jsx` and `Contact.jsx`
- Work experience in `Experience.jsx`
- Projects in `Projects.jsx`
- Skills and technologies in `Skills.jsx`

### Styling
The project uses Tailwind CSS with custom utilities:
- `.glass` - Glassmorphism effect
- `.glass-strong` - Stronger glass effect
- `.gradient-text` - Gradient text effect
- `.section-padding` - Consistent section spacing
- `.container-max` - Maximum container width

### Colors and Gradients
Modify gradient classes in components:
- `from-blue-500 to-cyan-500` - Blue gradient
- `from-purple-500 to-pink-500` - Purple gradient
- `from-green-500 to-teal-500` - Green gradient

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify

## 📱 Mobile Optimization

- Responsive grid layouts
- Touch-friendly navigation
- Optimized font sizes and spacing
- Mobile-first design approach

## 🎯 Performance

- Optimized animations with GPU acceleration
- Lazy loading with Intersection Observer
- Minimal bundle size with Vite
- Efficient re-renders with React optimization

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- ESLint configuration included
- Component-based architecture
- Modern React patterns with hooks
- Consistent naming conventions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, pull requests are welcome!

---

**Contact Information:**
- Email: usamazahoorchadhar54@gmail.com
- Phone: +92 317 8123298
- Location: Sargodha, Punjab

Built with ❤️ by Usama Zahoor - MERN Stack Developer