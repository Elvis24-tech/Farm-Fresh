export const Badge = ({ children, variant = 'default', className = '' }) => {
  const vClass = variant === 'secondary' ? 'badge-secondary' : 'badge-default';
  return <span className={`badge ${vClass} ${className}`}>{children}</span>;
};
