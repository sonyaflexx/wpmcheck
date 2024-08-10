interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`py-2 px-4 rounded-xl font-medium ${className}`}>
      {children}
    </button>
  );
};

export default Button;