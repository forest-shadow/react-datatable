import { ReactNode } from 'react';

type RenderCellFn = (value: any) => ReactNode;
type IDatatableCell = {
  type?: 'image' | 'text';
  style?: { [index: string]: string };
};

export interface IDatatableHeader {
  title: string;
  accessor: string;
  index: number;
  width?: number;
  cell?: RenderCellFn | IDatatableCell;
}
