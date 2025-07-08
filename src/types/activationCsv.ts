export interface ActivationCsvRecord {
  sim_number: number;
  iccid: string;
  activation_date: string;  // ISO 8601形式が望ましい
  carrier_name?: string;
  subscriber_code?: string;
}