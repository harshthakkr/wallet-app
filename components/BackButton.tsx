import Image from "next/image";
import backIcon from "@/public/backIcon.svg";

interface ButtonProps {
  setProp: React.Dispatch<React.SetStateAction<"create" | "login" | null>>;
}

const BackButton = ({ setProp }: ButtonProps) => {
  return (
    <button onClick={() => setProp(null)}>
      <Image src={backIcon} alt="back icon" />
    </button>
  );
};

export default BackButton;
