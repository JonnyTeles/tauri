import { invoke } from "@tauri-apps/api/core";
import { resolveResource } from "@tauri-apps/api/path";
import { WebviewWindow } from "@tauri-apps/api/webviewWindow";
import { useState } from "react";

export const useCustomYtbMusic = () => {
  const [isYtbMusicOpen, setIsYtbMusicOpen] = useState(false);
  const openYtbMusic = () => {
    if (isYtbMusicOpen) return;
    const ytbMusicWebview = new WebviewWindow("youtubemusic", {
      url: "https://music.youtube.com/",
      title: "Youtube Music",
      maximized: true,
      decorations: true,
    });

    ytbMusicWebview.once("tauri://created", async () => {
      const iconPath = await resolveResource("icons/ytb-music-icon.png");
      await ytbMusicWebview
        .setIcon(iconPath)
        .catch((err) => console.error(err));
      setIsYtbMusicOpen(true);
      invoke("hide");
    });

    ytbMusicWebview.once("tauri://error", (e) => {
      console.error("Erro ao criar Ytb Music Webview:", e);
      ytbMusicWebview.destroy();
      setIsYtbMusicOpen(false);
      invoke("show");
    });

    ytbMusicWebview.once("tauri://destroyed", () => {
      setIsYtbMusicOpen(false);
      invoke("show");
    });
  };
  return {
    setIsYtbMusicOpen,
    openYtbMusic,
  };
};
