"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Head from 'next/head';
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaAward,
  FaGraduationCap,
  FaLanguage,
} from "react-icons/fa"
import { SiCplusplus, SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { MdEmail, MdWork, MdCode } from "react-icons/md"
import BackgroundPaths from "../components/BackgroundPaths"

const SkillItem = ({ icon, title, level }) => (
  <motion.div
    className="bg-gray-800 rounded-lg p-4 flex items-center space-x-4"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="text-3xl text-blue-400">{icon}</span>
    <div>
      <span className="font-semibold">{title}</span>
      <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  </motion.div>
)

const ExperienceItem = ({ title, company, position, date, description, link }) => (
  <motion.div
    className="bg-gray-700 rounded-lg p-6 transition-transform duration-300 hover:shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.01 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-blue-400 mb-2">
      {company} - {position}
    </p>
    <p className="text-gray-400 mb-4">{date}</p>
    <ul className="list-disc list-inside text-gray-300 mb-4">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative text-blue-400 hover:text-blue-300 transition-colors duration-300 
                   after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                   after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
      >
        Visit Website
      </a>
  </motion.div>
);

const ProjectCard = ({ title, description, technologies, link, github }) => (
  <motion.div
    className="bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-lg"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-blue-400 hover:text-blue-300 transition-colors duration-300 
                     after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                     after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          View Project
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-blue-400 hover:text-blue-300 transition-colors duration-300 
                     after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                     after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          View On Github
        </a>
      </div>
    </div>
  </motion.div>
)

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
      "About",
      "Skills",
      "Education",
      "Experience",
      "Projects",
      "Achievements",
      "Contact",
    ];

    const handleNavClick = (section) => {
      scrollToSection(section.toLowerCase());
      setMenuOpen(false);
    };

    return (
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-gray-800/95 backdrop-blur-sm shadow-lg"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="JH Logo" width={40} height={40} className="mr-2" />
            <motion.a
              onClick={() => scrollToSection('hero')}
              className="text-xl md:text-2xl font-bold cursor-pointer whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Johnny Hsieh
            </motion.a>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <motion.a
                key={item}
                onClick={() => handleNavClick(item)}
                className="hover:text-blue-400 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Open navigation menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-800/95 px-6 pb-4 pt-2 shadow-lg">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="text-left text-lg py-2 px-2 rounded hover:bg-blue-600 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.nav>
    );
  }

  return (
    <>
      <Head>
        <title>Johnny Hsieh</title>
      </Head>
      <main className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
        {/* Enhanced Parallax Background Elements */}
        <motion.div
          className="absolute inset-0 z-0 overflow-hidden"
          style={{
            background: "radial-gradient(circle at 50% 50%, #1a365d 0%, #0a1628 100%)",
          }}
        >
          {/* Deep space stars/particles layer */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/stars.png')",
              backgroundSize: "cover",
              opacity: 0.4,
              y: scrollY * 0.1,
            }}
          />

          {/* Grid layer with improved movement */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/grid.png')",
              backgroundSize: "50px 50px",
              opacity: 0.15,
              y: scrollY * 0.5,
              x: scrollY * -0.1, // Slight horizontal movement for added dimension
            }}
          />

          {/* Subtle diagonal lines layer */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 10px)",
              y: scrollY * 0.3,
              x: scrollY * 0.2,
            }}
          />

          {/* Primary glow effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at 50% 30%, rgba(66, 153, 225, 0.15) 0%, transparent 60%)",
              y: scrollY * 0.4,
            }}
          />

          {/* Secondary smaller glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.1) 0%, transparent 40%)",
              y: scrollY * -0.2,
            }}
          />

          {/* Floating orbs/elements (optional) */}
          <motion.div
            className="absolute h-32 w-32 rounded-full blur-xl"
            style={{
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)",
              top: "20%",
              left: "30%",
              y: scrollY * 0.7,
            }}
          />

          <motion.div
            className="absolute h-24 w-24 rounded-full blur-xl"
            style={{
              background: "radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)",
              top: "60%",
              left: "70%",
              y: scrollY * -0.6,
            }}
          />
        </motion.div>

        <div className="relative z-10">
          <BackgroundPaths />
          <Navbar />

          <motion.section
            id="hero"
            className="h-screen flex items-center justify-center pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Image
                src="johnny.jpg"
                alt="Johnny Hsieh"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-8"
              />
              <h1 className="text-5xl font-bold mb-4">Johnny Hsieh</h1>
              <p className="text-xl text-gray-300 mb-8">
                High School Student | Programmer | Web Developer | Bilingual (Chinese/English)
              </p>
              <motion.div
                className="flex justify-center space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <a
                  href="https://github.com/myName833"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-blue-400 transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/johnny-hsieh-97aa5b329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:Johnnyhsieh02@gmail.com"
                  className="text-3xl hover:text-blue-400 transition-colors"
                >
                  <MdEmail />
                </a>
              </motion.div>
            </motion.div>
          </motion.section>

          <section id="about" className="relative py-16">
            <div className="relative hover-line-container">

              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-blue-600 
                              transform scale-x-0 transition-transform duration-300 ease-in-out 
                              group-hover:scale-x-100 origin-left" 
              />

              <div className="container mx-auto px-6 group">
                <h2 className="text-3xl font-bold mb-8">About Me</h2>

                <p className="text-lg text-gray-300 leading-relaxed">
                  I am a motivated high school student passionate about programming and web development, with hands-on
                  experience in building websites and a strong foundation in frontend development, Python, and C++. I aim to
                  further develop my skills and contribute to innovative projects. As the winner of the Congressional App
                  Challenge 24-25, I led the creation of Lockedin, an app featuring a chatbot and grade trend analyzer,
                  showcasing my ability to develop practical and impactful solutions. Being bilingual in Chinese and English,
                  I bring a multicultural perspective to my work and can effectively communicate with diverse teams.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <FaAward className="text-blue-400 mr-2" />
                    <span>Congressional App Challenge Winner</span>
                  </div>
                  <div className="flex items-center">
                    <MdWork className="text-blue-400 mr-2" />
                    <span>Web Development Intern</span>
                  </div>
                  <div className="flex items-center">
                    <MdCode className="text-blue-400 mr-2" />
                    <span>Web Developer</span>
                  </div>
                  <div className="flex items-center">
                    <FaGraduationCap className="text-blue-400 mr-2" />
                    <span>High School Junior</span>
                  </div>
                  <div className="flex items-center">
                    <FaLanguage className="text-blue-400 mr-2" />
                    <span>Bilingual (Chinese/English)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <motion.section
            id="skills"
            className="py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <SkillItem icon={<FaHtml5 className="text-orange-500 text-4xl" />} title="HTML5" level={90} />
                <SkillItem icon={<FaCss3Alt className="text-blue-500 text-4xl" />} title="CSS3" level={85} />
                <SkillItem icon={<FaJs className="text-yellow-500 text-4xl" />} title="JavaScript" level={80} />
                <SkillItem icon={<FaReact className="text-blue-500 text-4xl" />} title="React" level={75} />
                <SkillItem icon={<FaNodeJs className="text-green-500 text-4xl" />} title="Node.js" level={70} />
                <SkillItem icon={<FaPython className="text-blue-600 text-4xl" />} title="Python" level={85} />
                <SkillItem icon={<SiCplusplus className="text-blue-600 text-4xl" />} title="C++" level={80} />
                <SkillItem icon={<SiNextdotjs className="text-white text-4xl" />} title="Next.js" level={75} />
                <SkillItem icon={<SiTailwindcss className="text-blue-500 text-4xl" />} title="Tailwind CSS" level={85} />
              </div>
            </div>
          </motion.section>

          <motion.section
            id="education"
            className="py-20 bg-gray-800/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8">Education</h2>
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Diamond Bar High School</h3>
                <p className="text-blue-400 mb-2">High School Diploma (Expected 2026)</p>
                <ul className="list-disc list-inside text-gray-300">
                  <li>President of Hackathon Club</li>
                  <li>Web Development Head Intern at Wprime Sports</li>
                  <li>Web Developer at Silver Tech</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="experience"
            className="py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8">Experience</h2>
              <div className="space-y-8">
                <ExperienceItem
                  title="DB Hackathon Club"
                  company="Diamond Bar High School"
                  position="President/Founder"
                  date="July 2024 - May 2026"
                  description={[
                    "Organized school's largest Hackathon with over 200 participants",
                    "Contributed to the design and development of the club website",
                    "Led workshops on various technologies including Python, JavaScript, and React",
                    "Utilized bilingual skills to engage with a diverse group of participants and sponsors",
                  ]}
                  link="https://dbhackathonclub.onrender.com/"
                />
                <ExperienceItem
                  title="Kode4Kids"
                  company="Diamond Bar High School"
                  position="Head Scratch Instructor"
                  date="Sep 2024 - Present"
                  description={[
                    "Taught Scratch programming to kids aged 8-13 as part of the Kode4Kids club at school",
                    "Developed engaging lesson plans and interactive coding activities",
                    "Helped young students build foundational programming skills in a fun environment",
                    "Mentored and guided students through their first coding projects",
                  ]}
                  link="www.instagram.com/dbkode4kids/"
                />
                <ExperienceItem
                  title="WPrime Sports"
                  company="WPrime Sports"
                  position="Web Development Head Intern"
                  date="Oct 2024 - Apr 2025"
                  description={[
                    "Designed and developed the company's responsive website using React and Next.js",
                    "Implemented SEO best practices, improving site visibility by 40%",
                    "Collaborated with the marketing team to create an intuitive user interface",
                    "Led a team of four web engineers during my internship, managing project milestones and ensuring timely delivery",
                    "Optimized website performance, reducing load time by 30%",
                    "Assisted in creating bilingual content for the website, expanding the company's reach",
                  ]}
                  link="#"
                />
                <ExperienceItem
                  title="Silver Tech"
                  company="Silver Tech"
                  position="Web Developer"
                  date="Jan 2025 - Present"
                  description={[
                    "Built and deployed a responsive website for a non-profit organization using React and Next.js, enhancing its digital presence.",
                    "Integrated SEO strategies that boosted search rankings and increased visitor traffic.",
                    "Worked closely with non-profit leaders to design a user-friendly interface tailored to their audience.",
                    "Managed a team of volunteer developers, delegating tasks and overseeing progress to meet deadlines.",
                    "Optimized backend and frontend performance, significantly reducing page load times.",
                    "Developed bilingual content to make the website accessible to a broader community and improve engagement.",
                  ]}
                  link="https://silver-tech-website.onrender.com/"
                />
                <ExperienceItem
                  title="LA Metro"
                  company="Los Angeles County Metropolitan Transportation Authority"
                  position="Engineering Intern"
                  date="Jun 2025 - Aug 2025"
                  description={[
                    "Assisted in the design and layout of railway tracks for new transit projects.",
                    "Created detailed 3D models of track systems and station infrastructure using engineering software.",
                    "Collaborated with senior engineers on structural analysis and project planning.",
                    "Participated in site visits and contributed to technical documentation for ongoing projects.",
                    "Gained hands-on experience in civil engineering and transportation design."
                  ]}
                  link="https://www.metro.net/"
                />
                <ExperienceItem
                  title="Mind 4 Youth Diamond Bar Chapter"
                  company="Mind 4 Youth Diamond Bar Chapter"
                  position="Founder & President"
                  date="Dec 2024 - Present"
                  description={[
                    "President of Mind4Youth, a mental health organization dedicated to awareness and support.",
                    "Organized TED-style talks and awareness campaigns, featuring experts to educate and inspire communities.",
                    "Led and managed volunteers, coordinating initiatives to maximize outreach and engagement.",
                    "Oversaw sharing initiatives, expanding mental health resources and accessibility to diverse communities."
                  ]}
                  link="https://mind4youth.com/"
                />
                <ExperienceItem
                  title="A+ Youth Tutors"
                  company="A+ Youth Tutors"
                  position="Regional Leader"
                  date="Jan 2025 - Present"
                  description={[
                    "Led a team of 15 tutors, providing guidance and support",
                    "Developed a scheduling system that increased tutor efficiency by 25%",
                    "Tutored over 50 students in Computer Science and Math",
                    "Implemented a feedback system, improving overall student satisfaction by 35%",
                    "Conducted bilingual tutoring sessions, catering to both English and Chinese-speaking students",
                  ]}
                  link="https://www.youthaplus.com/"
                />
                <ExperienceItem
                  title="Sunflower Youth Foundation"
                  company="Sunflower Youth Foundation"
                  position="Cultural Exchange Officer"
                  date="Jun 2024 - Present"
                  description={[
                    "Organized cultural exchange events for over 50 international students",
                    "Developed and maintained the foundation's website",
                    "Created a language exchange program, pairing native speakers with learners",
                    "Increased participation in foundation events by 50% through targeted outreach",
                    "Facilitated communication between Chinese and English-speaking participants",
                  ]}
                  link="https://sunfloweryouth.com/"
                />                
              </div>
            </div>
          </motion.section>

          <motion.section
            id="projects"
            className="py-20 bg-gray-800/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProjectCard
                  title="Lockedin"
                  description="Winner of Congressional App Challenge 24-25. An app featuring a AI chatbot and grade trend analyzer with bilingual support."
                  technologies={["React", "Python", "Llama API", "Data Visualization", "MongoDB", "Express.js", "Node.js"]}
                  link="#"
                  github="https://github.com/myName833/congressapp24"
                />
                <ProjectCard
                  title="DB Hackathon Club Website"
                  description="Designed and developed the website for the school's Hackathon club, featuring event registration and resource sharing."
                  technologies={["React", "Vite.js", "Tailwind CSS"]}
                  link="https://dbhackathonclub.onrender.com/"
                  github="https://github.com/henrychen4736/Hackathon-Club-Website"
                />
                <ProjectCard
                  title="WPrime Sports Website"
                  description="Developed the company website during internship, improving online presence and implementing e-commerce features."
                  technologies={["React", "Vite.js", "Tailwind CSS"]}
                  link="https://wprimesport.com/"
                  github="https://github.com/DBHackathonClub/Company-Website"              
                />
                <ProjectCard
                  title="EmployHub"
                  description="Created an interactive platform to help school's guidance department so students can easily search job postings and employers can easily submit them."
                  technologies={["React.js", "Vite.js", "Flask", "Python", "SQL"]}
                  link="#"
                  github="https://github.com/myName833/24-25-FBLA-COMP"
                />
                <ProjectCard
                  title="Silver Tech"
                  description="Developed a website for a non-profit organization dedicated to helping elderly individuals navigate technology with confidence."
                  technologies={["React.js", "Next.js", "TypeScript", "Tailwind CSS"]}
                  link="#"
                  github="https://github.com/myName833/Silver-Tech"
                />
                <ProjectCard
                  title="Weather App"
                  description="Developed a weather application utilizing APIs to provide real-time forecasts and interactive user features."
                  technologies={["React.js", "Vite.js", "Tailwind CSS", "API Integration"]} 
                  link="https://myname833.github.io/weather-app/"
                  github="https://github.com/myName833/weather-app"
                />
                <ProjectCard
                  title="The Grind Guide"
                  description="Developed a website for a individuals to orginaize their daily tasks and goals."
                  technologies={["React.js", "Next.js", "TypeScript", "Tailwind CSS"]}
                  link="https://the-grind-guide.onrender.com/"
                  github="https://github.com/myName833/The-Grind-Guide"
                />
                <ProjectCard
                  title="DBHS FBLA Website + Study Guide for HS Students"
                  description="Developed a website for a HS student in preparing various test and FBLA Events"
                  technologies={["React.js", "Flask", "Python", "Tailwind CSS","SQL"]}
                  link="https://the-grind-guide.onrender.com/"
                  github="https://github.com/myName833/DBHS-FBLA-Website"
                />
              </div>
            </div>
          </motion.section>

          <motion.section
            id="achievements"
            className="py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8">Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-gray-700 rounded-lg p-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3 className="text-xl font-bold mb-2">Congressional App Challenge Winner 24-25</h3>
                  <p className="text-gray-300">
                    Led the development of Lockedin, an innovative bilingual app featuring a chatbot and grade trend
                    analyzer, recognized at the national level.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-gray-700 rounded-lg p-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3 className="text-xl font-bold mb-2">Hackathon Organizer</h3>
                  <p className="text-gray-300">
                    Successfully organized and led the largest hackathon in school history, with over 35 participants and
                    utilized bilingual skills to engage a diverse group of participants.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-gray-700 rounded-lg p-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3 className="text-xl font-bold mb-2">FBLA State Leadership Conference Website Development</h3>
                  <p className="text-gray-300">
                  Placed 5 at FBLA State Leadership Conference (SLC) for the Web Development event, demonstrating strong technical skills and effective team collaboration in building a functional and innovative website.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="contact"
            className="py-20 bg-gray-800/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
              <p className="text-xl mb-8">
                Feel free to reach out for collaborations or just a friendly hello. I'm fluent in both English and Chinese!
              </p>
              <div className="flex justify-center space-x-6">
                <motion.a
                  href="mailto:Johnnyhsieh02@gmail.com"
                  className="text-2xl hover:text-blue-400 transition-colors flex items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MdEmail className="mr-2" /> Email
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/johnny-hsieh-97aa5b329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-400 transition-colors flex items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="mr-2" /> LinkedIn
                </motion.a>
                <motion.a
                  href="https://github.com/myName833"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-400 transition-colors flex items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="mr-2" /> GitHub
                </motion.a>
              </div>
            </div>
          </motion.section>

          <footer className="bg-gray-900 py-6">
            <div className="container mx-auto px-6 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Johnny Hsieh. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </main>
    </>
  )
}

export default Home