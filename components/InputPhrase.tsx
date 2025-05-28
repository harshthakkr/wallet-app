import Number from "./Number";

interface PhraseProps {
  prop: string[];
  setProp: React.Dispatch<React.SetStateAction<string[]>>;
}

const InputPhrase = ({ prop, setProp }: PhraseProps) => {
  return (
    <div className="grid grid-cols-6 gap-3 border border-gray-800 p-4 rounded-2xl">
      {prop.map((input: string, i: number) => (
        <div key={i} className="flex bg-gray-800 w-40 px-4 py-4 rounded-xl">
          <Number digit={i + 1} />
          <input
            type="text"
            value={input}
            onChange={(e) => {
              const newInputs = [...prop];
              newInputs[i] = e.target.value;
              setProp(newInputs);
            }}
            className="mr-4 w-full outline-none bg-transparent"
          />
        </div>
      ))}
    </div>
  );
};

export default InputPhrase;
