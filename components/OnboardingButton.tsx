const OnboardingButton = ({
  text,
  isChecked,
}: {
  text: string;
  isChecked?: boolean;
}) => {
  return (
    <button
      onClick={() => console.log("hello")}
      disabled={isChecked ? !isChecked : true}
      className={`bg-[#324ea2] px-8 py-4 rounded-2xl font-medium ${
        !isChecked ? `bg-slate-600 cursor-not-allowed` : ``
      }`}
    >
      {text}
    </button>
  );
};

export default OnboardingButton;
