import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Code2, ArrowUpRight, Check } from 'lucide-react';
import Container from '../ui/Container';

const projects = [
  {
    title: 'Student Grade Portal',
    description: 'A fullstack web application with admin and student portals for managing grades, subjects, and academic records. Features secure authentication, grade management, and real-time updates.',
    highlights: [
      'Admin & student roles',
      'Grade management system',
      'Fullstack architecture',
      'Secure authentication'
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Vercel', 'Render'],
    link: 'https://exact-gradeportal.vercel.app/',
    github: 'https://github.com/AbdulPaito',
    icon: Layers,
    color: 'from-violet-500 to-purple-500',
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
  },
  {
    title: 'Nursing Student Portal',
    description: 'A fullstack web application with admin and student portals. Includes features such as announcements, subject management, events, and file uploads (PDF & music) via Cloudinary. Fully deployed and functional.',
    highlights: [
      'Real-world use',
      'Admin & student roles',
      'Cloudinary file uploads',
      'File upload system'
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Cloudinary'],
    link: 'https://cahseventsdocs.netlify.app/',
    github: 'https://github.com/AbdulPaito',
    icon: Layers,
    color: 'from-blue-500 to-cyan-500',
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
  },
  {
    title: 'Academic System Project',
    description: 'A system developed during my academic years focused on database integration and user-based functionality.',
    highlights: [
      'Database integration',
      'User authentication',
      'CRUD operations',
      'Academic workflow'
    ],
    techStack: ['PHP', 'MySQL'],
    link: null,
    github: 'https://github.com/AbdulPaito',
    icon: Code2,
    color: 'from-emerald-500 to-teal-500',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 sm:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#09090b]">
        <div className="absolute inset-0 bg-gradient-spotlight opacity-50" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
            </span>
            <span className="text-sm font-semibold text-white/90">Featured Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            My{' '}
            <span className="text-gradient-animated">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Here are some of the projects I've built during my academic journey and personal development.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              <div className="glass-strong rounded-3xl overflow-hidden hover:glass-card transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10">
                {/* Project Image/Preview Area */}
                <div className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                      backgroundSize: '24px 24px'
                    }} />
                  </div>
                  
                  {/* Project Icon */}
                  <motion.div 
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-2xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <project.icon className="w-12 h-12 text-white" />
                  </motion.div>

                  {/* Live Badge */}
                  {project.link && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                      <span className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient-animated transition-all duration-300">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded-md border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="text-xs text-white/40 px-1 py-1">
                            +{project.techStack.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {project.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-center gap-2 text-sm text-white/50">
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + techIndex * 0.05 }}
                        className="px-3 py-1.5 rounded-full glass text-xs text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 group/btn"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                      </motion.a>
                    )}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl glass hover:bg-white/10 text-white/80 hover:text-white font-medium text-sm transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/AbdulPaito"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass hover:bg-white/10 transition-all group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-5 h-5 text-white/70" />
            <span className="text-white/80 group-hover:text-white transition-colors font-medium">View More on GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white/80 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
