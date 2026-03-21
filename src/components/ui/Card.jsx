import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '',
  hover = true,
  glow = false,
  ...props 
}) => {
  const baseStyles = 'glass rounded-3xl p-8';
  const hoverStyles = hover ? 'transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 hover:scale-[1.02] hover:-translate-y-1' : '';
  const glowStyles = glow ? 'glow-indigo' : '';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${baseStyles} ${hoverStyles} ${glowStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
