use tauri::{command, AppHandle, Window};

#[command]
pub fn minimize(window: Window) {
    let _ = window.minimize(); // OU window.minimize().ok();
}

#[command]
pub fn toggle_maximize(window: Window) {
    if window.is_maximized().unwrap_or(false) {
        let _ = window.unmaximize();
    } else {
        let _ = window.maximize();
    }
}

#[command]
pub fn close(app: AppHandle) {
    let _ = app.exit(0);
}

#[command]
pub fn show(window: Window) {
    let _ = window.show();
    let _ = window.set_focus();
}

#[command]
pub fn hide(window: Window){
    let _ = window.hide();
}