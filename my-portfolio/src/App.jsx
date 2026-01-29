import { useEffect } from 'react';
import Hero from './components/Hero';
import ExperienceTimeline from './components/ExperienceTimeline';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  useEffect(() => {
    // Initialize dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-dark">
      <Hero />
      <ExperienceTimeline />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;