(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{3640:(e,s,t)=>{Promise.resolve().then(t.bind(t,4956))},4956:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>j});var a=t(5155),i=t(5565),n=t(8209),l=t(6793),r=t.n(l),o=t(1536),c=t(9967),d=t(648),h=t(2115);let x=()=>{let e=(0,h.useRef)(null);return(0,h.useEffect)(()=>{let s;let t=e.current,a=t.getContext("2d"),i=()=>{t.width=window.innerWidth,t.height=window.innerHeight};window.addEventListener("resize",i),i();let n=[];for(let e=0;e<100;e++)n.push({x:Math.random()*t.width,y:Math.random()*t.height,radius:2*Math.random()+1,dx:(Math.random()-.5)*.5,dy:(Math.random()-.5)*.5});let l=()=>{a.clearRect(0,0,t.width,t.height),a.fillStyle="rgba(200, 200, 255, 0.5)",a.strokeStyle="rgba(200, 200, 255, 0.5)",n.forEach((e,s)=>{e.x+=e.dx,e.y+=e.dy,(e.x<0||e.x>t.width)&&(e.dx*=-1),(e.y<0||e.y>t.height)&&(e.dy*=-1),a.beginPath(),a.arc(e.x,e.y,e.radius,0,2*Math.PI),a.fill();for(let t=s+1;t<n.length;t++){let s=n[t].x-e.x,i=n[t].y-e.y;100>Math.sqrt(s*s+i*i)&&(a.beginPath(),a.moveTo(e.x,e.y),a.lineTo(n[t].x,n[t].y),a.stroke())}}),s=requestAnimationFrame(l)};return l(),()=>{window.removeEventListener("resize",i),cancelAnimationFrame(s)}},[]),(0,a.jsx)("canvas",{ref:e,className:"fixed top-0 left-0 w-full h-full -z-10 opacity-20"})},m=()=>(0,a.jsx)(n.P.nav,{className:"fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-sm",initial:{y:-100},animate:{y:0},transition:{duration:.5},children:(0,a.jsxs)("div",{className:"container mx-auto px-6 py-4 flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(i.default,{src:"/logo.svg",alt:"JH Logo",width:40,height:40,className:"mr-2"}),(0,a.jsx)(n.P.a,{href:"#",className:"text-2xl font-bold",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Johnny Hsieh"})]}),(0,a.jsx)("div",{className:"space-x-4",children:["About","Skills","Education","Experience","Projects","Achievements","Contact"].map(e=>(0,a.jsx)(n.P.a,{href:"#".concat(e.toLowerCase()),className:"hover:text-blue-400 transition-colors",whileHover:{scale:1.1},whileTap:{scale:.95},children:e},e))})]})}),p=e=>{let{icon:s,name:t,level:i}=e;return(0,a.jsxs)(n.P.div,{className:"bg-gray-800 rounded-lg p-4 flex items-center space-x-4",whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,a.jsx)("span",{className:"text-3xl text-blue-400",children:s}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"font-semibold",children:t}),(0,a.jsx)("div",{className:"w-full bg-gray-700 rounded-full h-2.5 mt-2",children:(0,a.jsx)("div",{className:"bg-blue-600 h-2.5 rounded-full",style:{width:"".concat(i,"%")}})})]})]})},g=e=>{let{title:s,company:t,position:i,date:l,description:r}=e;return(0,a.jsxs)(n.P.div,{className:"bg-gray-700 rounded-lg p-6",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-2",children:s}),(0,a.jsxs)("p",{className:"text-blue-400 mb-2",children:[t," - ",i]}),(0,a.jsx)("p",{className:"text-gray-400 mb-4",children:l}),(0,a.jsx)("ul",{className:"list-disc list-inside text-gray-300",children:r.map((e,s)=>(0,a.jsx)("li",{children:e},s))})]})},u=e=>{let{title:s,description:t,technologies:i,link:l}=e;return(0,a.jsx)(n.P.div,{className:"bg-gray-800 rounded-lg overflow-hidden",whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,a.jsxs)("div",{className:"p-6",children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-2",children:s}),(0,a.jsx)("p",{className:"text-gray-300 mb-4",children:t}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2 mb-4",children:i.map((e,s)=>(0,a.jsx)("span",{className:"bg-blue-600 text-white text-xs px-2 py-1 rounded",children:e},s))}),(0,a.jsx)("a",{href:l,target:"_blank",className:"text-blue-400 hover:underline",children:"View Project"})]})})},j=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r(),{children:(0,a.jsx)("title",{children:"Johnny Hsieh"})}),(0,a.jsxs)("main",{className:"min-h-screen bg-gray-900 text-white",children:[(0,a.jsx)(x,{}),(0,a.jsx)(m,{}),(0,a.jsx)("section",{id:"hero",className:"h-screen flex items-center justify-center bg-gray-800",children:(0,a.jsxs)(n.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-center",children:[(0,a.jsx)(i.default,{src:"johnny.jpg",alt:"Johnny Hsieh",width:200,height:200,className:"rounded-full mx-auto mb-8"}),(0,a.jsx)("h1",{className:"text-5xl font-bold mb-4",children:"Johnny Hsieh"}),(0,a.jsx)("p",{className:"text-xl text-gray-300 mb-8",children:"High School Student | Programmer | Web Developer | Bilingual (Chinese/English)"}),(0,a.jsxs)(n.P.div,{className:"flex justify-center space-x-4",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},children:[(0,a.jsx)("a",{href:"https://github.com/myName833",target:"_blank",rel:"noopener noreferrer",className:"text-3xl hover:text-blue-400 transition-colors",children:(0,a.jsx)(o.hL4,{})}),(0,a.jsx)("a",{href:"https://www.linkedin.com/in/johnny-hsieh-97aa5b329/",target:"_blank",rel:"noopener noreferrer",className:"text-3xl hover:text-blue-400 transition-colors",children:(0,a.jsx)(o.QEs,{})}),(0,a.jsx)("a",{href:"mailto:Johnnyhsieh02@gmail.com",className:"text-3xl hover:text-blue-400 transition-colors",children:(0,a.jsx)(d.mm2,{})})]})]})}),(0,a.jsx)("section",{id:"about",className:"py-20 bg-gray-800",children:(0,a.jsxs)("div",{className:"container mx-auto px-6",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-8",children:"About Me"}),(0,a.jsx)("p",{className:"text-lg text-gray-300 leading-relaxed",children:"I am a motivated high school student passionate about programming and web development, with hands-on experience in building websites and a strong foundation in frontend development, Python, and C++. I aim to further develop my skills and contribute to innovative projects. As the winner of the Congressional App Challenge 24-25, I led the creation of Lockedin, an app featuring a chatbot and grade trend analyzer, showcasing my ability to develop practical and impactful solutions. Being bilingual in Chinese and English, I bring a multicultural perspective to my work and can effectively communicate with diverse teams."}),(0,a.jsxs)("div",{className:"mt-8 flex flex-wrap gap-4",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(o.Z0L,{className:"text-blue-400 mr-2"}),(0,a.jsx)("span",{children:"Congressional App Challenge Winner"})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(d.r72,{className:"text-blue-400 mr-2"}),(0,a.jsx)("span",{children:"Web Development Intern"})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(d.luQ,{className:"text-blue-400 mr-2"}),(0,a.jsx)("span",{children:"Web Developer"})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(o.YNd,{className:"text-blue-400 mr-2"}),(0,a.jsx)("span",{children:"High School Senior"})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(o.gqt,{className:"text-blue-400 mr-2"}),(0,a.jsx)("span",{children:"Bilingual (Chinese/English)"})]})]})]})}),(0,a.jsx)("section",{id:"skills",className:"py-20",children:(0,a.jsxs)("div",{className:"container mx-auto px-6",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-8",children:"Skills"}),(0,a.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:[(0,a.jsx)(p,{icon:(0,a.jsx)(o.ivP,{}),name:"Python",level:60}),(0,a.jsx)(p,{icon:(0,a.jsx)(c.Qin,{}),name:"C++",level:60}),(0,a.jsx)(p,{icon:(0,a.jsx)(o.Sc0,{}),name:"HTML",level:100}),(0,a.jsx)(p,{icon:(0,a.jsx)(o.hDM,{}),name:"CSS",level:95}),(0,a.jsx)(p,{icon:(0,a.jsx)(o.t3x,{}),name:"JavaScript",level:95}),(0,a.jsx)(p,{icon:(0,a.jsx)(o.rMV,{}),name:"React.js",level:90}),(0,a.jsx)(p,{icon:(0,a.jsx)(c.wlC,{}),name:"Next.js",level:60}),(0,a.jsx)(p,{icon:(0,a.jsx)(c.IR8,{}),name:"Tailwind CSS",level:90})]})]})}),(0,a.jsx)("section",{id:"education",className:"py-20 bg-gray-800",children:(0,a.jsxs)("div",{className:"container mx-auto px-6",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-8",children:"Education"}),(0,a.jsxs)("div",{className:"bg-gray-700 rounded-lg p-6",children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-2",children:"Diamond Bar High School"}),(0,a.jsx)("p",{className:"text-blue-400 mb-2",children:"High School Diploma (Expected 2026)"}),(0,a.jsxs)("ul",{className:"list-disc list-inside text-gray-300",children:[(0,a.jsx)("li",{children:"President of Hackathon Club"}),(0,a.jsx)("li",{children:"Web Devoloper at Play Maker"}),(0,a.jsx)("li",{children:"Web Devoloper at Silver Tech"})]})]})]})}),(0,a.jsx)("section",{id:"experience",className:"py-20",children:(0,a.jsxs)("div",{className:"container mx-auto px-6",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-8",children:"Experience"}),(0,a.jsxs)("div",{className:"space-y-8",children:[(0,a.jsx)(g,{title:"DB Hackathon Club",company:"Diamond Bar High School",position:"President/Founder",date:"July 2024 - May 2026",description:["Organized school's largest Hackathon with over 200 participants","Contributed to the design and development of the club website","Led workshops on various technologies including Python, JavaScript, and React","Utilized bilingual skills to engage with a diverse group of participants and sponsors"]}),(0,a.jsx)(g,{title:"WPrime Sports",company:"WPrime Sports",position:"Web Development Intern",date:"Oct 2024 - Present",description:["Designed and developed the company's responsive website using React and Next.js","Implemented SEO best practices, improving site visibility by 40%","Collaborated with the marketing team to create an intuitive user interface","Led a team of four web engineers during my internship, managing project milestones and ensuring timely delivery","Optimized website performance, reducing load time by 30%","Assisted in creating bilingual content for the website, expanding the company's reach"]}),(0,a.jsx)(g,{title:"A+ Youth Tutors",company:"A+ Youth Tutors",position:"Regional Leader",date:"Jan 2025 - Present",description:["Led a team of 15 tutors, providing guidance and support","Developed a scheduling system that increased tutor efficiency by 25%","Tutored over 50 students in Computer Science and Math","Implemented a feedback system, improving overall student satisfaction by 35%","Conducted bilingual tutoring sessions, catering to both English and Chinese-speaking students"]}),(0,a.jsx)(g,{title:"Sunflower Youth Foundation",company:"Sunflower Youth Foundation",position:"Cultural Exchange Officer",date:"Jun 2024 - Present",description:["Organized cultural exchange events for over 50 international students","Developed and maintained the foundation's website","Created a language exchange program, pairing native speakers with learners","Increased participation in foundation events by 50% through targeted outreach","Facilitated communication between Chinese and English-speaking participants"]})]})]})}),(0,a.jsx)("section",{id:"projects",className:"py-20 bg-gray-800",children:(0,a.jsxs)("div",{className:"container mx-auto px-6",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-8",children:"Projects"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[(0,a.jsx)(u,{title:"Lockedin",description:"Winner of Congressional App Challenge 24-25. An app featuring a AI chatbot and grade trend analyzer with bilingual support.",technologies:["React","Python","Llama API","Data Visualization","MongoDB","Express.js","Node.js"],link:"https://github.com/myName833/congressapp24",image:"lockedin.png"}),(0,a.jsx)(u,{title:"DB Hackathon Club Website",description:"Designed and developed the website for the school's Hackathon club, featuring event registration and resource sharing.",technologies:["React","Vite.js","Tailwind CSS"],link:"https://dbhackathonclub.onrender.com/",image:"hackathon.png"}),(0,a.jsx)(u,{title:"WPrime Sports Website",description:"Developed the company website during internship, improving online presence and implementing e-commerce features.",technologies:["React","Vite.js","Tailwind CSS"],link:"#"}),(0,a.jsx)(u,{title:"EmployHub",description:"Created an interactive platform to help school’s guidance department so students can easily search job   postings and employers can easily submit them. ",technologies:["React.js","Vite.js","Flask","Python","SQL"],link:"#",image:""})]})]})}),(0,a.jsx)("section",{id:"achievements",className:"py-20",children:(0,a.jsxs)("div",{className:"container mx-auto px-6",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-8",children:"Achievements"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[(0,a.jsxs)(n.P.div,{className:"bg-gray-700 rounded-lg p-6",whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-2",children:"Congressional App Challenge Winner 24-25"}),(0,a.jsx)("p",{className:"text-gray-300",children:"Led the development of Lockedin, an innovative bilingual app featuring a chatbot and grade trend analyzer, recognized at the national level."})]}),(0,a.jsxs)(n.P.div,{className:"bg-gray-700 rounded-lg p-6",whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-2",children:"Hackathon Organizer"}),(0,a.jsx)("p",{className:"text-gray-300",children:"Successfully organized and led the largest hackathon in school history, with over 35 participants and Utilized bilingual skills to engage a diverse group of participants."})]})]})]})}),(0,a.jsx)("section",{id:"contact",className:"py-20 bg-gray-800",children:(0,a.jsxs)("div",{className:"container mx-auto px-6 text-center",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-8",children:"Contact Me"}),(0,a.jsx)("p",{className:"text-xl mb-8",children:"Feel free to reach out for collaborations or just a friendly hello. I'm fluent in both English and Chinese!"}),(0,a.jsxs)("div",{className:"flex justify-center space-x-6",children:[(0,a.jsxs)("a",{href:"mailto:Johnnyhsieh02@gmail.com",className:"text-2xl hover:text-blue-400 transition-colors flex items-center",children:[(0,a.jsx)(d.mm2,{className:"mr-2"})," Email"]}),(0,a.jsxs)("a",{href:"https://www.linkedin.com/in/johnny-hsieh-97aa5b329/",target:"_blank",rel:"noopener noreferrer",className:"text-2xl hover:text-blue-400 transition-colors flex items-center",children:[(0,a.jsx)(o.QEs,{className:"mr-2"})," LinkedIn"]}),(0,a.jsxs)("a",{href:"https://github.com/myName833",target:"_blank",rel:"noopener noreferrer",className:"text-2xl hover:text-blue-400 transition-colors flex items-center",children:[(0,a.jsx)(o.hL4,{className:"mr-2"})," GitHub"]})]})]})}),(0,a.jsx)("footer",{className:"bg-gray-900 py-6",children:(0,a.jsx)("div",{className:"container mx-auto px-6 text-center text-gray-400",children:(0,a.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," Johnny Hsieh. All rights reserved."]})})})]})]})}},e=>{var s=s=>e(e.s=s);e.O(0,[362,479,711,319,441,517,358],()=>s(3640)),_N_E=e.O()}]);