import copyIcon from "@/public/copyIcon.svg";
import Image from "next/image";
import { toast } from "sonner";

interface PhrasesProps {
  mnemonicArr: string[];
}

const Phrases = ({ mnemonicArr }: PhrasesProps) => {
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
          <span
            key={i}
            className="bg-gray-800 w-40 px-4 py-4 rounded-xl hover:bg-gray-700"
          >
            <span className="text-gray-400 mr-4">{i + 1}&#46;</span> {phrase}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Phrases;
