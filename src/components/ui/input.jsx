export const Input = ({ className = '', ...props }) => (
  <input 
    className={`w-full px-3 py-2 text-base border-2 border-green-200 rounded-lg 
      focus:outline-none focus:border-green-600 transition-colors duration-200 ${className}`} 
    {...props} 
  />
);