import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contacts/Contact';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop /> {/* BackToTop component for scrolling to the top */}
      {/* Ensure BackToTop is placed after Footer to avoid overlap issues */}           
    </>
  );
}

export default App;
