import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { personal, experience, projects, education, publications, news, wip, highlightedPapers, openSourceCode, awards } from "./data";
import { ChevronRight, ExternalLink, ArrowRight, Github, Mail, MapPin, Phone, Moon, Sun, Linkedin, GraduationCap, IdCard, Smile, Image as ImageIcon, Camera } from "lucide-react";
import { cn } from "./lib/utils";

const Section = ({ className, children, id }: { className?: string; children: React.ReactNode; id?: string }) => (
  <section id={id} className={cn("py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto", className)}>
    {children}
  </section>
);

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    // Check initial preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDark = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  return (
    <div className="min-h-screen selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black">
      {/* Navbar Minimal */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-8 flex justify-between items-center bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md transition-colors duration-300">
        <div className="flex items-center gap-6">
          <div className="text-xl font-bold tracking-tighter uppercase dark:text-white">Mufhumudzi Muthivhi.</div>
          <div className="hidden sm:flex items-center gap-4 text-gray-500 dark:text-gray-400">
            <a href={personal.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-black dark:hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
            <a href={personal.links.scholar} target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" className="hover:text-black dark:hover:text-white transition-colors"><GraduationCap className="w-4 h-4" /></a>
            <a href={personal.links.orcid} target="_blank" rel="noopener noreferrer" aria-label="ORCID" className="hover:text-black dark:hover:text-white transition-colors"><IdCard className="w-4 h-4" /></a>
            <a href={personal.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-black dark:hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href={personal.links.huggingface} target="_blank" rel="noopener noreferrer" aria-label="Hugging Face" className="hover:text-black dark:hover:text-white transition-colors"><Smile className="w-4 h-4" /></a>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">
          <a href="#news" className="hover:text-black dark:hover:text-white transition-colors">News</a>
          <a href="#highlighted-papers" className="hover:text-black dark:hover:text-white transition-colors">Highlights</a>
          <a href="#open-source" className="hover:text-black dark:hover:text-white transition-colors">Code</a>
          <a href="#publications" className="hover:text-black dark:hover:text-white transition-colors">Publications</a>
          <a href="#awards" className="hover:text-black dark:hover:text-white transition-colors">Awards</a>
          <a href="#appointments" className="hover:text-black dark:hover:text-white transition-colors">Calendar</a>
          <button onClick={toggleDark} className="p-2 hover:text-black dark:hover:text-white transition-colors" aria-label="Toggle dark mode">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleDark} className="p-2 text-gray-500 hover:text-black dark:hover:text-white transition-colors" aria-label="Toggle dark mode">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden">
        {/* Background Video with CV Overlay */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-white dark:bg-black">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover object-center opacity-30 dark:opacity-40"
            src="https://assets.mixkit.co/videos/preview/mixkit-herd-of-elephants-walking-in-the-savanna-11354-large.mp4" 
          />
          <div className="absolute inset-0 bg-white/60 dark:bg-black/60 z-10 transition-colors duration-300"></div>
          
          {/* Animated Bounding Boxes overlaying the video */}
          <div className="absolute inset-0 z-20 pointer-events-none opacity-50 dark:opacity-70 hidden md:block mix-blend-difference dark:mix-blend-normal">
            {/* Box 1 */}
            <motion.div 
              animate={{ 
                x: ["10vw", "30vw", "40vw", "20vw", "10vw"],
                y: ["20vh", "30vh", "25vh", "40vh", "20vh"],
                width: ["12vw", "14vw", "10vw", "15vw", "12vw"],
                height: ["16vh", "18vh", "14vh", "20vh", "16vh"]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute border border-green-500 bg-green-500/10"
            >
              <div className="absolute -top-5 left-[-1px] bg-green-500 text-black text-[9px] font-mono font-bold px-2 py-0.5 flex items-center gap-2 whitespace-nowrap">
                <span>ELEPHANT</span>
                <span>0.98</span>
              </div>
            </motion.div>

            {/* Box 2 */}
            <motion.div 
              animate={{ 
                x: ["60vw", "75vw", "70vw", "50vw", "60vw"],
                y: ["40vh", "35vh", "50vh", "45vh", "40vh"],
                width: ["8vw", "10vw", "12vw", "9vw", "8vw"],
                height: ["12vh", "15vh", "18vh", "14vh", "12vh"]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute border border-blue-500 bg-blue-500/10"
            >
              <div className="absolute -top-5 left-[-1px] bg-blue-500 text-white text-[9px] font-mono font-bold px-2 py-0.5 flex items-center gap-2 whitespace-nowrap">
                <span>ZEBRA</span>
                <span>0.95</span>
              </div>
            </motion.div>

            {/* Box 3 */}
            <motion.div 
              animate={{ 
                x: ["80vw", "60vw", "50vw", "70vw", "80vw"],
                y: ["55vh", "45vh", "50vh", "60vh", "55vh"],
                width: ["15vw", "12vw", "16vw", "14vw", "15vw"],
                height: ["20vh", "15vh", "22vh", "18vh", "20vh"]
              }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute border border-yellow-500 bg-yellow-500/10 hidden lg:block"
            >
              <div className="absolute -top-5 left-[-1px] bg-yellow-500 text-black text-[9px] font-mono font-bold px-2 py-0.5 flex items-center gap-2 whitespace-nowrap">
                <span>ZEBRA</span>
                <span>0.89</span>
              </div>
            </motion.div>

            {/* Box 4 */}
            <motion.div 
              animate={{ 
                x: ["20vw", "45vw", "65vw", "40vw", "20vw"],
                y: ["65vh", "55vh", "60vh", "70vh", "65vh"],
                width: ["10vw", "14vw", "12vw", "15vw", "10vw"],
                height: ["14vh", "18vh", "16vh", "22vh", "14vh"]
              }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute border border-purple-500 bg-purple-500/10"
            >
              <div className="absolute -top-5 left-[-1px] bg-purple-500 text-white text-[9px] font-mono font-bold px-2 py-0.5 flex items-center gap-2 whitespace-nowrap">
                <span>ELEPHANT</span>
                <span>0.92</span>
              </div>
            </motion.div>

            {/* Box 5 */}
            <motion.div 
              animate={{ 
                x: ["40vw", "25vw", "35vw", "55vw", "40vw"],
                y: ["35vh", "50vh", "40vh", "30vh", "35vh"],
                width: ["7vw", "9vw", "8vw", "10vw", "7vw"],
                height: ["10vh", "12vh", "11vh", "14vh", "10vh"]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute border border-cyan-500 bg-cyan-500/10"
            >
              <div className="absolute -top-5 left-[-1px] bg-cyan-500 text-black text-[9px] font-mono font-bold px-2 py-0.5 flex items-center gap-2 whitespace-nowrap">
                <span>WILDEBEEST</span>
                <span>0.78</span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div style={{ y, opacity }} className="max-w-5xl z-30 mt-16 pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[60px] md:text-[110px] leading-[0.85] font-extrabold tracking-tighter mb-6 uppercase"
          >
            self-improving vision models.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-base tracking-tight text-gray-700 dark:text-gray-300 max-w-sm md:max-w-xl transition-colors duration-300 drop-shadow-sm font-medium"
          >
            {personal.about}
          </motion.p>
        </motion.div>
      </section>

      {/* News */}
      <Section id="news" className="overflow-hidden">
        <div className="flex justify-between items-end mb-12">
           <div>
              <h2 className="text-[50px] md:text-[80px] leading-[0.85] font-extrabold tracking-tighter uppercase">Latest News.</h2>
           </div>
        </div>
        
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 md:-mx-12 md:px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {news.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="snap-start shrink-0 w-[85vw] md:w-[420px] bg-gray-50 hover:bg-gray-100 dark:bg-neutral-900/50 dark:hover:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-8 md:p-10 flex flex-col justify-between group transition-colors duration-300 min-h-[320px] cursor-grab active:cursor-grabbing"
            >
              <div>
                <div className="flex justify-between items-center mb-8 border-b border-gray-200 dark:border-neutral-800 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">{item.date}</span>
                  <span className="text-[10px] font-mono text-gray-400 dark:text-gray-600 font-medium">0{i + 1}</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tighter mb-4 group-hover:text-black dark:group-hover:text-white text-gray-900 dark:text-gray-300 transition-colors uppercase leading-[1.1]">
                  {item.title}
                </h3>
              </div>
              <div className="mt-8 flex flex-col gap-4">
                <p className="text-sm tracking-tight text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  {item.description}
                </p>
                <div className="w-8 h-1 bg-black/10 dark:bg-white/10 group-hover:bg-black dark:group-hover:bg-white transition-colors duration-300 mt-2"></div>
              </div>
            </motion.div>
          ))}
          
          {/* Spacer so the last item isn't flush against the right screen edge */}
          <div className="shrink-0 w-1 md:w-4"></div>
        </div>
      </Section>

      {/* Appointments / Office Hours */}
      <Section id="appointments" className="bg-gray-100 dark:bg-neutral-900/50 rounded-[3rem] my-12 mx-4 md:mx-auto max-w-[calc(100%-2rem)] md:max-w-7xl py-16 md:py-24 transition-colors duration-300">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 px-4 md:px-12">
          <div>
            <h2 className="text-[40px] md:text-[60px] leading-[0.85] font-extrabold tracking-tighter mb-6 uppercase">Office Hours.</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md tracking-tight text-sm md:text-base transition-colors duration-300">Schedule a meeting with me.</p>
          </div>
          <a href={personal.links.calendar} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-4 bg-black dark:bg-white text-white dark:text-black transition-colors duration-300 px-8 py-6 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 shrink-0 whitespace-nowrap">
            <span className="font-bold uppercase tracking-widest text-sm">Book on Calendar</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </Section>

      {/* Highlighted Papers */}
      <Section id="highlighted-papers" className="overflow-hidden">
        <div className="flex justify-between items-end mb-12">
           <div>
              <h2 className="text-[50px] md:text-[80px] leading-[0.85] font-extrabold tracking-tighter uppercase">Highlighted Papers.</h2>
           </div>
        </div>
        
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 md:-mx-12 md:px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {highlightedPapers.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="snap-start shrink-0 w-[85vw] md:w-[450px] bg-gray-50 hover:bg-gray-100 dark:bg-neutral-900/50 dark:hover:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-8 md:p-10 flex flex-col justify-between group transition-colors duration-300 min-h-[360px] cursor-grab active:cursor-grabbing"
            >
              <div>
                <div className="flex justify-between items-center mb-8 border-b border-gray-200 dark:border-neutral-800 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">{item.date}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold tracking-tighter mb-4 group-hover:text-black dark:group-hover:text-white text-gray-900 dark:text-gray-300 transition-colors uppercase leading-[1.1]">
                  {item.title}
                </h3>
              </div>
              <div className="mt-8 flex flex-col gap-4">
                <p className="text-sm tracking-tight text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  {item.description}
                </p>
                <a href={item.link} className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-gray-900 dark:text-gray-300 mt-2 hover:opacity-70 transition-opacity">
                  Read Paper <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
          
          <div className="shrink-0 w-1 md:w-4"></div>
        </div>
      </Section>

      {/* Awards */}
      <Section id="awards">
        <h2 className="text-[50px] md:text-[80px] leading-[0.85] font-extrabold tracking-tighter mb-16 uppercase">Awards</h2>
        <div className="flex flex-col border-t border-gray-200 dark:border-neutral-800 transition-colors duration-300">
          {awards.map((award, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="py-8 border-b border-gray-200 dark:border-neutral-800 transition-colors flex flex-col md:flex-row gap-4 md:gap-12 md:items-baseline group"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-500 md:w-24 shrink-0">{award.date}</div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-black dark:group-hover:text-white text-gray-900 dark:text-gray-300 transition-colors tracking-tight">
                  {award.title}
                </h3>
                <p className="text-sm tracking-tight text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">{award.description}</p>
                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 transition-colors duration-300 text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {award.organization}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Open Source Code */}
      <Section id="open-source" className="overflow-hidden">
        <div className="flex justify-between items-end mb-12">
           <div>
              <h2 className="text-[50px] md:text-[80px] leading-[0.85] font-extrabold tracking-tighter uppercase whitespace-normal break-words">Open Source Code.</h2>
           </div>
        </div>
        
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 md:-mx-12 md:px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {openSourceCode.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="snap-start shrink-0 w-[85vw] md:w-[450px] bg-white hover:bg-gray-50 dark:bg-neutral-950 dark:hover:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-8 md:p-10 flex flex-col justify-between group transition-colors duration-300 min-h-[360px] cursor-grab active:cursor-grabbing rounded-xl"
            >
              <div>
                <div className="flex justify-between items-center mb-8 pb-4">
                   <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-neutral-900/80 flex items-center justify-center text-gray-900 dark:text-gray-100 group-hover:scale-110 transition-transform">
                      <Github className="w-6 h-6" />
                   </div>
                  <div className="flex items-center gap-1 text-gray-500 font-bold">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path></svg>
                    <span className="text-sm">{item.stars}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold tracking-tighter mb-4 group-hover:text-black dark:group-hover:text-white text-gray-900 dark:text-gray-300 transition-colors uppercase leading-[1.1]">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-neutral-900 text-gray-600 dark:text-gray-400 text-[10px] font-bold uppercase tracking-widest rounded-full">
                       {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-4 border-t border-gray-100 dark:border-neutral-800 pt-6">
                <p className="text-sm tracking-tight text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  {item.description}
                </p>
                <a href={item.link} className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-gray-900 dark:text-gray-300 mt-2 hover:opacity-70 transition-opacity">
                  View Repository <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
          
          <div className="shrink-0 w-1 md:w-4"></div>
        </div>
      </Section>

      {/* Work In Progress / Collaborations */}
      <Section id="wip">
        <h2 className="text-[50px] md:text-[80px] leading-[0.85] font-extrabold tracking-tighter mb-16 uppercase">In Progress</h2>
        <div className="flex flex-col border-t border-gray-200 dark:border-neutral-800 transition-colors duration-300">
          {wip.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="py-8 border-b border-gray-200 dark:border-neutral-800 transition-colors flex flex-col md:flex-row gap-4 md:gap-12 md:items-baseline group"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-500 md:w-24 shrink-0">WIP</div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-black dark:group-hover:text-white text-gray-900 dark:text-gray-300 transition-colors tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm tracking-tight text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-600 mr-3">With</span>
                  {item.collaborators.join(', ')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience & Education */}
      <Section id="experience">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-[50px] md:text-[80px] leading-[0.85] font-extrabold tracking-tighter mb-12 uppercase">Experience</h2>
            <div className="space-y-12">
              {experience.map((exp, i) => (
                <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-gray-200 dark:before:bg-neutral-800 transition-colors duration-300">
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-black dark:bg-white transition-colors duration-300" />
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-500 block mb-2">{exp.period}</span>
                  <h3 className="text-xl font-bold tracking-tight">{exp.role}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 transition-colors duration-300">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.details.map((detail, j) => (
                      <li key={j} className="text-sm text-gray-600 dark:text-gray-400 tracking-tight flex items-start gap-2 transition-colors duration-300">
                        <span className="text-gray-400 dark:text-gray-600 mt-1">-</span>
                        <span className="flex-1">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-[50px] md:text-[80px] leading-[0.85] font-extrabold tracking-tighter mb-12 uppercase">Education</h2>
            <div className="space-y-12">
              {education.map((edu, i) => (
                <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-gray-200 dark:before:bg-neutral-800 transition-colors duration-300">
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-black dark:bg-white transition-colors duration-300" />
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-500 block mb-2">{edu.period}</span>
                  <h3 className="text-xl font-bold tracking-tight">{edu.degree}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 transition-colors duration-300">{edu.institution}</p>
                  <ul className="space-y-2">
                    {edu.details.map((detail, j) => (
                      <li key={j} className="text-sm text-gray-600 dark:text-gray-400 tracking-tight flex items-start gap-2 transition-colors duration-300">
                        <span className="text-gray-400 dark:text-gray-600 mt-1">-</span>
                        <span className="flex-1">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Publications */}
      <Section id="publications">
        <h2 className="text-[50px] md:text-[80px] leading-[0.85] font-extrabold tracking-tighter mb-16 uppercase">Publications</h2>
        <div className="flex flex-col border-t border-gray-200 dark:border-neutral-800 transition-colors duration-300">
          {publications.map((pub, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="py-8 border-b border-gray-200 dark:border-neutral-800 transition-colors flex flex-col md:flex-row gap-4 md:gap-12 md:items-baseline group"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-500 md:w-24 shrink-0">{pub.year}</div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-black dark:group-hover:text-white text-gray-900 dark:text-gray-300 transition-colors tracking-tight">
                  {pub.title}
                </h3>
                <p className="text-sm tracking-tight text-gray-600 dark:text-gray-400 mb-2 transition-colors duration-300">{pub.authors}</p>
                <span className="inline-block px-3 py-1 bg-black text-white dark:bg-white dark:text-black transition-colors duration-300 text-[10px] font-bold uppercase tracking-widest">
                  {pub.conference}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Live Demos */}
      <Section id="demos">
        <h2 className="text-[50px] md:text-[80px] leading-[0.85] font-extrabold tracking-tighter mb-16 uppercase">Live Preview.</h2>
        
        <div className="bg-gray-100 dark:bg-neutral-900 rounded-[2rem] p-6 md:p-12 overflow-hidden transition-colors duration-300">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8 border-b border-gray-200 dark:border-neutral-800 pb-6">
            <h3 className="text-2xl font-bold tracking-tight uppercase">Big5 OOD Classification</h3>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-bold uppercase tracking-widest rounded-full">Hugging Face</span>
              <span className="inline-block px-3 py-1 border border-gray-300 dark:border-neutral-700 text-[10px] font-bold uppercase tracking-widest rounded-full">Gradio Space</span>
            </div>
          </div>
          
          <div className="w-full bg-white dark:bg-neutral-950 rounded-xl overflow-hidden border border-gray-200 dark:border-neutral-800 h-[600px] md:h-[800px]">
            <iframe
              src="https://pxpana-big5-ood.hf.space"
              frameBorder="0"
              className="w-full h-full"
              title="Big5 OOD Hugging Face Space"
              allow="accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"
            ></iframe>
          </div>
        </div>
      </Section>

      {/* Footer / Contact */}
      <footer className="py-24 px-6 md:px-12 border-t border-gray-200 dark:border-neutral-800 mt-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <h2 className="text-[60px] md:text-[110px] leading-[0.85] font-extrabold tracking-tighter mb-8 max-w-2xl uppercase">Land of<br />make believe.</h2>
            <div className="flex flex-col gap-3 text-gray-500 dark:text-gray-500 font-medium tracking-tight transition-colors duration-300">
              <a href={`mailto:${personal.contact.email}`} className="flex items-center gap-3 hover:text-black dark:hover:text-white transition-colors">
                <Mail className="w-5 h-5" /> {personal.contact.email}
              </a>
              {personal.contact.phone && (
                <a href={`tel:${personal.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 hover:text-black dark:hover:text-white transition-colors">
                  <Phone className="w-5 h-5" /> {personal.contact.phone}
                </a>
              )}
              <span className="flex items-center gap-3">
                <MapPin className="w-5 h-5" /> {personal.contact.location}
              </span>
            </div>
          </div>
          
          <div className="flex gap-6">
            <a href={personal.links.github} className="p-4 bg-gray-100 dark:bg-neutral-900 rounded hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors text-black dark:text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href={personal.links.website} className="p-4 bg-gray-100 dark:bg-neutral-900 rounded hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors text-black dark:text-white">
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
