const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('node:path');

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: 'CoLab',
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.webContents.openDevTools();

  const startUrl = url.format({
    pathname: path.join(__dirname, './code/build/index.html'),
    protocol: 'file',
  });

  // mainWindow.loadURL(startUrl);
  mainWindow.loadURL('http://localhost:3000');
}

app.whenReady().then(createMainWindow);
