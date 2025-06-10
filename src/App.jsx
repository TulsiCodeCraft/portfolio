import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';
import Navbar from './components/Navbar';

function App() {
  // Smooth scroll behavior for the entire app
  useEffect(() => {
    // Ensure smooth scrolling is enabled
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="relative">
        {/* Background gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-gray-900/50 -z-10" />
        
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden -z-10">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section id="home" className="min-h-screen">
            <Hero />
          </section>

          {/* About Section */}
          <section id="about" className="min-h-screen">
            <About />
          </section>

          {/* Skills Section */}
          <section id="skills" className="min-h-screen">
            <Skills />
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen">
            <Projects />
          </section>

          {/* Experience Section */}
          <section id="experience" className="min-h-screen">
            <Experience />
          </section>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;