mod commands;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![
            commands::greet,
            commands::minimize,
            commands::toggle_maximize,
            commands::close,
            commands::show,
            commands::hide
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
