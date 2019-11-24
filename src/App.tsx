import React, { useState } from 'react';

import DataTable from './components/DataTable';
import { headers, userData } from './datatableMockData';

const App: React.FC = () => {
  const [datatableHeaders] = useState(headers);
  const [userDataState] = useState(userData);
  return (
    <div className="App">
      <DataTable
        title="User Profiles"
        keyField="id"
        pagination={{
          pageLength: 5,
          extended: true
        }}
        headers={datatableHeaders}
        data={userDataState}
        noDataMessage="No records!"
      />
    </div>
  );
};

export default App;
