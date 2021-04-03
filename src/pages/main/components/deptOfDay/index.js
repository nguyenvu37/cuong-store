import React from "react";
import FormDept from "./formDept";

const DeptOfDay = () => {
  return (
    <div className="dept">
      <h2 className="text-uppercase">nhập thông tin nợ hàng ngày</h2>
      <div className="form-dept">
        <FormDept />
      </div>
    </div>
  );
};

export default DeptOfDay;
