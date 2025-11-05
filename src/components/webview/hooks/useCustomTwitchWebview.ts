import { invoke } from "@tauri-apps/api/core";
import { WebviewWindow } from "@tauri-apps/api/webviewWindow";
import { useState } from "react";

export const useCustomTwitch = () => {
  const [isTwitchOpen, setIsTwitchOpen] = useState(false);
  const openTwitch = () => {
    if (isTwitchOpen) return;
    const twitchWebview = new WebviewWindow("twitch", {
      url: "https://www.twitch.tv",
      title: "Twitch",
      maximized: true,
      decorations: true,
    });

    twitchWebview.once("tauri://created", () => {
      setIsTwitchOpen(true);
      invoke("hide");
    });

    twitchWebview.once("tauri://error", (e) => {
      console.error("Erro ao criar Twitch Webview:", e);
      twitchWebview.destroy();
      setIsTwitchOpen(false);
      invoke("show");
    });

    twitchWebview.once("tauri://destroyed", () => {
      setIsTwitchOpen(false);
      invoke("show");
    });
  };
  return {
    isTwitchOpen,
    openTwitch,
  };
};
