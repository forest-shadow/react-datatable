import React from 'react';

import './style.css';
import { IDatatableHeader } from './interfaces/DataTableHeader';

const DataTable: React.FC<Props> = () => {
  return <div>DataTable component</div>;
};

interface Pagination {
  pageLength: number;
  extended: boolean;
}

interface Props {
  title: string;
  keyField: string;
  pagination: Pagination;
  headers: IDatatableHeader[];
  data: Array<{ [indes: string]: any }>;
  noDataMessage: string;
}

export default DataTable;
