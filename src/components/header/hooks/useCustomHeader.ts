import { invoke } from "@tauri-apps/api/core";

export const useCustomHeader = () => {
  const handleMinimize = () => invoke("minimize");
  const handleMaximize = () => invoke("toggle_maximize");
  const handleClose = () => invoke("close");

  return {
    handleMinimize,
    handleMaximize,
    handleClose,
  };
};
