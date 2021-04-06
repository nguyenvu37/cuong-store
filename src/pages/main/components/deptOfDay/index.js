import React from "react";
import FormDept from "./formDept/formDept";
import TableDept from "./tableDept";

const DeptOfDay = () => {
  return (
    <div className="container-fluid my-3">
      <h2 className="title text-uppercase text-center my-5">
        nhập thông tin nợ hàng ngày
      </h2>
      <div className="dept">
        <div className="form-dept">
          <FormDept />
        </div>
        <div className="table-dept">
          <TableDept />
        </div>
      </div>
    </div>
  );
};

export default DeptOfDay;
