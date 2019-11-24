import React from 'react';
import { IDatatableHeader } from './components/DataTable/interfaces/DataTableHeader';

interface UserModel {
  id: number;
  name: string;
  age: number;
  qualification: string;
  rating: number;
  profile: string;
}

const userData: UserModel[] = [];
for (let i = 1; i <= 20; i++) {
  userData.push({
    id: i,
    name: 'name' + i,
    age: i + 18,
    qualification: i % 2 ? 'B.Com' : 'Graduate',
    rating: i % 2 ? 3 : 4,
    profile: 'https://png.icons8.com/dotty/50/000000/cat-profile.png'
  });
}

let headers: IDatatableHeader[] = [
  { title: 'Id', accessor: 'id', index: 0 },
  {
    title: 'Profile',
    accessor: 'profile',
    index: 1,
    cell: {
      type: 'image',
      style: {
        width: '50px'
      }
    }
  },
  {
    title: 'Name',
    accessor: 'name',
    index: 2,
    width: 300,
    cell: {
      style: {
        width: '300px'
      }
    }
  },
  {
    title: 'Age',
    accessor: 'age',
    index: 3
  },
  {
    title: 'Qualification',
    accessor: 'qualification',
    index: 4
  },
  {
    title: 'Rating',
    accessor: 'rating',
    index: 5,
    width: 200,
    cell: (row: any) => (
      <div className="rating">
        <div
          style={{
            backgroundColor: 'lightskyblue',
            textAlign: 'center',
            height: '1.9em',
            width: (row / 5) * 201 + 'px',
            margin: '3px 0 4px 0'
          }}
        >
          {row}
        </div>
      </div>
    )
  }
];

export { headers, userData };
