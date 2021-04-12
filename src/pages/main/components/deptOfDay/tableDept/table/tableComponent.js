import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  formatPrice,
  formatQuantity,
} from "../../../../../../common/formatValue";
import formatNumber from "../../../../../../common/formatNumber";
import Input from "../../../../../../components/Input";

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

  const sandBig = {
    title: dataSandBig[0]?.title,
    category: dataSandBig[0]?.category,
    unit: dataSandBig[0]?.unit,
    quantity: formatQuantity(dataSandBig),
    price: dataSandBig[0]?.price,
    total: formatPrice(dataSandBig),
  };

  const [dataQuantity, setDataQuantity] = useState({
    quanSandBig: sandBig?.quantity ? sandBig?.quantity : 0,
  });

  const handleChange = (name, value) => {
    if (name === "quanSandBig") {
      setDataQuantity({ ...dataQuantity, [name]: value });
    }
  };

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th className="tb-brand">Lấy</th>
          <th className="tb-category">Loại</th>
          <th className="tb-unit">Đơn vị</th>
          <th className="tb-quantity">SL</th>
          <th className="tb-price">Giá</th>
          <th className="tb-total">T.Tiền</th>
        </tr>
      </thead>
      <tbody>
        {dataSandBig && dataSandBig.length > 0 && (
          <tr>
            <th scope="row">{sandBig?.title}</th>
            <td>{sandBig?.category}</td>
            <td>{sandBig?.unit}</td>
            <td>
              <Input
                type="number"
                value={dataQuantity?.quanSandBig}
                onChange={(e) => handleChange("quanSandBig", e.target.value)}
                classLabel="form-label"
                classInput="form-control"
                customClass="quantity-sandBig"
              />
            </td>
            <td>{formatNumber(sandBig?.price)}</td>
            <td>{formatNumber(sandBig?.total)}</td>
          </tr>
        )}
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
