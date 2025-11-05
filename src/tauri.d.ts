declare module "@tauri-apps/api/core" {
  interface TauriCommands {
    greet: { args: { name: string }; return: string };
    minimize: { args?: {}; return: void };
    toggle_maximize: { args?: {}; return: void };
    close: { args?: {}; return: void };
    show: { args?: {}; return: void };
    hide: { args?: {}; return: void };
  }

  export function invoke<K extends keyof TauriCommands>(
    cmd: K,
    ...args: TauriCommands[K]["args"] extends Record<string, never> | undefined
      ? [] | [TauriCommands[K]["args"]]
      : [TauriCommands[K]["args"]]
  ): Promise<TauriCommands[K]["return"]>;
}
