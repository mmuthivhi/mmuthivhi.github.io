import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { personal, experience, projects, education, publications, news, wip } from "./data";
import { ChevronRight, ExternalLink, ArrowRight, Github, Mail, MapPin, Phone, Moon, Sun, Linkedin, GraduationCap, IdCard, Smile } from "lucide-react";
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
          <a href="#work" className="hover:text-black dark:hover:text-white transition-colors">Work</a>
          <a href="#news" className="hover:text-black dark:hover:text-white transition-colors">News</a>
          <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</a>
          <a href="#publications" className="hover:text-black dark:hover:text-white transition-colors">Publications</a>
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
        <motion.div style={{ y, opacity }} className="max-w-5xl z-10 mt-16">
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
            className="text-sm md:text-base tracking-tight text-gray-600 dark:text-gray-400 max-w-sm md:max-w-xl transition-colors duration-300"
          >
            {personal.about}
          </motion.p>
        </motion.div>
      </section>

      {/* Work / Showcase */}
      <Section id="work" className="pt-0">
        {/* Video Slideshow from Theme */}
        <div className="relative w-full h-[400px] md:h-[600px] bg-gray-100 dark:bg-neutral-900 group overflow-hidden flex items-center justify-center transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            {/* Play Button */}
            <div className="relative z-10 w-20 h-20 rounded-full border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-colors">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
            </div>
            
            {/* Controls */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="w-2/3 md:w-1/2">
                    <h3 className="text-white text-3xl font-extrabold tracking-tight mb-2 uppercase">Herd Detection</h3>
                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-[2px] bg-white/30">
                            <div className="h-full w-1/3 bg-white"></div>
                        </div>
                        <div className="text-[10px] font-mono text-white">01 / 06</div>
                    </div>
                </div>
                <div className="hidden md:flex gap-2">
                    <div className="w-6 h-1 bg-white"></div>
                    <div className="w-6 h-1 bg-white/30"></div>
                    <div className="w-6 h-1 bg-white/30"></div>
                </div>
            </div>
            
            <div className="absolute top-0 right-0 p-8 flex gap-2">
                <div className="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest">Video Preview</div>
                <div className="px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest">Case Study</div>
            </div>
        </div>

        <div className="mb-16">
          <h2 className="text-[50px] md:text-[80px] leading-[0.85] font-extrabold tracking-tighter mb-4 uppercase">Selected Work</h2>
          <p className="text-sm tracking-tight text-gray-600 dark:text-gray-400 max-w-sm transition-colors duration-300">Exploring out-of-distribution detection, multi-target tracking, and the complexity of linear regions in open environments.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-gray-100 hover:bg-gray-200 dark:bg-neutral-900/50 dark:hover:bg-neutral-900 dark:border-neutral-800 transition-colors p-8 min-h-[320px] flex flex-col justify-between overflow-hidden"
            >
              <div className="flex flex-col h-full justify-between z-10 relative">
                <div>
                  <h3 className="text-2xl font-bold tracking-tighter mb-3 uppercase">{project.title}</h3>
                  <p className="text-sm tracking-tight text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-300">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-4">
                  {project.tags.map(tag => (
                    <div key={tag} className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-1">Domain</span>
                      <span className="text-xs font-semibold dark:text-gray-300">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </Section>

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
