import { motion } from 'framer-motion';
import { Award, ExternalLink, FileText } from 'lucide-react';
import Container from '../ui/Container';

const certificates = [
  {
    title: 'AI & Web Development',
    description: 'Certificate in AI-powered development and modern web technologies',
    image: '/Certificate Ai.png',
    date: '2025',
    icon: FileText,
    color: 'from-blue-500 to-cyan-500',
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="relative py-32 sm:py-40 overflow-hidden">
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
            <span className="text-sm font-semibold text-white/90">Continuous Learning</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Certificates &{' '}
            <span className="text-gradient-animated">Trainings</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Web Development Certificates, Training, and Online Courses
          </motion.p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-strong rounded-2xl overflow-hidden group"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-20`} />
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center`}>
                    <cert.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                    <span className="text-sm text-white/50">{cert.date}</span>
                  </div>
                </div>
                <p className="text-white/60 text-sm">{cert.description}</p>
              </div>
            </motion.div>
          ))}

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-strong rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[300px]"
          >
            <div className="w-16 h-16 rounded-full glass mb-4 flex items-center justify-center">
              <Award className="w-8 h-8 text-indigo-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">More Coming Soon</h3>
            <p className="text-white/50 text-sm max-w-xs">
              Additional certifications in progress. Check back for updates.
            </p>
          </motion.div>
        </div>

        {/* LinkedIn Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.linkedin.com/in/paito-abdul"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span>View more on LinkedIn</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default Certificates;
