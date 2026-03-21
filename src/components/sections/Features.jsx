import { motion, useMotionValue, useTransform } from 'framer-motion';
import { BookOpen, Users, Target, Zap, Shield, Award } from 'lucide-react';
import Container from '../ui/Container';

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Resources',
    description: 'Access a vast library of nursing study materials, practice exams, and clinical guidelines curated by experienced healthcare professionals.',
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    size: 'large',
  },
  {
    icon: Users,
    title: 'Collaborative Community',
    description: 'Connect with fellow nursing students and join study groups.',
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    size: 'small',
  },
  {
    icon: Target,
    title: 'Progress Tracking',
    description: 'Monitor your learning journey with detailed analytics.',
    gradient: 'from-indigo-500 via-purple-500 to-blue-500',
    size: 'small',
  },
  {
    icon: Zap,
    title: 'Smart Study Tools',
    description: 'AI-powered flashcards and personalized study plans.',
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    size: 'small',
  },
  {
    icon: Shield,
    title: 'Exam Preparation',
    description: 'Comprehensive NCLEX prep with practice tests and detailed explanations.',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    size: 'large',
  },
];

const FeatureCard = ({ feature, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isLarge = feature.size === 'large';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isLarge ? rotateX : 0,
        rotateY: isLarge ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className={`group relative overflow-hidden rounded-3xl glass-card cursor-pointer ${
        isLarge ? 'md:col-span-2 md:row-span-2 p-8 sm:p-10' : 'p-6 sm:p-8'
      }`}
    >
      {/* Animated Gradient Border */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl`} />
      
      {/* Shine Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)',
        }}
      />

      <div className="relative z-10 h-full flex flex-col">
        {/* Icon Container */}
        <motion.div 
          className={`rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          style={{
            width: isLarge ? '72px' : '56px',
            height: isLarge ? '72px' : '56px',
          }}
        >
          <feature.icon className={`text-white ${isLarge ? 'w-9 h-9' : 'w-7 h-7'}`} />
        </motion.div>

        {/* Content */}
        <h3 className={`font-bold text-white mb-3 group-hover:text-gradient transition-all duration-500 ${
          isLarge ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
        }`}>
          {feature.title}
        </h3>
        <p className={`text-white/60 leading-relaxed ${isLarge ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`}>
          {feature.description}
        </p>

        {/* Learn More Link for Large Cards */}
        {isLarge && (
          <motion.div 
            className="mt-auto pt-6 flex items-center gap-2 text-sm font-medium"
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1, x: 5 }}
          >
            <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
              Explore feature
            </span>
            <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[#09090b]">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[100px]" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 grid-pattern-dense opacity-30" />
        
        {/* Noise */}
        <div className="absolute inset-0 noise pointer-events-none" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-8"
          >
            <Zap className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-semibold text-white/90 tracking-wide">Powerful Features</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-8 tracking-tight">
            Everything You Need to{' '}
            <span className="text-gradient-animated">Excel</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
            Our platform combines cutting-edge technology with expert-curated content 
            to deliver an unparalleled nursing education experience.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
