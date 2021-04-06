import React from "react";
import PropTypes from "prop-types";

const TableComponent = ({ dataDept }) => {
  const {
    dataAcc,
    dataBrickBig,
    dataBrickMini,
    dataCement,
    dataCeramic,
    dataElectric,
    dataHouseware,
    dataRockBig,
    dataRockMini,
    dataSandBig,
    dataSandMini,
    dataSteel,
    dataTile,
    dataTube,
  } = dataDept;

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th className="tb-brand">Lấy</th>
          <th className="tb-category">Loại</th>
          <th className="tb-unit">Đơn vị</th>
          <th className="tb-quantity">SL</th>
          <th className="tb-price">Giá</th>
        </tr>
      </thead>
      <tbody>
        {dataSandBig &&
          dataSandBig.length > 0 &&
          dataSandBig.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item?.title}</th>
              <td>{item?.category}</td>
              <td>{item?.unit}</td>
              <td>{item?.quantity}</td>
              <td>{item?.price}</td>
            </tr>
          ))}
        {dataRockBig &&
          dataRockBig.length > 0 &&
          dataRockBig.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item?.title}</th>
              <td>{item?.category}</td>
              <td>{item?.unit}</td>
              <td>{item?.quantity}</td>
              <td>{item?.price}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

TableComponent.propTypes = {
  dataDept: PropTypes.object,
};

export default TableComponent;
