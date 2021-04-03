import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  listOptionCement,
  listOptionUnitCement,
} from "../../../../../common/listOption";
import Input from "../../../../../components/Input";
import SelectInput from "../../../../../components/Select";
import IMAGES from "../../../../../themes/images";

const ItemFormCement = ({ onSendData }) => {
  const [dataSubmit, setDataSubmit] = useState({
    option: listOptionCement[0],
    quantity: "",
    price: "",
    unit: listOptionUnitCement[0],
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
      title: "Xi măng",
      category: dataSubmit?.option?.value,
      quantity: dataSubmit?.quantity && parseInt(dataSubmit?.quantity),
      price: dataSubmit?.price && parseInt(dataSubmit?.price),
      unit: dataSubmit?.unit && parseInt(dataSubmit?.unit),
    };

    setDataSubmit({
      option: "",
      quantity: "",
      price: "",
      unit: "",
    });

    onSendData("dataCement", data);
  };
  return (
    <Fragment>
      <Input
        label="Xi măng(SL)"
        type="number"
        value={dataSubmit?.quantity}
        onChange={(e) => handleChange("quantity", e.target.value)}
        classLabel="form-label"
        classInput="form-control"
        customClass="cement"
      />
      <SelectInput
        placeholderSelect="Công thanh"
        onChange={(e) => handleChange("option", e)}
        option={dataSubmit?.option}
        isSearchable
        listOptionString={listOptionCement}
        label="Loại"
      />
      <SelectInput
        placeholderSelect="tấn"
        onChange={(e) => handleChange("unit", e)}
        option={dataSubmit?.unit}
        isSearchable
        listOptionString={listOptionUnitCement}
        label="Đơn vị"
        customClass="unit"
      />
      <Input
        label="Giá"
        type="number"
        value={dataSubmit?.price}
        onChange={(e) => handleChange("unit", e.target.value)}
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

ItemFormCement.propTypes = {
  onSendData: PropTypes.func,
};

export default ItemFormCement;
