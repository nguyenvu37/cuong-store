import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  listOptionSteel,
  listOptionSteelBrand,
} from "../../../../../common/listOption";
import Input from "../../../../../components/Input";
import SelectInput from "../../../../../components/Select";
import CreateSelect from "../../../../../components/SelectCreatable";
import IMAGES from "../../../../../themes/images";

const ItemFormSteel = ({ onSendData }) => {
  const [dataSubmit, setDataSubmit] = useState({
    option: listOptionSteelBrand[0],
    quantity: "",
    price: "",
    unit: "",
    title: listOptionSteel[0],
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
      title: dataSubmit?.title,
      category: dataSubmit?.optionCeramic?.value,
      quantity: dataSubmit?.quantity && parseInt(dataSubmit?.quantity),
      price: dataSubmit?.price && parseInt(dataSubmit?.price),
      unit: dataSubmit?.unit && parseInt(dataSubmit?.unit),
    };

    if (dataSubmit.quantity && dataSubmit.price && dataSubmit.unit) {
      setDataSubmit({
        option: listOptionSteelBrand[0],
        quantity: "",
        price: "",
        unit: "",
        title: listOptionSteel[0],
      });

      onSendData("dataSteel", data);
    } else alert("Phải nhập đầy đủ số liệu");
  };
  return (
    <Fragment>
      <SelectInput
        placeholderSelect="Sắt 6"
        onChange={(e) => handleChange("title", e)}
        option={dataSubmit?.title}
        isSearchable
        listOptionString={listOptionSteel}
        label="Sắt"
        customClass="steel"
      />
      <CreateSelect
        isClearable
        placeholderSelect="Hòa phát"
        onChange={(e) => handleChange("option", e)}
        option={dataSubmit?.option}
        isSearchable
        listOptionString={listOptionSteelBrand}
        label="Nhãn hàng"
        customClass="brand-steel"
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

ItemFormSteel.propTypes = {
  onSendData: PropTypes.func,
};
export default ItemFormSteel;
