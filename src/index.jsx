import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../sass/style.scss';
import SlidingSection from './components/SlidingSection';

function Nav({ onNavClick, activeSection }) {
  return (
    <nav>
      {/* <div className="logo" /> */}
      <ul>
        <li className={activeSection === 'welcome' ? 'active' : ''} onClick={() => onNavClick('welcome')}>
          <a href="#welcome">Home</a>
        </li>
        <li className={activeSection === 'about' ? 'active' : ''} onClick={() => onNavClick('about')}>
          <a href="#about">About</a>
        </li>
        <li className={activeSection === 'projects' ? 'active' : ''} onClick={() => onNavClick('projects')}>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('');

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll event listener to update activeSection based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      console.log('starting handleScroll');
      const sections = ['welcome', 'about', 'projects'];
      const currentSection = sections.find((section) => {
        console.log('starting current section');
        const element = document.getElementById(section);
        console.log(element);
        if (element) {
          console.log('in element');
          const rect = element.getBoundingClientRect();
          // Check if the top of the section is within the viewport
          console.log(rect.top, rect.bottom);
          console.log(rect);
          return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    console.log('adding event listener');
    window.addEventListener('scroll', handleScroll);
    return () => {
      console.log('removing event listener');
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Nav onNavClick={handleNavClick} activeSection={activeSection} />
      <main>
        <section id="welcome" className="welcome-section">
          <h1>Welcome to my personal website! This is the website of Caleb Ash, a Dartmouth student studying computer science graduating in 2026.
            To learn more about me, please visit my about me page. To contact me, email me at caleb.w.ash.26@dartmouth.edu
          </h1>
        </section>
        <section id="about" className="about-container">
          <h1 className="about-header">About Me</h1>
          <div className="about-section">My name is Caleb Ash, and I was born raised in Philadelphia, Pennsylvania.
            I am currently attending Dartmouth College where I am studying Computer Science and Economics,
            and am involved in youth mentoring. In my spare time, I enjoy working on personal projects,
            learning new skills, watching Philadelphia sports, and exercising.
          </div>
          <div className="skills-header">Technical Skills</div>
          <SlidingSection />
        </section>
        <section id="projects" className="project-section">
          <h1>Projects</h1>
          {/* <p>This is a placeholder for test content.</p> */}
          <ul>
            <li>
              <h2>PhilsTweetBot</h2>
              <p>The @philstweetbot is a personal project I undertook for a few reasons.
                First, I wanted a source of reliable Phillies news and highlights, and saw that I could create that.
                Second, I wanted experience working with APIs and experience with different aspects of programming.
                Both goals were achieved, and I am happy with how the final product has turned out,
                although I continue to tinker with and maintain the bot.
              </p>
              <div className="trapdoor">
                <div className="top door" />
                <div className="bottom door" />
                <a href="https://twitter.com/philstweetbot" className="twitter-follow-button" data-show-count="false" data-size="large" data-dnt="false">Follow @philstweetbot</a>
                <script src="widget.js" />
              </div>
            </li>
            <li>
              <h2>Tiny Search Engine</h2>
              <p>
                The Tiny Search Engine was an in class project I completed during my freshman year at Dartmouth.
                The project had a variety of steps. In total, I designed and implemented a crawler, indexer, and
                querier to create a series of programs with small search engine capabilities. The crawler grabbed
                webpages from a test ground, the indexer scanned each webpage gathering all information, and the
                querier allowed the user to search for words and phrases.
              </p>
            </li>
          </ul>
        </section>
        <section id="fallback" className="fallback-section">
          <h1>URL Not Found</h1>
          <p>If you were expecting something here, its not available.</p>
        </section>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Built from scratch by Caleb Ash.</p>
        <ul>
          <li><a href="https://www.instagram.com/calebashw/">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/caleb-ash-606312247/">LinkedIn</a></li>
          <li><a href="https://github.com/calebashw">Github</a></li>
        </ul>
      </footer>
    </>
  );
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
