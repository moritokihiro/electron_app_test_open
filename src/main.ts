import { app, BrowserWindow } from 'electron';
import path from 'path';
import './handlers/simHandler'; 

let win: BrowserWindow | null = null;

async function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  const indexPath = path.join(__dirname, 'renderer', 'index.html');
  win.loadFile(indexPath);
}

app.whenReady().then(createWindow);
