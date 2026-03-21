const Container = ({ 
  children, 
  className = '',
  size = 'default',
  ...props 
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    default: 'max-w-6xl',
    lg: 'max-w-7xl',
    full: 'max-w-none',
  };
  
  return (
    <div 
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
