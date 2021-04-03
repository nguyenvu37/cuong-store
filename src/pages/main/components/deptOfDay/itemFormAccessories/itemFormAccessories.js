import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { listOptionTube } from "../../../../../common/listOption";
import Input from "../../../../../components/Input";
import SelectInput from "../../../../../components/Select";
import IMAGES from "../../../../../themes/images";

const ItemFormAccessories = ({ onSendData }) => {
  const [dataSubmit, setDataSubmit] = useState({
    option: listOptionTube[0],
    title: "",
    quantity: "",
    price: "",
  });

  const handleChange = (name, value) => {
    setDataSubmit({
      ...dataSubmit,
      [name]: value,
    });
  };

  const handlePlus = async () => {
    let data = {
      id: uuidv4(),
      title: dataSubmit?.title,
      category: dataSubmit?.option?.value,
      quantity: dataSubmit?.quantity && parseInt(dataSubmit?.quantity),
      price: dataSubmit?.price && parseInt(dataSubmit?.price),
    };

    setDataSubmit({
      ...dataSubmit,
      option: "",
      title: "",
      quantity: "",
      price: "",
    });

    onSendData("dataAcc", data);
  };

  return (
    <div className="form-inline" style={{ position: "relative" }}>
      <Input
        label="Phụ kiện"
        type="text"
        value={dataSubmit?.title}
        onChange={(e) => handleChange("title", e.target.value)}
        classLabel="form-label"
        classInput="form-control"
        customClass="accessories"
      />
      <SelectInput
        placeholderSelect="Bình minh"
        onChange={(e) => handleChange("option", e)}
        option={dataSubmit?.option}
        isSearchable
        listOptionString={listOptionTube}
        label="Loại"
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
    </div>
  );
};

ItemFormAccessories.propTypes = {
  onSendData: PropTypes.func,
};

export default ItemFormAccessories;
