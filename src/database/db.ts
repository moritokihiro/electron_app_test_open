import path from 'path';
import Database from 'better-sqlite3';

const dbPath = path.join(__dirname, '../../data/sim_management.db');
const db = new Database(dbPath);

// 初期テーブル作成
db.exec(`
  CREATE TABLE IF NOT EXISTS sims (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sim_number INTEGER NOT NULL,
    iccid TEXT NOT NULL UNIQUE,
    carrier_id INTEGER NOT NULL,
    operator_id INTEGER NOT NULL,
    sim_status_cd TEXT NOT NULL,
    sim_status_name TEXT NOT NULL DEFAULT '利用中',
    cui TEXT,
    subscriber_cd TEXT UNIQUE,
    activated_at TEXT,
    deactivated_at TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now')),
    deleted_at TEXT
  );
`);

export default db;
