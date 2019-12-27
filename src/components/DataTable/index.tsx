import React from 'react';

import './style.css';
import { IDatatableHeader } from './interfaces/DataTableHeader';
import { IDataTablePagination } from "./interfaces/DataTablePagination";

const DataTable: React.FC<Props> = () => {
  return <div>DataTable component</div>;
};

interface Props {
  title: string;
  keyField: string;
  pagination: IDataTablePagination;
  headers: IDatatableHeader[];
  data: Array<{ [indes: string]: any }>;
  noDataMessage: string;
}

export default DataTable;
