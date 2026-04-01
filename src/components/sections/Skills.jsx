import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain, Wrench, ExternalLink } from 'lucide-react';
import Container from '../ui/Container';

const skillCategories = [
  {
    title: 'Fullstack Development',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'PHP', 'Java'],
  },
  {
    title: 'Database & Backend',
    icon: Database,
    color: 'from-emerald-500 to-teal-500',
    skills: ['MongoDB Atlas', 'MySQL', 'Node.js', 'REST APIs'],
  },
  {
    title: 'Tools & Deployment',
    icon: Cloud,
    color: 'from-violet-500 to-purple-500',
    skills: ['Netlify', 'Vercel', 'Render', 'Git', 'GitHub', 'Cloudinary', 'API Integration'],
  },
  {
    title: 'VA & Data Skills',
    icon: Brain,
    color: 'from-amber-500 to-orange-500',
    skills: ['Cold Email Outreach', 'Lead Generation', 'Data Entry', 'Data Cleaning', 'AI Prompting'],
  },
  {
    title: 'Productivity Tools',
    icon: Wrench,
    color: 'from-rose-500 to-pink-500',
    skills: ['Microsoft Excel', 'Microsoft Word', 'Google Sheets', 'Google Drive'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 sm:py-40 overflow-hidden">
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
            <span className="text-sm font-semibold text-white/90">My Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Technical{' '}
            <span className="text-gradient-animated">Skills</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            A comprehensive set of skills I've developed through academic projects and hands-on experience.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-strong rounded-2xl p-6 sm:p-8 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + skillIndex * 0.05 }}
                    className="px-3 py-1.5 rounded-full glass text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.linkedin.com/in/paito-abdul"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
          >
            <span className="text-lg">View more on LinkedIn</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;
