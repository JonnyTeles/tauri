import { invoke } from "@tauri-apps/api/core";
import { resolveResource } from "@tauri-apps/api/path";
import { WebviewWindow } from "@tauri-apps/api/webviewWindow";
import { useState } from "react";

export const useCustomDiscord = () => {
  const [isDiscordOpen, setIsDiscordOpen] = useState(false);
  const openDiscord = () => {
    if (isDiscordOpen) return;
    const discordWebview = new WebviewWindow("discord", {
      url: "https://discord.com/login",
      title: "Discord",
      maximized: true,
      decorations: true,
    });

    discordWebview.once("tauri://created", async () => {
      const iconPath = await resolveResource("icons/discord-icon.png");
      await discordWebview.setIcon(iconPath).catch((err) => console.error(err));
      setIsDiscordOpen(true);
      invoke("hide");
    });

    discordWebview.once("tauri://error", (e) => {
      console.error("Erro ao criar Discord Webview:", e);
      discordWebview.destroy();
      setIsDiscordOpen(false);
      invoke("show");
    });

    discordWebview.once("tauri://destroyed", () => {
      setIsDiscordOpen(false);
      invoke("show");
    });
  };
  return {
    setIsDiscordOpen,
    openDiscord,
  };
};
