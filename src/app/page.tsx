'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let interval;
    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 1, 100));
      }, 20);
    } else {
      setFadeOut(true); // start fade-out
      setTimeout(() => setShowLoader(false), 700); // hide after fade completes
    }

    return () => clearInterval(interval);
  }, [progress]);

  if (showLoader) {
    return (
      <div
        className={`flex flex-col justify-center items-center h-screen bg-indigo-600 text-white transition-opacity duration-700 ease-in-out ${
          fadeOut ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
        }`}
      >
        <h1 className="text-2xl font-semibold mb-4">🚀 Loading... {progress}%</h1>
        <div className="w-64 h-3 bg-white bg-opacity-20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    );
  }
  
  return (
    <main className="min-h-screen bg-indigo-100 text-gray-800 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 bg-white shadow z-50">
        <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
          <span className="font-bold text-lg">Urvish Dave</span>
          <div className="space-x-6 text-sm">
            <a href="#home" className="hover:text-indigo-600">Home</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section  id="home" className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-indigo-100">
        <div className="max-w-3xl">
          <p className="text-indigo-600 text-sm font-semibold mb-2 animate-pulse">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 transition-all duration-700">
            Urvish Dave
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-gray-700 mb-6">
            I build fast, clean, and responsive web experiences.
          </h2>
          <p className="text-md sm:text-lg text-gray-600 mb-8 leading-relaxed">
            I’m a full-stack developer with a passion for turning ideas into reality using modern tech.
            Focused on crafting efficient, user-centric digital solutions.
          </p>

          <a
            href="#projects"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-sm hover:bg-indigo-500 transition duration-300"
          >
            🚀 View My Projects
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-6 py-16 bg-indigo-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">💼 Experience</h2>

        <div className="max-w-6xl mx-auto space-y-12">

          {/* Experience Card */}
          {[
            {
              role: "Technical Assistant",
              company: "Kirkland Surveying",
              location: "Sudbury, ON",
              dates: "Sep 2024 – Present",
              highlights: [
                "Automated 80% of geospatial workflows using Python and ArcPy.",
                "Developed SQL scripts for parcel boundaries in PostgreSQL.",
                "Built real-time Power BI + ArcGIS dashboards (20% more accurate).",
                "Used Power Automate to notify stakeholders, improving coordination by 30%.",
                "Trained junior staff on digital mapping best practices."
              ],
            },
            {
              role: "Teaching Assistant – Cloud Technologies",
              company: "Laurentian University",
              location: "Sudbury, ON",
              dates: "Jun 2023 – May 2024",
              highlights: [
                "Assisted 60+ students in AWS, Docker, and data pipelines.",
                "Created Python auto-grader reducing grading time by 50%.",
                "Taught SQL, Pandas, Power BI for data modeling.",
                "Built hands-on ETL modules using Apache NiFi."
              ],
            },
            {
              role: "Software Developer",
              company: "Swan Softweb Solutions",
              location: "Gujarat, India",
              dates: "Dec 2020 – Dec 2022",
              highlights: [
                "Built scalable ETL pipelines with Python, Docker, AWS (46% boost).",
                "Reduced report time by 60% using optimized SQL views/indexes.",
                "Designed dashboards for performance & KPIs in Power BI.",
                "Integrated ML models with Django for fraud detection.",
                "Liaised with stakeholders to build technical data solutions."
              ],
            },
          ].map((exp, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 md:p-8 transition hover:shadow-lg hover:scale-[1.01]"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-700">{exp.role}</h3>
                  <p className="text-gray-700">{exp.company} — {exp.location}</p>
                </div>
                <p className="text-sm text-gray-500 mt-2 md:mt-0">{exp.dates}</p>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 text-[15px]">
                {exp.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-8 py-16 bg-white">
        <h2 className="text-3xl font-semibold mb-8 text-center">📂 Projects</h2>
        
        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          
          {/* Project 1 */}
          <div className="border rounded-lg p-6 shadow hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="mb-4 text-gray-700">
              A personal website to showcase my work, built using Next.js and Tailwind CSS.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/urvish/portfolio" target="_blank" rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 text-sm">
                GitHub
              </a>
              <a href="https://your-portfolio.vercel.app" target="_blank" rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 text-sm">
                Live Demo
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border rounded-lg p-6 shadow hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Blog CMS</h3>
            <p className="mb-4 text-gray-700">
              A markdown-powered blog to write and publish tutorials and dev notes.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/urvish/blog-cms" target="_blank" rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 text-sm">
                GitHub
              </a>
              <a href="https://blog-cms.vercel.app" target="_blank" rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 text-sm">
                Live Demo
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen px-8 py-16 bg-indigo-50">
        <h2 className="text-3xl font-semibold mb-6 text-center">👨‍💻 About Me</h2>
        <p className="max-w-3xl mx-auto text-center text-lg">
          I'm a passionate developer with experience in building responsive and clean web applications.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen px-8 py-16 bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-center">📞 Contact</h2>
        <p className="text-center">
          Email me at <a href="mailto:urvish@example.com" className="text-indigo-600 underline">urvish@example.com</a>
        </p>
      </section>
    </main>
  );
}
