# Portfolio Website - Ravi Raj Gupta 

A modern, highly interactive, and visually stunning personal portfolio website built to showcase skills, projects, and professional experience. The project is designed with a focus on fluid animations, modern aesthetic, and a smooth user experience.

## ✨ Features

- **Modern & Responsive Design:** Fully responsive layout with TailwindCSS, working seamlessly across desktop, tablet, and mobile.
- **Fluid Animations:** Smooth section transitions and interactive elements powered by Framer Motion.
- **Dynamic Backgrounds:** Engaging visual effects including a particles background.
- **Custom Cursor:** Enhanced user interaction with a custom-designed cursor.
- **Working Contact Form:** Integrated with EmailJS to send messages directly from the website.
- **Component-Driven:** Clean, modular, and maintainable codebase structure using React.

## 🛠️ Technologies Used

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Email Service:** [EmailJS](https://www.emailjs.com/)

## 📂 Folder Structure

The project is thoughtfully structured to separate concerns and maintain scalability:

```text
PORTFOLIO RAVI/
├── public/                 # Static assets (images, fonts, etc.)
├── src/                    # Source code
│   ├── assets/             # Project-specific assets (e.g., resume, images)
│   ├── components/         # Reusable UI components
│   │   ├── CustomCursor.jsx       # Custom animated cursor
│   │   ├── IntroAnimation.jsx     # Initial loading/intro animation
│   │   ├── Navbar.jsx             # Top navigation bar
│   │   ├── OverlayMenu.jsx        # Full-screen mobile menu
│   │   └── ParticlesBackground.jsx# Interactive particle background
│   ├── sections/           # Major page sections
│   │   ├── Home.jsx               # Hero section
│   │   ├── About.jsx              # About me details
│   │   ├── Skills.jsx             # Technical skills and proficiencies
│   │   ├── Experience.jsx         # Professional experience timeline
│   │   ├── Projects.jsx           # Portfolio projects gallery
│   │   ├── Contact.jsx            # Contact form with EmailJS integration
│   │   ├── Testimonials.jsx       # Client/Colleague testimonials
│   │   └── Footer.jsx             # Site footer
│   ├── App.jsx             # Root component assembling sections
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles and Tailwind imports
├── .env                    # Environment variables (EmailJS keys)
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite configuration
```

## 🚀 How to Run Locally

Follow these steps to get the project up and running on your local machine:

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd PORTFOLIO RAVI
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory and add your EmailJS configuration:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open in Browser:**
   Navigate to `http://localhost:5173` in your web browser.

## 🏗️ Build for Production

To create a production-ready build, run:
```bash
npm run build
```
This will generate an optimized build in the `dist/` folder, ready for deployment.

---

*Designed and developed by Ravi.*
