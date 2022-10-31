export interface Costs {
  daCurrency: DaCurrency;
  baseCurrency: BaseCurrency;
  costs: Cost[];
}

export interface DaCurrency {
  currency: string;
}

export interface BaseCurrency {
  currency: string;
  exchangeRate: number;
}

export interface Cost {
  id: number;
  name: string;
  displayOrder: number;
  costItems: CostItem[];
}

export interface CostItem {
  id: number;
  name: string;
  costItemAlias: CostItemAlias;
  annotation: Annotation;
  costs: CostDetails[];
  comments: Comments[];
}

export interface CostItemAlias {
  accountingCode: string;
}

export interface Annotation {
  id: number;
  name: string;
}

export interface CostDetails {
  daStage: string;
  persona: string;
  type: Types;
  amount: number;
}

export enum Types {
  Quoted = 'Quoted',
  Screened = 'Screened'
}

export interface Comments {
  id: number;
  daStage: string;
  persona: string;
  author: string;
  comment: string;
  type: string;
  date: Date;
}




