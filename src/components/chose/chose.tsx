import ytbMusiIconPath from "../../assets/ytb-music-icon.png";
import twitchIconPath from "../../assets/twitch-icon.png";
import { useCustomTwitch } from "../webview/hooks/useCustomTwitchWebview";
import { useCustomYtbMusic } from "../webview/hooks/useCustomYtbMusicWebview";

const Chose: React.FC = () => {
  const { openTwitch } = useCustomTwitch();
  const { openYtbMusic } = useCustomYtbMusic();

  return (
    <div
      className="
        flex w-full
        h-[calc(100vh-56px)]  /* ajusta a altura tirando o header */
        overflow-hidden select-none
      "
    >
      {/* --- TWITCH --- */}
      <button
        onClick={openTwitch}
        className="
          flex-1 flex items-center justify-center
          border rounded border-purple-600
          bg-purple-600 hover:bg-purple-700 hover:border-purple-700
          transition-transform duration-300 ease-in-out
          overflow-hidden
          group
        "
      >
        <img
          src={twitchIconPath}
          alt='Twitch'
          className="
            w-32 h-32 pointer-events-none select-none
            transition-all duration-300
            group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.9)]
            group-hover:brightness-125
          "
        />
      </button>

      {/* --- YOUTUBE MUSIC --- */}
      <button
        onClick={openYtbMusic}
        className="
          flex-1 flex items-center justify-center
            border rounded border-red-600
          bg-red-600 hover:bg-red-700 hover:border-red-700
          transition-transform duration-300 ease-in-out
          overflow-hidden
          group
        "
      >
        <img
          src={ytbMusiIconPath}
          alt='YouTube Music'
          className="
            w-32 h-32 pointer-events-none select-none
            transition-all duration-300
            group-hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.9)]
            group-hover:brightness-125
          "
        />
      </button>
    </div>
  );
};

export default Chose;
