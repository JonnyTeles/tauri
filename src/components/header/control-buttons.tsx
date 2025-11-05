import { X as XIcon } from "lucide-react";
import { useCustomHeader } from "./hooks/useCustomHeader";

const ControlButtons: React.FC = () => {
  const { handleClose, handleMaximize, handleMinimize } = useCustomHeader();
  return (
    <div className="flex space-x-2 no-drag select-none">
      <button
        id="minimize"
        className="w-11 h-7 flex items-center justify-center ml-1 rounded-md cursor-pointer 
            text-white transition-all duration-200 
             hover:bg-[#772ce8] hover:scale-105 hover:text-[#f5f3f7]"
        onClick={handleMinimize}
      >
        —
      </button>
      <button
        id="maximize"
        className="w-11 h-7 flex items-center justify-center ml-1 rounded-md cursor-pointer 
            text-white transition-all duration-200 
             hover:bg-[#772ce8] hover:scale-105 hover:text-[#f5f3f7]"
        onClick={handleMaximize}
      >
        ☐
      </button>
      <button
        id="close"
        className="w-11 h-7 flex items-center justify-center ml-1 rounded-md cursor-pointer 
            text-white transition-all duration-200 
             hover:bg-red-500 hover:scale-105 hover:text-[#f5f3f7]"
        onClick={handleClose}
      >
        <XIcon size={18} />
      </button>
    </div>
  );
};

export default ControlButtons;
