import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000 top-1/2 -right-48"></div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 relative max-w-6xl">
        <div className="text-white">
          <div className="flex items-start gap-8 mb-12">
            {/* Profile Image */}
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-400 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQFqaZCZGryrZQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707220304473?e=1743033600&v=beta&t=MRfkQwnzxieGIA0gZfFrnBCpPR5pZaGdBdN4FTLfkoA" 
                alt="Lindelani Mbanjwa"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Lindelani Mbanjwa
                </h1>
                <h2 className="text-3xl font-light mb-8 text-purple-200">
                  ICT SUPPORT: BUSINESS ANALYST
                </h2>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>+27 68 187 6844</span>
                </div>
                <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>20 Severn Rd, Westville, Durban 9720</span>
                </div>
                <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>mbanjwa@gmail.com</span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/lindelani-mbanjwa-685728254/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-purple-400 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/HIMOTHYLMENT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-purple-400 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-16">
            {/* About */}
            <section className="transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">About Me</h3>
              <p className="text-gray-300 leading-relaxed">
                Certified Microsoft Azure professional specializing in IT infrastructure, data analysis, 
                and software development. Passionate about leveraging technology to drive operational 
                efficiency and deliver innovative solutions through technical expertise and 
                cross-functional collaboration.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Experience</h3>
              <div className="space-y-6">
                <div className="bg-blue-950/30 p-6 rounded-lg backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-blue-300">Head of Information Technology Department</h4>
                      <p className="text-purple-400">AMANQUHE DATA DOCTORS ANALYTICS AND REVENUE SERVICES</p>
                      <p className="text-gray-400">Durban · On-site</p>
                    </div>
                    <span className="text-gray-400">Oct 2024 - Present</span>
                  </div>
                  <p className="text-gray-300 mb-4">Data & Business Analyst | Problem Solver | Revenue Optimization Specialist</p>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li className="hover:text-blue-300 transition-colors">Led IT infrastructure optimization initiatives</li>
                    <li className="hover:text-blue-300 transition-colors">Managed cross-functional teams for technical projects</li>
                    <li className="hover:text-blue-300 transition-colors">Implemented revenue optimization strategies</li>
                  </ul>
                </div>

                <div className="bg-purple-950/30 p-6 rounded-lg backdrop-blur-sm hover:bg-purple-900/30 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-purple-300">Internship Trainee</h4>
                      <p className="text-blue-300">Kaleidoscope Digital Systems</p>
                      <p className="text-gray-400">Durban, KwaZulu-Natal, South Africa</p>
                    </div>
                    <span className="text-gray-400">Feb 2023 - Aug 2023 · 7 mos</span>
                  </div>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li className="hover:text-purple-300 transition-colors">Client sourcing with the sales department</li>
                    <li className="hover:text-purple-300 transition-colors">Provided coding intel for the IT department</li>
                    <li className="hover:text-purple-300 transition-colors">Decision Analysis and Business Analysis tasks</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-950/50 p-6 rounded-lg backdrop-blur-sm hover:bg-blue-900/50 transition-colors duration-300 transform hover:-translate-y-1">
                  <h4 className="text-lg font-semibold mb-3 text-blue-300">Cloud & Tools</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li className="hover:text-blue-300 transition-colors">Microsoft Azure</li>
                    <li className="hover:text-blue-300 transition-colors">DevOps</li>
                    <li className="hover:text-blue-300 transition-colors">Microsoft 365</li>
                  </ul>
                </div>
                <div className="bg-purple-950/50 p-6 rounded-lg backdrop-blur-sm hover:bg-purple-900/50 transition-colors duration-300 transform hover:-translate-y-1">
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">Programming</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li className="hover:text-purple-300 transition-colors">HTML/CSS</li>
                    <li className="hover:text-purple-300 transition-colors">C#</li>
                    <li className="hover:text-purple-300 transition-colors">SQL</li>
                  </ul>
                </div>
                <div className="bg-blue-950/50 p-6 rounded-lg backdrop-blur-sm hover:bg-blue-900/50 transition-colors duration-300 transform hover:-translate-y-1">
                  <h4 className="text-lg font-semibold mb-3 text-blue-300">Analytics</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li className="hover:text-blue-300 transition-colors">SEO Optimization</li>
                    <li className="hover:text-blue-300 transition-colors">Data Warehousing</li>
                    <li className="hover:text-blue-300 transition-colors">Business Intelligence</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Education & Certifications</h3>
              <div className="space-y-6">
                <div className="bg-blue-950/30 p-6 rounded-lg backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-blue-300">Africa Learn</h4>
                  <p className="text-purple-300">Microsoft certifications · Information Technology- Software development</p>
                  <p className="text-gray-400">May 2024 - Nov 2024</p>
                  <p className="text-gray-300 mt-2">Activities and societies: work readiness programs, software development classes & certification training</p>
                </div>

                <div className="bg-purple-950/30 p-6 rounded-lg backdrop-blur-sm hover:bg-purple-900/30 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-purple-300">Durban University of Technology</h4>
                  <p className="text-blue-300">Information Technology</p>
                  <p className="text-gray-400">2021 - 2023</p>
                  <p className="text-gray-300 mt-2">Skills: Decision Analysis, Strategic Thinking</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-950/30 p-6 rounded-lg backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-300">
                    <h4 className="text-xl font-semibold text-blue-300">Microsoft Azure AZ-900</h4>
                    <p className="text-purple-300">Cloud Fundamentals Certification</p>
                    <p className="text-gray-400">2023</p>
                  </div>
                  <div className="bg-purple-950/30 p-6 rounded-lg backdrop-blur-sm hover:bg-purple-900/30 transition-all duration-300">
                    <h4 className="text-xl font-semibold text-purple-300">Cybersecurity Essentials 101</h4>
                    <p className="text-blue-300">Security Fundamentals</p>
                    <p className="text-gray-400">2023</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;