import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import { resumeData } from './data/resumeData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header {...resumeData.header} />
      
      <main className="container" style={{ padding: '3rem 1.5rem' }}>
        <div className="main-content">
          {/* Main Content */}
          <div className="space-y-8">
            <Experience experiences={resumeData.experience} />
            <Projects projects={resumeData.projects} />
          </div>
          
          {/* Sidebar */}
          <div className="sidebar space-y-8">
            <Skills skillCategories={resumeData.skills} />
            <Education education={resumeData.education} />
            <Certifications certifications={resumeData.certifications} />
          </div>
        </div>
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>
            Built with React, TypeScript, and Custom CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;