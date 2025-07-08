export interface SimExtractionCsvRecord {
  sim_number: number;
  iccid: string;
  sim_status: string;      // 例："Active", "Suspended", "Terminated"
  carrier_name?: string;
  activated_at?: string;
  deactivated_at?: string;
}