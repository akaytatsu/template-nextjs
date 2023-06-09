export interface Patrimony {
  next?: any;
  previous?: any;
  count: number;
  page: number;
  num_pages: number;
  results: Result[];
}

export interface Result {
  id: number;
  number: number;
  lastro_types: any[];
  accounting_closing: string;
  series: string;
  emission_name: string;
  last_series_due_date: string;
}
