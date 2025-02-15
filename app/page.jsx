"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Head from 'next/head';
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

const ExperienceItem = ({ title, company, position, date, description }) => (
  <motion.div
    className="bg-gray-700 rounded-lg p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-blue-400 mb-2">
      {company} - {position}
    </p>
    <p className="text-gray-400 mb-4">{date}</p>
    <ul className="list-disc list-inside text-gray-300">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </motion.div>
)

const ProjectCard = ({ title, description, technologies, link }) => (
  <motion.div
    className="bg-gray-800 rounded-lg overflow-hidden"
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
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
        View Project
      </a>
    </div>
  </motion.div>
)

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Navbar = () => {
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
              className="text-2xl font-bold cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Johnny Hsieh
            </motion.a>
          </div>
          <div className="space-x-4">
            {["About", "Skills", "Education", "Experience", "Projects", "Achievements", "Contact"].map((item) => (
              <motion.a
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-blue-400 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>
    )
  }

  return (
    <>
      <Head>
        <title>Johnny Hsieh</title>
      </Head>
      <main className="min-h-screen bg-gray-900 text-white">
        <BackgroundPaths />
        <Navbar />

        <motion.section
          id="hero"
          className="h-screen flex items-center justify-center bg-gray-800 pt-16"
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

        <motion.section
          id="about"
          className="py-20 bg-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-6">
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
                <span>High School Senior</span>
              </div>
              <div className="flex items-center">
                <FaLanguage className="text-blue-400 mr-2" />
                <span>Bilingual (Chinese/English)</span>
              </div>
            </div>
          </div>
        </motion.section>

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
        <SkillItem icon={<SiNextdotjs className="text-black text-4xl" />} title="Next.js" level={75} />
        <SkillItem icon={<SiTailwindcss className="text-blue-500 text-4xl" />} title="Tailwind CSS" level={85} />
            </div>
          </div>
        </motion.section>

        <motion.section
          id="education"
          className="py-20 bg-gray-800"
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
                <li>Web Developer at Play Maker</li>
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
              />
              <ExperienceItem
                title="WPrime Sports"
                company="WPrime Sports"
                position="Web Development Intern"
                date="Oct 2024 - Present"
                description={[
                  "Designed and developed the company's responsive website using React and Next.js",
                  "Implemented SEO best practices, improving site visibility by 40%",
                  "Collaborated with the marketing team to create an intuitive user interface",
                  "Led a team of four web engineers during my internship, managing project milestones and ensuring timely delivery",
                  "Optimized website performance, reducing load time by 30%",
                  "Assisted in creating bilingual content for the website, expanding the company's reach",
                ]}
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
              />
              <ExperienceItem
                title="Play Maker"
                company="Play Maker"
                position="Web Developer"
                date="Jan 2025 - Present"
                description={[
                  "Designed and developed a fully responsive website for a non-profit organization using React and Next.js.",
                  "Implemented SEO best practices, increasing online visibility and engagement.",
                  "Collaborated with stakeholders to create an intuitive and accessible user experience.",
                  "Led a team of volunteer developers, ensuring project milestones were met efficiently.",
                  "Optimized website performance, reducing load time and improving responsiveness.",
                  "Assisted in creating multilingual content, expanding the organization's outreach."
                ]}
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
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="py-20 bg-gray-800"
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
                link="https://github.com/myName833/congressapp24"
              />
              <ProjectCard
                title="DB Hackathon Club Website"
                description="Designed and developed the website for the school's Hackathon club, featuring event registration and resource sharing."
                technologies={["React", "Vite.js", "Tailwind CSS"]}
                link="https://dbhackathonclub.onrender.com/"
              />
              <ProjectCard
                title="WPrime Sports Website"
                description="Developed the company website during internship, improving online presence and implementing e-commerce features."
                technologies={["React", "Vite.js", "Tailwind CSS"]}
                link="#"
              />
              <ProjectCard
                title="EmployHub"
                description="Created an interactive platform to help school's guidance department so students can easily search job postings and employers can easily submit them."
                technologies={["React.js", "Vite.js", "Flask", "Python", "SQL"]}
                link="#"
              />
              <ProjectCard
                title="Silver Tech"
                description="Developed a website for a non-profit organization dedicated to helping elderly individuals navigate technology with confidence."
                technologies={["React.js", "Next.js", "TypeScript", "Tailwind CSS"]}
                link="#"
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
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="py-20 bg-gray-800"
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
      </main>
    </>
  )
}

export default Home