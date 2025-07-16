export const Button = ({ children, variant = 'green', className = '', ...props }) => {
  const variantClass = variant === 'outline' ? 'button-outline' :
                       variant === 'ghost'   ? 'button-ghost' :
                                               'button-green';
  return (
    <button className={`button ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
