import React from "react";
import { useSelector } from "react-redux";
import { formatTime } from "../../../../../common/formatTime";
import TableComponent from "./table/tableComponent";

const TableDept = () => {
  const { dataDept } = useSelector((state) => state.deptReducer);
  return (
    <div className="card">
      <div className="jumbotron">
        <h3 className="text-uppercase text-center">Hóa đơn</h3>
        <div className="user">
          <div className="user-name">
            <h5>Tên: </h5>
            <p>{dataDept?.name}</p>
          </div>
          <div className="user-address">
            <h5>Địa chỉ: </h5>
            <p>{dataDept?.address}</p>
          </div>

          <div className="user-contact">
            <h5>Liên hệ: </h5>
            <p>{dataDept?.phone}</p>
          </div>

          <div className="user-time">
            <h5>Ngày: </h5>
            <p>
              {typeof dataDept?.dateTime === "object"
                ? formatTime(dataDept.dateTime)
                : ""}
            </p>
          </div>
        </div>
      </div>
      <div className="card-body">
        <TableComponent dataDept={dataDept} />
      </div>
    </div>
  );
};

export default TableDept;
