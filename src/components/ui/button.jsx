export const Button = ({ children, variant = 'green', size = 'md', className = '', ...props }) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg border-none cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    green: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    outline: "bg-white text-green-600 border-2 border-green-600 hover:bg-gray-50",
    ghost: "bg-transparent text-green-600 hover:bg-gray-100"
  };
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};