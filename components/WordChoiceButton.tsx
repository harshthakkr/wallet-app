interface ButtonProps {
  prop: boolean;
  setProp: React.Dispatch<React.SetStateAction<boolean>>;
}

const WordChoiceButton = ({ prop, setProp }: ButtonProps) => {
  return (
    <button
      onClick={() => setProp(!prop)}
      className="bg-[#324ea2] px-6 py-3 rounded-xl"
    >
      {prop ? "Use 24 words" : "Use 12 words"}
    </button>
  );
};

export default WordChoiceButton;
