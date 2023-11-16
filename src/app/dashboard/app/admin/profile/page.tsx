'use client';
import tableDataUser from 'variables/data-tables/tableDataUser';
import tableDataCheck from 'variables/data-tables/tableDataCheck';
import CheckTable from 'components/admin/data-tables/CheckTable';
import tableDataColumns from 'variables/data-tables/tableDataColumns';
import tableDataComplex from 'variables/data-tables/tableDataComplex';
import DevelopmentTable from 'components/admin/data-tables/DevelopmentTable';
import ColumnsTable from 'components/admin/data-tables/ColumnsTable';
import ComplexTable from 'components/admin/data-tables/ComplexTable';

const ProfileOverview = () => {
  return (
    <div>
      <div className="mt-5 h-full gap-5">
        <DevelopmentTable tableData={tableDataUser} />
      </div>
    </div>
  );
};

export default ProfileOverview;
