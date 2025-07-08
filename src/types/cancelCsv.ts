export interface CancelCsvRecord {
  sim_number: number;
  iccid: string;
  suspension_date: string; // ISO 8601形式
  reason?: string;         // 利用停止理由など
}