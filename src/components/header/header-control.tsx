import ControlButtons from "./control-buttons";
import juremaIconPath from "../../assets/jurema-icon.png";

const HeaderControl: React.FC = () => (
  <div
    data-tauri-drag-region
    className="
      top-0 left-0 right-0 z-50
      flex items-center justify-between
      bg-primary text-white font-bold px-4 py-2 select-none
       drag-region
    "
  >
    <div className="flex items-center space-x-2" data-tauri-drag-region>
      <img src={juremaIconPath} alt="icon" className="w-15 h-16" />
      <h1 className="text-lg font-semibold leading-none">Jurema Desktop</h1>
    </div>
    <ControlButtons />
  </div>
);

export default HeaderControl;
