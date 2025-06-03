import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, BarChart, Brain, GraduationCap, Briefcase, Award, User, X } from 'lucide-react';

// Main App Component
const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Data for projects
  const projects = [
    {
      id: 'hand-gestures',
      title: 'Hand Gestures to Control Computer Volume and Cursor',
      category: 'Computer Vision',
      dates: 'December 2023 - February 2024',
      description: 'Developed a computer vision system using OpenCV and MediaPipe to detect and track hand gestures, enabling touch-free control of system volume and cursor using real-time webcam input.',
      details: [
        'Utilized OpenCV and MediaPipe for real-time hand gesture recognition.',
        'Achieved over 95% accuracy in hand gesture recognition, enhancing user interaction and providing seamless control over computer systems without physical contact.',
        'Showcased creative application of machine learning and human-computer interaction principles.'
      ],
      github: 'https://github.com/shiva0042/hand-gesture',
      image: 'https://placehold.co/400x250/A7F3D0/10B981?text=Hand+Gestures'
    },
    {
      id: 'resume-screening-ai',
      title: 'Resume Screening AI System',
      category: 'NLP, Web App',
      description: 'Developed a web-based application using Streamlit and Natural Language Processing (NLP) techniques to automate resume screening.',
      details: [
        'Used Python libraries like spaCy and scikit-learn for text extraction and similarity analysis.',
        'Created a user-friendly interface for uploading resumes and job descriptions.',
        'Achieved 85% accuracy in matching resumes with job requirements, significantly streamlining the hiring process.'
      ],
      github: 'https://github.com/shiva0042/resume-screening-ai',
      image: 'https://placehold.co/400x250/FECACA/EF4444?text=Resume+AI'
    },
    {
      id: 'student-performance',
      title: 'Student Performance Analysis and Prediction',
      category: 'Data Analysis, Machine Learning',
      description: 'Analyzed educational data to understand key factors influencing student success and built predictive models.',
      details: [
        'Performed Exploratory Data Analysis (EDA) using pandas and seaborn to identify key trends and correlations.',
        'Applied classification models like Logistic Regression and Decision Trees to predict student outcomes.',
        'Delivered actionable insights to improve academic performance and decision-making for educators.'
      ],
      github: 'https://github.co/shiva0042/student-performance-prediction',
      image: 'https://placehold.co/400x250/BFDBFE/3B82F6?text=Student+Perf'
    },
    {
      id: 'titanic-survival',
      title: 'Titanic Survival Prediction',
      category: 'Machine Learning',
      description: 'Developed a machine learning model using the Titanic dataset to predict passenger survival.',
      details: [
        'Executed comprehensive data preprocessing, including handling missing values and feature engineering.',
        'Trained and evaluated models using scikit-learn, achieving 80% accuracy with Logistic Regression and Random Forest models.',
        'Demonstrated proficiency in classical machine learning workflows and model evaluation techniques.'
      ],
      github: 'https://github.com/shiva0042/titanic-survival-prediction',
      image: 'https://placehold.co/400x250/D1FAE5/059669?text=Titanic+Pred'
    }
  ];

  // Smooth scrolling for navigation
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-inter bg-gray-900 text-gray-100"> {/* Overall dark background and light text */}
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-gray-800 shadow-lg z-50 p-4"> {/* Darker nav bar */}
        <div className="container mx-auto flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold text-red-500 rounded-md p-2 hover:bg-gray-700 transition-colors"> {/* Red accent for name */}
            SHIVARAMAKRISHNAN D
          </a>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-red-400 transition-colors font-medium">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-red-400 transition-colors font-medium">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-red-400 transition-colors font-medium">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-red-400 transition-colors font-medium">Experience</button>
            <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-red-400 transition-colors font-medium">Education</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-red-400 transition-colors font-medium">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-red-700 to-rose-900 text-white p-4"> {/* Red gradient */}
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            SHIVARAMAKRISHNAN D
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-light max-w-3xl mx-auto">
            Detail-oriented & Enthusiastic Data Science Postgraduate | Solving Real-World Problems with Data & Visual Storytelling
          </p>
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-white text-red-700 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              Explore My Work
            </button>
            <a
              href="https://github.com/shiva0042"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-white hover:text-red-700 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <Github size={20} /> <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-900 px-4"> {/* Dark background */}
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-red-500 mb-8">About Me</h2> {/* Red accent */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700"> {/* Dark card, removed flex for image centering as image is removed */}
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              As a detail-oriented and enthusiastic Data Science postgraduate student, I possess a strong foundation in programming, statistics, and analytics. My passion lies in solving real-world problems using data-driven techniques and visual storytelling.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              I am eager to contribute to impactful projects where my analytical and leadership skills can drive meaningful insights and business decisions. My experience spans from developing computer vision systems to building machine learning models for predictive analysis, always with a focus on delivering tangible results.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800 px-4"> {/* Dark background */}
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-red-500 mb-12">My Skills</h2> {/* Red accent */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming */}
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-600 hover:shadow-xl transition-shadow duration-300"> {/* Dark card */}
              <div className="flex items-center justify-center text-red-400 mb-4"> {/* Red accent for icon */}
                <Code size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">Programming</h3>
              <ul className="text-gray-300 space-y-2 text-lg">
                <li>Python</li>
                <li>SQL</li>
                <li>Basics of Hadoop</li>
                <li>Basics of MongoDB</li>
              </ul>
            </div>

            {/* Tools & Platforms */}
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-600 hover:shadow-xl transition-shadow duration-300"> {/* Dark card */}
              <div className="flex items-center justify-center text-red-400 mb-4"> {/* Red accent for icon */}
                <BarChart size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">Tools & Platforms</h3>
              <ul className="text-gray-300 space-y-2 text-lg">
                <li>MS Office (Word, Excel, PowerPoint)</li>
                <li>Power BI</li>
                <li>Git</li> {/* Added Git */}
                <li>GitHub</li> {/* Added GitHub */}
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-600 hover:shadow-xl transition-shadow duration-300"> {/* Dark card */}
              <div className="flex items-center justify-center text-red-400 mb-4"> {/* Red accent for icon */}
                <Brain size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">Soft Skills</h3>
              <ul className="text-gray-300 space-y-2 text-lg">
                <li>Problem-Solving</li>
                <li>Teamwork & Collaboration</li>
                <li>Leadership</li>
                <li>Critical Thinking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900 px-4"> {/* Dark background */}
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-red-500 mb-12">My Projects</h2> {/* Red accent */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 group"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/374151/D1D5DB?text=Project+Image"; }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-100 mb-2">{project.title}</h3>
                  <p className="text-red-400 text-sm font-medium mb-3">{project.category}</p> {/* Red accent */}
                  <p className="text-gray-300 text-base">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative"> {/* Dark modal */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-100 transition-colors"
            >
              <X size={28} />
            </button>
            <h3 className="text-3xl font-bold text-red-500 mb-4">{selectedProject.title}</h3> {/* Red accent */}
            <p className="text-red-400 text-md font-medium mb-2">{selectedProject.category}</p> {/* Red accent */}
            {selectedProject.dates && <p className="text-gray-400 text-sm mb-4">{selectedProject.dates}</p>}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-60 object-cover rounded-lg mb-6"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x300/374151/D1D5DB?text=Project+Image"; }}
            />
            <p className="text-gray-200 text-lg leading-relaxed mb-6">{selectedProject.description}</p>
            <ul className="list-disc list-inside text-gray-200 text-lg space-y-2 mb-6">
              {selectedProject.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors shadow-md"
              >
                <Github size={20} /> <span>View on GitHub</span>
              </a>
            )}
          </div>
        </div>
      )}

      {/* Experience & Involvement Section */}
      <section id="experience" className="py-20 bg-gray-800 px-4"> {/* Dark background */}
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-red-500 text-center mb-12">Experience & Involvement</h2> {/* Red accent */}

          {/* Experience Card */}
          <div className="bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-600 mb-8"> {/* Dark card */}
            <div className="flex items-start mb-4">
              <Briefcase size={32} className="text-red-400 mr-4 flex-shrink-0" /> {/* Red accent */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-100">Sales Executive</h3>
                <p className="text-red-400 font-medium">Airtel</p> {/* Red accent */}
                <p className="text-gray-400 text-sm">October 2022 - April 2023, Trichy, Tamil Nadu</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-200 text-lg space-y-2">
              <li>Developed customer relationship management and sales negotiation skills.</li>
              <li>Handled client queries, demonstrated products, and managed billing software.</li>
              <li>Gained valuable experience in a fast-paced retail environment with performance targets.</li>
              <li>Spearheaded a strategic sales campaign that increased quarterly revenue by 25% through leveraging data-driven insights and advanced CRM systems to enhance client engagement and retention.</li>
              <li>Presented original work at a state-level tech symposium, showcasing research aptitude and public speaking skills.</li>
            </ul>
          </div>

          {/* Involvement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-600"> {/* Dark card */}
              <div className="flex items-start mb-4">
                <User size={32} className="text-red-400 mr-4 flex-shrink-0" /> {/* Red accent */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-100">Joint Vice President</h3>
                  <p className="text-red-400 font-medium">Bishop Heber College Department of Computer Science</p> {/* Red accent */}
                  <p className="text-gray-400 text-sm">July 2023 - April 2024</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-200 text-lg space-y-2">
                <li>Led departmental student committees and organized events such as seminars, tech fests, and workshops.</li>
                <li>Encouraged peer engagement and supported juniors in academic and co-curricular activities.</li>
              </ul>
            </div>

            <div className="bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-600"> {/* Dark card */}
              <div className="flex items-start mb-4">
                <User size={32} className="text-red-400 mr-4 flex-shrink-0" /> {/* Red accent */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-100">Class Representative</h3>
                  <p className="text-red-400 font-medium">Bishop Heber College Department Of Computer Science</p> {/* Red accent */}
                  <p className="text-gray-400 text-sm">July 2021 - April 2024</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-200 text-lg space-y-2">
                <li>Acted as a bridge between faculty and classmates; resolved academic issues effectively.</li>
                <li>Coordinated classroom activities and contributed to maintaining discipline and communication.</li>
              </ul>
            </div>

            <div className="bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-600 md:col-span-2"> {/* Dark card */}
              <div className="flex items-start mb-4">
                <Award size={32} className="text-red-400 mr-4 flex-shrink-0" /> {/* Red accent */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-100">Research Paper Presentation - Bootfest 2k22</h3>
                  <p className="text-red-400 font-medium">Bishop Heber College National Level Symposium</p> {/* Red accent */}
                  <p className="text-gray-400 text-sm">September 2022 - September 2022</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-200 text-lg space-y-2">
                <li>Presented original work at a state-level tech symposium, showcasing research aptitude and public speaking skills.</li>
                <li>Briefly explain what broadband is and why it's crucial. Define the scope of your survey (e.g., focusing on a specific region, type of user - home/business).</li>
                <li>Highlight the challenges users face in choosing a broadband provider (e.g., varying speeds, prices, reliability, customer service).</li>
                <li>Give a quick overview of how you conducted your survey (e.g., online questionnaires, interviews, data collection from public sources).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="py-20 bg-gray-900 px-4"> {/* Dark background */}
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-red-500 text-center mb-12">Education & Certifications</h2> {/* Red accent */}

          {/* Education */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 mb-8"> {/* Dark card */}
            <div className="flex items-start mb-4">
              <GraduationCap size={32} className="text-red-400 mr-4 flex-shrink-0" /> {/* Red accent */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-100">Education</h3>
              </div>
            </div>
            <ul className="text-gray-200 text-lg space-y-4">
              <li>
                <p className="font-semibold">M.Sc. Data Science</p>
                <p>Bharathidasan University Trichy | 2026 | GPA: 7.5</p>
              </li>
              <li>
                <p className="font-semibold">B.Sc. Computer Science</p>
                <p>Bishop Heber College Trichy | 2024 | GPA: 7.2</p>
              </li>
              <li>
                <p className="font-semibold">Higher Secondary (HSC)</p>
                <p>Campion Anglo-Indian Higher Secondary School Trichy | 2021 | GPA: 8.2</p>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700"> {/* Dark card */}
            <div className="flex items-start mb-4">
              <Award size={32} className="text-red-400 mr-4 flex-shrink-0" /> {/* Red accent */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-100">Certifications</h3>
              </div>
            </div>
            <ul className="text-gray-200 text-lg space-y-4">
              <li>
                <p className="font-semibold">SQL for Data Science</p>
                <p>LinkedIn Learning | 2024</p>
                <p className="text-gray-400 text-base mt-1">Learned how to write complex SQL queries to extract, filter, and analyze data for decision-making; emphasized SQL's role in data analysis workflows.</p>
              </li>
              <li>
                <p className="font-semibold">Cloud Computing</p>
                <p>IBM (via Coursera) | 2023</p>
                <p className="text-gray-400 text-base mt-1">Gained a foundational understanding of cloud services (IaaS, PaaS, SaaS), cloud deployment models, virtualization, containers, and cloud-native application development.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-red-800 text-white px-4"> {/* Dark red background */}
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:shiva20048@gmail.com"
              className="flex flex-col items-center space-y-2 hover:text-red-200 transition-colors"
            >
              <Mail size={40} strokeWidth={1.5} />
              <span className="text-lg font-medium">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/-shiva-rama"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 hover:text-red-200 transition-colors"
            >
              <Linkedin size={40} strokeWidth={1.5} />
              <span className="text-lg font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/shiva0042"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 hover:text-red-200 transition-colors"
            >
              <Github size={40} strokeWidth={1.5} />
              <span className="text-lg font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-6 text-center text-sm"> {/* Even darker footer */}
        <div className="container mx-auto">
          &copy; {new Date().getFullYear()} SHIVARAMAKRISHNAN D. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
