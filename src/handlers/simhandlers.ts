import { ipcMain } from 'electron';
import db from '../database/db';

// データ取得
ipcMain.handle('get-sims', () => {
  const stmt = db.prepare('SELECT * FROM sims WHERE deleted_at IS NULL');
  return stmt.all();
});

// 必要に応じて他のハンドラ追加可
