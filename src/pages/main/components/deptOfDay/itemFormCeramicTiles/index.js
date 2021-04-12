import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  listOptionUnitCeramic,
  listOptionCeramic,
} from "../../../../../common/listOption";
import Input from "../../../../../components/Input";
import SelectInput from "../../../../../components/Select";
import CreateSelect from "../../../../../components/SelectCreatable";
import IMAGES from "../../../../../themes/images";

const ItemFromCeramic = ({ onSendData }) => {
  const [dataSubmit, setDataSubmit] = useState({
    optionCeramic: listOptionCeramic[0],
    quantity: "",
    price: "",
    unit: listOptionUnitCeramic[0],
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
      title: dataSubmit?.title,
      category: dataSubmit?.optionCeramic?.value,
      quantity: dataSubmit?.quantity && parseInt(dataSubmit?.quantity),
      price: dataSubmit?.price && parseInt(dataSubmit?.price),
      unit: dataSubmit?.unit && parseInt(dataSubmit?.unit),
    };

    if (dataSubmit.quantity && dataSubmit.price && dataSubmit.title) {
      setDataSubmit({
        optionCeramic: listOptionCeramic[0],
        quantity: "",
        price: "",
        unit: listOptionUnitCeramic[0],
        title: "",
      });

      onSendData("dataCeramic", data);
    } else alert("Phải nhập đầy đủ số liệu");
  };
  return (
    <Fragment>
      <Input
        label="Gạch men"
        type="text"
        value={dataSubmit?.title}
        onChange={(e) => handleChange("title", e.target.value)}
        classLabel="form-label"
        classInput="form-control"
        customClass="ceramic-tiles"
      />
      <CreateSelect
        isClearable
        placeholderSelect="25x25"
        onChange={(e) => handleChange("optionCeramic", e)}
        option={dataSubmit?.optionCeramic}
        isSearchable
        listOptionString={listOptionCeramic}
        label="Loại"
        customClass="ceramic"
      />
      <SelectInput
        placeholderSelect="thùng"
        onChange={(e) => handleChange("unit", e)}
        option={dataSubmit?.unit}
        isSearchable
        listOptionString={listOptionUnitCeramic}
        label="Đơn vị"
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
        // placeholder={formatNumber(0)}
      />

      <div className="plus">
        <img src={IMAGES.plus} alt="" onClick={handlePlus} />
      </div>
    </Fragment>
  );
};

ItemFromCeramic.propTypes = {
  onSendData: PropTypes.func,
};

export default ItemFromCeramic;
