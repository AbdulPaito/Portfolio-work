import { motion } from 'framer-motion';
import { Code, Github, Linkedin, Mail, Heart, ArrowUpRight } from 'lucide-react';
import Container from '../ui/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    Navigation: [
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
    Projects: [
      { label: 'Nursing Portal', href: 'https://nursingwebs.netlify.app/' },
      { label: 'GitHub', href: 'https://github.com/AbdulPaito' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/paito-abdul' },
    ],
    Connect: [
      { label: 'Email Me', href: 'mailto:abdulpaito2129@gmail.com' },
      { label: 'Portfolio', href: '#' },
    ],
  };
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/AbdulPaito', label: 'GitHub', color: 'hover:bg-white/10 hover:text-white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/paito-abdul', label: 'LinkedIn', color: 'hover:bg-blue-500/20 hover:text-blue-400' },
    { icon: Mail, href: 'mailto:abdulpaito2129@gmail.com', label: 'Email', color: 'hover:bg-rose-500/20 hover:text-rose-400' },
  ];

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[#09090b]">
        {/* Gradient Fade from content */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#09090b] to-transparent" />
        
        {/* Subtle Orbs */}
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[80px]" />
      </div>
      
      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent animate-pulse" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-6 group cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow duration-300">
                <Code className="w-7 h-7 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Abdul.dev</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/50 text-base leading-relaxed max-w-sm mb-8"
            >
              Fullstack Developer passionate about building modern, scalable web applications 
              and real-world systems that solve actual problems.
            </motion.p>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-11 h-11 rounded-xl glass flex items-center justify-center text-white/50 transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">{category}</h4>
              <ul className="space-y-4">
                {links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-white/50 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-2xl p-6 sm:p-8 mb-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold text-lg mb-1">Ready to work together?</h4>
              <p className="text-white/50 text-sm">Let's build something amazing.</p>
            </div>
            <a
              href="mailto:abdulpaito2129@gmail.com"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-shadow duration-300"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              &copy; {currentYear} Portfolio. All rights reserved.
            </p>
            <p className="text-white/40 text-sm flex items-center gap-1.5">
              Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> by Abdul
            </p>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;
