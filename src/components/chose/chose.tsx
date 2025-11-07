import ytbMusiIconPath from "../../assets/ytb-music-icon.png";
import twitchIconPath from "../../assets/twitch-icon.png";
import youtubeIconPath from "../../assets/youtube-icon.png";
import discordIconPath from "../../assets/discord-icon.png";
import { useCustomTwitch } from "../webview/hooks/useCustomTwitchWebview";
import { useCustomYtbMusic } from "../webview/hooks/useCustomYtbMusicWebview";
import { useCustomYoutube } from "../webview/hooks/useCustomYtbWebview";
import { useCustomDiscord } from "../webview/hooks/useCustomDiscordWebview";

const Chose: React.FC = () => {
  const { openTwitch } = useCustomTwitch();
  const { openYtbMusic } = useCustomYtbMusic();
  const { openYoutube } = useCustomYoutube();
  const { openDiscord } = useCustomDiscord();

  return (
    <div
      className="
    flex w-full h-[calc(100vh-56px)]
    overflow-hidden select-none justify-center items-center
    gap-8
  "
    >
      <div className="flex flex-col items-center justify-center gap-6">
        {/* TWITCH */}
        <button
          onClick={openTwitch}
          className="
        flex items-center justify-center
        w-48 h-48
        bg-purple-600 border-2 border-purple-500/70
        hover:bg-purple-700
        transition-all duration-300 ease-in-out
        overflow-hidden group rounded-2xl
        transform hover:scale-105
        hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]
      "
        >
          <img
            src={twitchIconPath}
            alt="Twitch"
            className="
          w-32 h-32 pointer-events-none select-none
          transition-all duration-300 transform
          group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.9)]
          group-hover:brightness-125
          group-hover:scale-110
        "
          />
        </button>

        {/* DISCORD */}
        <button
          onClick={openDiscord}
          className="
        flex items-center justify-center
        w-48 h-48
        bg-indigo-600 border-2 border-indigo-500/70
        hover:bg-indigo-700
        transition-all duration-300 ease-in-out
        overflow-hidden group rounded-2xl
        transform hover:scale-105
        hover:shadow-[0_0_25px_rgba(99,102,241,0.8)]
      "
        >
          <img
            src={discordIconPath}
            alt="Discord"
            className="
          w-32 h-32 pointer-events-none select-none
          transition-all duration-300 transform
          group-hover:drop-shadow-[0_0_25px_rgba(99,102,241,0.9)]
          group-hover:brightness-125
          group-hover:scale-110
        "
          />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center gap-6">
        {/* YOUTUBE */}
        <button
          onClick={openYoutube}
          className="
        flex items-center justify-center
        w-48 h-48
        bg-red-600 border-2 border-red-500/70
        hover:bg-red-700
        transition-all duration-300 ease-in-out
        overflow-hidden group rounded-2xl
        transform hover:scale-105
        hover:shadow-[0_0_25px_rgba(239,68,68,0.8)]
      "
        >
          <img
            src={youtubeIconPath}
            alt="YouTube"
            className="
          w-32 h-32 pointer-events-none select-none
          transition-all duration-300 transform
          group-hover:drop-shadow-[0_0_25px_rgba(239,68,68,0.9)]
          group-hover:brightness-125
          group-hover:scale-110
        "
          />
        </button>

        {/* YOUTUBE MUSIC */}
        <button
          onClick={openYtbMusic}
          className="
        flex items-center justify-center
        w-48 h-48
        bg-red-600 border-2 border-red-500/70
        hover:bg-red-700
        transition-all duration-300 ease-in-out
        overflow-hidden group rounded-2xl
        transform hover:scale-105
        hover:shadow-[0_0_25px_rgba(239,68,68,0.8)]
      "
        >
          <img
            src={ytbMusiIconPath}
            alt="YouTube Music"
            className="
          w-32 h-32 pointer-events-none select-none
          transition-all duration-300 transform
          group-hover:drop-shadow-[0_0_25px_rgba(239,68,68,0.9)]
          group-hover:brightness-125
          group-hover:scale-110
        "
          />
        </button>
      </div>
    </div>
  );
};

export default Chose;
