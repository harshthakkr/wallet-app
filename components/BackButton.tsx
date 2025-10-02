import { ArrowLeft } from "lucide-react";

interface ButtonProps {
  setProp: React.Dispatch<React.SetStateAction<"create" | "login" | null>>;
}

const BackButton = ({ setProp }: ButtonProps) => {
  return (
    <button onClick={() => setProp(null)}>
      <ArrowLeft size={20} />
    </button>
  );
};

export default BackButton;
