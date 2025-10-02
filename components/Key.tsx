import { Eye, EyeOff } from "lucide-react";
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
              <Eye size={20} color="gray" />
            ) : (
              <EyeOff size={20} color="gray" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Key;
