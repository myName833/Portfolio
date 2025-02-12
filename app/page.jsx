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
  FaReact,
  FaAward,
  FaGraduationCap,
  FaLanguage,
} from "react-icons/fa"
import { SiCplusplus, SiTailwindcss, SiNextdotjs,} from "react-icons/si"
import { MdEmail, MdWork, MdCode } from "react-icons/md"
import BackgroundPaths from "../components/BackgroundPaths"

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="JH Logo" width={40} height={40} className="mr-2" />
          <motion.a href="#" className="text-2xl font-bold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Johnny Hsieh
          </motion.a>
        </div>
        <div className="space-x-4">
          {["About", "Skills", "Education", "Experience", "Projects", "Achievements", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition-colors"
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

const SkillItem = ({ icon, name, level }) => (
  <motion.div
    className="bg-gray-800 rounded-lg p-4 flex items-center space-x-4"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="text-3xl text-blue-400">{icon}</span>
    <div>
      <span className="font-semibold">{name}</span>
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
      <a href={link} target="_blank" className="text-blue-400 hover:underline">
        View Project
      </a>
    </div>
  </motion.div>
)

const Home = () => {
  return (
    <>
    <Head>
    <title>Johnny Hsieh</title>
    </Head>
    <main className="min-h-screen bg-gray-900 text-white">
      <BackgroundPaths />
      <Navbar />

      <section id="hero" className="h-screen flex items-center justify-center bg-gray-800">
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
            <a href="mailto:Johnnyhsieh02@gmail.com" className="text-3xl hover:text-blue-400 transition-colors">
              <MdEmail />
            </a>
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="py-20 bg-gray-800">
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
      </section>

      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <SkillItem icon={<FaPython />} name="Python" level={60} />
            <SkillItem icon={<SiCplusplus />} name="C++" level={60} />
            <SkillItem icon={<FaHtml5 />} name="HTML" level={100} />
            <SkillItem icon={<FaCss3Alt />} name="CSS" level={95} />
            <SkillItem icon={<FaJs />} name="JavaScript" level={95} />
            <SkillItem icon={<FaReact />} name="React.js" level={90} />
            <SkillItem icon={<SiNextdotjs />} name="Next.js" level={60} />
            <SkillItem icon={<SiTailwindcss />} name="Tailwind CSS" level={90} />
          </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="bg-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Diamond Bar High School</h3>
            <p className="text-blue-400 mb-2">High School Diploma (Expected 2026)</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>President of Hackathon Club</li>
              <li>Web Devoloper at Play Maker</li>
              <li>Web Devoloper at Silver Tech</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20">
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
      </section>

      <section id="projects" className="py-20 bg-gray-800">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold mb-8">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProjectCard
        title="Lockedin"
        description="Winner of Congressional App Challenge 24-25. An app featuring a AI chatbot and grade trend analyzer with bilingual support."
        technologies={["React", "Python", "Llama API", "Data Visualization","MongoDB","Express.js","Node.js"]}
        link="https://github.com/myName833/congressapp24"
        image="lockedin.png"
      />
      <ProjectCard
        title="DB Hackathon Club Website"
        description="Designed and developed the website for the school's Hackathon club, featuring event registration and resource sharing."
        technologies={["React", "Vite.js", "Tailwind CSS"]}
        link="https://dbhackathonclub.onrender.com/"
        image="hackathon.png"
      />
      <ProjectCard
        title="WPrime Sports Website"
        description="Developed the company website during internship, improving online presence and implementing e-commerce features."
        technologies={["React", "Vite.js","Tailwind CSS"]}
        link="#"
      />
      <ProjectCard
        title="EmployHub"
        description="Created an interactive platform to help school’s guidance department so students can easily search job
postings and employers can easily submit them. "
        technologies={["React.js", "Vite.js", "Flask", "Python","SQL"]}
        link="#"
        image=""
      />
    </div>
  </div>
</section>


      <section id="achievements" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div className="bg-gray-700 rounded-lg p-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <h3 className="text-xl font-bold mb-2">Congressional App Challenge Winner 24-25</h3>
              <p className="text-gray-300">
                Led the development of Lockedin, an innovative bilingual app featuring a chatbot and grade trend
                analyzer, recognized at the national level.
              </p>
            </motion.div>
            <motion.div className="bg-gray-700 rounded-lg p-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <h3 className="text-xl font-bold mb-2">Hackathon Organizer</h3>
              <p className="text-gray-300">
                Successfully organized and led the largest hackathon in school history, with over 35 participants and Utilized bilingual skills to engage a diverse group of
                participants.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <p className="text-xl mb-8">
            Feel free to reach out for collaborations or just a friendly hello. I'm fluent in both English and Chinese!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:Johnnyhsieh02@gmail.com"
              className="text-2xl hover:text-blue-400 transition-colors flex items-center"
            >
              <MdEmail className="mr-2" /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/johnny-hsieh-97aa5b329/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400 transition-colors flex items-center"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a
              href="https://github.com/myName833"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400 transition-colors flex items-center"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
          </div>
        </div>
      </section>

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

