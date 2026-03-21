import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import Container from '../ui/Container';

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

        {/* Certificates Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-strong rounded-2xl p-12 sm:p-16 text-center"
        >
          <div className="w-20 h-20 rounded-full glass mx-auto mb-6 flex items-center justify-center">
            <Award className="w-10 h-10 text-indigo-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Coming Soon</h3>
          <p className="text-white/50 max-w-lg mx-auto mb-8">
            Certificates and training records will be displayed here. Currently completing additional certifications in web development and related technologies.
          </p>
          <a
            href="https://www.linkedin.com/in/paito-abdul"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span>Check LinkedIn for updates</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default Certificates;
