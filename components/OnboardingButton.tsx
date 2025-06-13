interface ButtonProps {
  text: string;
  isChecked: boolean;
  onclick: () => void;
}

const OnboardingButton = ({ text, isChecked, onclick }: ButtonProps) => {
  return (
    <button
      onClick={onclick}
      disabled={!isChecked}
      className={`bg-[#324ea2] px-8 py-4 rounded-2xl font-medium ${
        !isChecked ? `bg-slate-600 cursor-not-allowed` : ``
      }`}
    >
      {text}
    </button>
  );
};

export default OnboardingButton;
