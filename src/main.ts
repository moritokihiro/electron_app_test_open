import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import Database from 'better-sqlite3';

let win: BrowserWindow | null = null;

// SQLite DBを初期化
const db = new Database(path.join(__dirname, 'app.db'));

// 初回起動時にテーブルがなければ作成（テスト用）
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
  );
`);

// テストデータ挿入（必要ならコメントアウト）
const insert = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');
const countResult = db.prepare('SELECT COUNT(*) as count FROM users').get() as { count: number };
if (countResult.count === 0) {
  insert.run('Alice', 'alice@example.com');
  insert.run('Bob', 'bob@example.com');
}

async function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  await win.loadFile(path.join(__dirname, 'renderer/index.html'));
}

app.whenReady().then(createWindow);

// DBクエリ（SQLiteに置き換え）
ipcMain.handle('get-users', async () => {
  const stmt = db.prepare('SELECT * FROM users');
  const rows = stmt.all();
  return rows;
});
