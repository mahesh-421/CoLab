const { app, BrowserWindow, screen } = require('electron');
const url = require('url');
const path = require('node:path');

function createMainWindow() {
  const { height, width } = screen.getPrimaryDisplay().workArea;
  const mainWindow = new BrowserWindow({
    title: 'CoLab',
    width: parseInt(width * 0.8),
    height: parseInt(height * 0.8),
    minHeight: parseInt(height * 0.5),
    minWidth: parseInt(width * 0.5),
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // mainWindow.webContents.openDevTools();

  const startUrl = url.format({
    pathname: path.join(__dirname, './code/build/index.html'),
    protocol: 'file',
  });

  // mainWindow.loadURL(startUrl);
  mainWindow.loadURL('http://localhost:3000');
}

app.whenReady().then(createMainWindow);
