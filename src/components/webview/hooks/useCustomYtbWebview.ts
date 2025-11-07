import { invoke } from "@tauri-apps/api/core";
import { resolveResource } from "@tauri-apps/api/path";
import { WebviewWindow } from "@tauri-apps/api/webviewWindow";
import { useState } from "react";

export const useCustomYoutube = () => {
  const [isYtbOpen, setIsYtbOpen] = useState(false);
  const openYoutube = () => {
    if (isYtbOpen) return;
    const ytbWebview = new WebviewWindow("youtube", {
      url: "https://www.youtube.com/",
      title: "Youtube",
      maximized: true,
      decorations: true,
    });

    ytbWebview.once("tauri://created", async () => {
      const iconPath = await resolveResource("icons/youtube-icon.png");
      await ytbWebview.setIcon(iconPath).catch((err) => console.error(err));
      setIsYtbOpen(true);
      invoke("hide");
    });

    ytbWebview.once("tauri://error", (e) => {
      console.error("Erro ao criar Ytb Webview:", e);
      ytbWebview.destroy();
      setIsYtbOpen(false);
      invoke("show");
    });

    ytbWebview.once("tauri://destroyed", () => {
      setIsYtbOpen(false);
      invoke("show");
    });
  };
  return {
    setIsYtbOpen,
    openYoutube,
  };
};
