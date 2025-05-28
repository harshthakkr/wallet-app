interface ButtonProps {
  prop: boolean;
  setProp: React.Dispatch<React.SetStateAction<boolean>>;
  curr: boolean;
  text: string;
}

const ChooseWordsButton = ({ prop, setProp, curr, text }: ButtonProps) => {
  return (
    <button
      onClick={() => setProp(prop)}
      className={`${
        curr ? `bg-[#324ea2]` : `bg-gray-800`
      } px-6 py-3 rounded-xl`}
    >
      {text}
    </button>
  );
};

export default ChooseWordsButton;
