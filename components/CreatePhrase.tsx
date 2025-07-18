import copyIcon from "@/public/copyIcon.svg";
import Image from "next/image";
import { toast } from "sonner";
import Number from "./Number";

interface PhrasesProps {
  mnemonicArr: string[];
}

const CreatePhrase = ({ mnemonicArr }: PhrasesProps) => {
  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText(
          mnemonicArr.toString().replaceAll(",", "")
        );
        toast.success("Copied to clipboard");
      }}
      className="border border-gray-800 p-4 rounded-2xl cursor-pointer"
    >
      <div className="flex items-center gap-2 mb-4">
        <Image src={copyIcon} alt="Copy icon" height={24} width={24} />
        <p className="text-gray-400">Click anywhere to copy it</p>
      </div>
      <div className="grid grid-cols-6 gap-3">
        {mnemonicArr.map((phrase: string, i: number) => (
          <div
            key={i}
            className="bg-gray-800 w-40 px-4 py-4 rounded-xl hover:bg-gray-700"
          >
            <Number digit={i + 1} /> {phrase}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatePhrase;
