import ControlButtons from "./control-buttons";
import juremaIconPath from "../../assets/jurema-icon.png";

const HeaderControl: React.FC = () => (
<div
  data-tauri-drag-region
  className="
    top-0 left-0 right-0 z-50
    flex items-center justify-between
    bg-gradient-to-r from-[#4c1d95] via-[#6d28d9] to-[#7e22ce]
    text-white font-bold px-4 py-2 select-none
    border-b-2 border-purple-400/70
    shadow-[0_0_15px_rgba(168,85,247,0.4)]
    backdrop-blur-sm
    drag-region
    transition-all duration-300
  "
>
  <div className="flex items-center space-x-3" data-tauri-drag-region>
    <img
      src={juremaIconPath}
      alt="icon"
      className="
        w-12 h-12 drop-shadow-[0_0_6px_rgba(216,180,254,0.8)]
        transition-transform duration-300
        hover:scale-110
      "
    />
    <h1
      className="
        text-xl font-semibold leading-none tracking-wide
        drop-shadow-[0_0_8px_rgba(216,180,254,0.8)]
      "
    >
      Jurema Desktop
    </h1>
  </div>

  <div className="flex items-center">
    <ControlButtons />
  </div>
</div>

);

export default HeaderControl;
