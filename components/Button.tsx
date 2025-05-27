interface ButtonProps {
  text: string;
  color: string;
  prop: "create" | "login" | null;
  setProp: React.Dispatch<React.SetStateAction<"create" | "login" | null>>;
}

const Button = ({ text, color, prop, setProp }: ButtonProps) => {
  return (
    <button
      onClick={() => setProp(prop)}
      className={`${color} px-8 py-4 rounded-2xl font-medium`}
    >
      {text}
    </button>
  );
};

export default Button;
