import showIcon from "@/public/eye.svg";
import hideIcon from "@/public/eye-off.svg";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const Key = ({ title, text }: { title: string; text: string }) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  return (
    <div>
      <h3 className="font-medium mb-1">{title}</h3>
      <div className="flex items-center justify-between">
        <span
          onClick={() => {
            navigator.clipboard.writeText(text);
            toast.success("Copied to clipboard");
          }}
          className="text-base text-gray-400 hover:text-white cursor-pointer"
        >
          {title === "Private Key" && isHidden
            ? "• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •"
            : text}
        </span>
        {title === "Private Key" && (
          <button onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? (
              <Image src={showIcon} alt="show icon" />
            ) : (
              <Image src={hideIcon} alt="hide icon" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Key;
