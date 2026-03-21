import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 sm:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#09090b]">
        <div className="absolute inset-0 bg-gradient-spotlight opacity-50" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        
        {/* Gradient Orb */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{
            background: 'radial-gradient(ellipse, rgba(99, 102, 241, 0.2) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
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
              <span className="text-sm font-semibold text-white/90">Get In Touch</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              Let's Work{' '}
              <span className="text-gradient-animated">Together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-white/50 max-w-2xl mx-auto"
            >
              I am open to job opportunities, freelance work, and collaborations.
            </motion.p>
          </div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-strong rounded-2xl p-8 sm:p-12"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              {/* Email */}
              <motion.a
                href="mailto:abdulpaito2129@gmail.com"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-xl p-6 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-white/50 text-sm">Drop me a line</p>
                  </div>
                </div>
                <p className="text-white/70 group-hover:text-white transition-colors">
                  abdulpaito2129@gmail.com
                </p>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/paito-abdul"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-xl p-6 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
                    <p className="text-white/50 text-sm">Connect with me</p>
                  </div>
                </div>
                <p className="text-white/70 group-hover:text-white transition-colors truncate">
                  linkedin.com/in/paito-abdul
                </p>
              </motion.a>
            </div>

            {/* Quick Message Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 pt-8 border-t border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-2 text-center">
                Contact Me
              </h3>
              <p className="text-white/50 text-center mb-6 text-sm">
                Direct email: abdulpaito2129@gmail.com
              </p>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl glass bg-transparent text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl glass bg-transparent text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-xl glass bg-transparent text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none"
                />
                <div className="text-center">
                  <Button variant="primary" size="lg" className="group">
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center gap-2 text-white/40">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Available for remote work worldwide</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
