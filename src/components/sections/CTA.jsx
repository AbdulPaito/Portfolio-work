import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles, Star, ArrowUpRight } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const CTA = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <section id="contact" ref={containerRef} className="relative py-32 sm:py-40 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[#09090b]">
        {/* Spotlight Effect */}
        <div className="absolute inset-0 bg-gradient-spotlight" />
        
        {/* Animated Orbs */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(139, 92, 246, 0.08) 30%, transparent 70%)',
            filter: 'blur(100px)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Secondary Orbs */}
        <motion.div
          className="absolute top-1/3 right-[10%] w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Noise Texture */}
        <div className="absolute inset-0 noise pointer-events-none" />
      </div>

      <Container className="relative z-10">
        <motion.div
          style={{ scale }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Main CTA Card */}
          <div className="glass-strong rounded-[2.5rem] p-8 sm:p-12 lg:p-20 text-center relative overflow-hidden">
            {/* Animated Gradient Border */}
            <motion.div 
              className="absolute inset-0 rounded-[2.5rem] p-[1px] pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), rgba(139, 92, 246, 0.5), rgba(59, 130, 246, 0.5), transparent)',
                backgroundSize: '400% 100%',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '200% 0%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div className="w-full h-full rounded-[2.5rem] bg-[#09090b]/80" />
            </motion.div>
            
            {/* Top Glow Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
            
            {/* Decorative Corner Elements */}
            <motion.div
              className="absolute top-8 left-8 w-20 h-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute inset-0 border border-white/5 rounded-full" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-500/50 rounded-full" />
            </motion.div>

            <motion.div
              className="absolute bottom-8 right-8 w-16 h-16"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute inset-0 border border-white/5 rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-500/50 rounded-full" />
            </motion.div>
            
            {/* Inner Glow Spots */}
            <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl" />
            
            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-10"
              >
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-sm font-semibold text-white/90">Limited Time Offer</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-8 tracking-tight"
              >
                Ready to Transform Your{' '}
                <span className="text-gradient-animated">Developer Career?</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl text-white/50 mb-12 leading-relaxed max-w-2xl mx-auto"
              >
                Join <span className="text-white/80 font-medium">thousands of developers</span> who are already using our platform 
                to accelerate their learning and achieve their goals.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button 
                  variant="primary" 
                  size="xl" 
                  className="group btn-shine min-w-[240px] text-lg"
                >
                  <span className="flex items-center gap-2">
                    Get Started Free
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Button>
                <Button 
                  variant="secondary" 
                  size="xl" 
                  className="group min-w-[240px] text-lg"
                >
                  <span className="flex items-center gap-2">
                    Schedule Demo
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </motion.div>
              
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12 flex flex-col items-center gap-3"
              >
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="ml-2 text-sm text-white/60">Rated 4.9/5 by 2,400+ students</span>
                </div>
                <p className="text-sm text-white/40">
                  No credit card required • Free 14-day trial • Cancel anytime
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;
