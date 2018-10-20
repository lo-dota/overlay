const { app, BrowserWindow } = require('electron');

let mainWindow;

const WINDOW_CONFIG = {
  frame: false,
  transparent: true,
  width: 400,
  height: 400,
};

function createWindow() {
  // engine_no_focus_sleep 0
  // Steam/steamapps/common/dota 2 beta/game/dota/cfg/machine_convars.vcfg
  mainWindow = new BrowserWindow(WINDOW_CONFIG);
  mainWindow.loadURL('https://ya.ru');
  mainWindow.setAlwaysOnTop(true);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

if (app) {
  app.on('ready', createWindow);

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow();
    }
  });
}
