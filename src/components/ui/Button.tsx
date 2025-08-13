export default function Button({ children, type = 'button', variant = 'primary', ...props }) {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2";
  
  const variants = {
    primary: "bg-violet-500 text-white hover:via-violet-700 hover:ring hover:ring-violet-800",
    secondary: "hover:bg-accent hover:ring hover:ring-white"
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}