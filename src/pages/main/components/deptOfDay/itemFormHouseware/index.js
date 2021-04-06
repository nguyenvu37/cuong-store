import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  listOptionElectric,
  listOptionElectricBrand,
} from "../../../../../common/listOption";
import Input from "../../../../../components/Input";
import CreateSelect from "../../../../../components/SelectCreatable";
import IMAGES from "../../../../../themes/images";

const ItemFormHouseware = ({ onSendData }) => {
  const [dataSubmit, setDataSubmit] = useState({
    brand: listOptionElectricBrand[0],
    option: listOptionElectric[0],
    quantity: "",
    price: "",
    title: "",
  });

  const handleChange = (name, value) => {
    setDataSubmit({
      ...dataSubmit,
      [name]: value,
    });
  };

  const handlePlus = () => {
    let data = {
      id: uuidv4(),
      title: dataSubmit?.title + dataSubmit?.brand?.value,
      category: dataSubmit?.option?.value,
      quantity: dataSubmit?.quantity && parseInt(dataSubmit?.quantity),
      price: dataSubmit?.price && parseInt(dataSubmit?.price),
      unit: dataSubmit?.option?.value,
    };

    setDataSubmit({
      brand: listOptionElectricBrand[0],
      option: listOptionElectric[0],
      quantity: "",
      price: "",
      title: "",
    });

    onSendData("dataHouseware", data);
  };
  return (
    <Fragment>
      <Input
        label="Đồ mua"
        type="text"
        value={dataSubmit?.title}
        onChange={(e) => handleChange("title", e.target.value)}
        classLabel="form-label"
        classInput="form-control"
        customClass="electric"
      />
      <CreateSelect
        isClearable
        placeholderSelect="Cadivi"
        onChange={(e) => handleChange("brand", e)}
        option={dataSubmit?.brand}
        isSearchable
        listOptionString={listOptionElectricBrand}
        label="Nhãn hàng"
        customClass="brand"
      />
      <CreateSelect
        isClearable
        placeholderSelect="Cuộn"
        onChange={(e) => handleChange("option", e)}
        option={dataSubmit?.option}
        isSearchable
        listOptionString={listOptionElectric}
        label="Loại"
        customClass="option"
      />
      <Input
        label="Số lượng"
        type="number"
        value={dataSubmit?.quantity}
        onChange={(e) => handleChange("quantity", e.target.value)}
        classLabel="form-label"
        classInput="form-control"
        customClass="unit"
      />
      <Input
        label="Giá"
        type="number"
        value={dataSubmit?.price}
        onChange={(e) => handleChange("price", e.target.value)}
        classLabel="form-label"
        classInput="form-control"
        customClass="price"
      />

      <div className="plus">
        <img src={IMAGES.plus} alt="" onClick={handlePlus} />
      </div>
    </Fragment>
  );
};

ItemFormHouseware.propTypes = {
  onSendData: PropTypes.func,
};

export default ItemFormHouseware;
