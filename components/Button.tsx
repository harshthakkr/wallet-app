interface ButtonProps {
  text: string;
  color: string;
}

const Button = ({ text, color }: ButtonProps) => {
  return (
    <button className={`${color} px-8 py-4 rounded-2xl font-medium`}>
      {text}
    </button>
  );
};

export default Button;
