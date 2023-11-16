'use client';
import tableDataDevelopment from 'variables/data-tables/tableDataDevelopment';
import tableDataCheck from 'variables/data-tables/tableDataCheck';
import CheckTable from 'components/admin/data-tables/CheckTable';
import tableDataColumns from 'variables/data-tables/tableDataColumns';
import tableDataComplex from 'variables/data-tables/tableDataComplex';
import UserTable from 'components/admin/data-tables/UserTable';
import ColumnsTable from 'components/admin/data-tables/ColumnsTable';
import ComplexTable from 'components/admin/data-tables/ComplexTable';

const Tables = () => {
  return (
    <div>
      <div className="mt-5 h-full gap-5">
        <UserTable tableData={tableDataDevelopment} />
      </div>
    </div>
  );
};

export default Tables;
