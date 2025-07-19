export const Badge = ({ children, variant = 'default', className = '' }) => {
  const baseClasses = "inline-block px-3 py-1 rounded-full text-xs font-semibold";
  
  const variantClasses = {
    default: "bg-green-600 text-white",
    secondary: "bg-gray-100 text-gray-700"
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};