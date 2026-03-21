import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Sparkles, Target } from 'lucide-react';
import Container from '../ui/Container';

const highlights = [
  { icon: Code2, text: 'Fullstack Development', color: 'from-blue-500 to-cyan-500' },
  { icon: Database, text: 'Database Management', color: 'from-emerald-500 to-teal-500' },
  { icon: Layout, text: 'Modern UI/UX Design', color: 'from-violet-500 to-purple-500' },
  { icon: Server, text: 'Backend Systems', color: 'from-amber-500 to-orange-500' },
];

const About = () => {
  return (
    <section id="about" className="relative py-32 sm:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#09090b]">
        <div className="absolute inset-0 bg-gradient-spotlight opacity-50" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
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
              <span className="text-sm font-semibold text-white/90">About Me</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight"
            >
              Abdul David{' '}
              <span className="text-gradient-animated">Paito</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/60 leading-relaxed mb-6"
            >
              I am a graduate of Bachelor of Science in Information Systems (BSIS) with hands-on experience in developing fullstack applications. I have built real-world systems including a deployed Nursing Student Portal with both admin and student functionalities.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-white/50 leading-relaxed mb-6"
            >
              I focus on building clean, responsive, and functional systems that solve real problems. I combine technical development with practical thinking to deliver useful applications.
            </motion.p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-2xl glass-card cursor-pointer group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/80 font-medium group-hover:text-white transition-colors">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative max-w-lg mx-auto lg:mx-0">
              {/* Main Card */}
              <div className="glass-strong rounded-[2rem] p-8 sm:p-12 relative overflow-hidden">
                <motion.div
                  className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 blur-3xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-3xl"
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-8">
                    <motion.div 
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/30"
                      whileHover={{ scale: 1.05, rotate: 3 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Target className="w-10 h-10 text-white" />
                    </motion.div>
                    <div>
                      <div className="text-2xl font-bold text-white mb-1">BSIS Graduate</div>
                      <div className="text-white/50 text-lg">Fullstack Developer</div>
                    </div>
                  </div>
                  
                  {/* Experience Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Years Coding', value: '3+', icon: Sparkles },
                      { label: 'Projects Built', value: '5+', icon: Code2 },
                      { label: 'Deployed Apps', value: '2', icon: Server },
                      { label: 'Technologies', value: '10+', icon: Database },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className="glass rounded-2xl p-4 sm:p-5 text-center group cursor-pointer"
                      >
                        <stat.icon className="w-5 h-5 text-white/40 mx-auto mb-2 group-hover:text-indigo-400 transition-colors" />
                        <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                        <div className="text-sm text-white/40">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
