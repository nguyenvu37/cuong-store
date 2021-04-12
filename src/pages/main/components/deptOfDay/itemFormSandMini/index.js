import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { listOptionSandMini } from "../../../../../common/listOption";
import Input from "../../../../../components/Input";
import SelectInput from "../../../../../components/Select";
import IMAGES from "../../../../../themes/images";

const ItemFormSandMini = ({ onSendData }) => {
  const [dataSubmit, setDataSubmit] = useState({
    option: listOptionSandMini[0],
    quantity: "",
    price: "",
  });

  const handleChange = (name, value) => {
    setDataSubmit({
      ...dataSubmit,
      [name]: value,
    });
  };

  const handlePlusSandBig = () => {
    let data = {
      id: uuidv4(),
      title: "Cát xe Nhỏ",
      category: dataSubmit?.option?.value,
      quantity: dataSubmit?.quantity && parseInt(dataSubmit?.quantity),
      price: dataSubmit?.price && parseInt(dataSubmit?.price),
      unit: "khối",
    };

    if (dataSubmit.quantity && dataSubmit.price) {
      setDataSubmit({
        option: listOptionSandMini[0],
        quantity: "",
        price: "",
      });

      onSendData("dataSandMini", data);
    } else alert("Phải nhập đầy đủ số liệu");
  };

  return (
    <Fragment>
      <Input
        label="Cát xe nhỏ (Khối)"
        type="number"
        value={dataSubmit?.quantity}
        onChange={(e) => handleChange("quantity", e.target.value)}
        classLabel="form-label"
        classInput="form-control"
        customClass="sand-mini"
      />
      <SelectInput
        placeholderSelect="xây"
        onChange={(e) => handleChange("option", e)}
        option={dataSubmit?.option}
        isSearchable
        listOptionString={listOptionSandMini}
        label="Loại"
      />
      <Input
        label="Giá"
        type="number"
        value={dataSubmit?.price}
        onChange={(e) => handleChange("price", e.target.value)}
        classLabel="form-label"
        classInput="form-control"
        customClass="price"
        // placeholder={}
      />

      <div className="plus">
        <img src={IMAGES.plus} alt="" onClick={handlePlusSandBig} />
      </div>
    </Fragment>
  );
};

ItemFormSandMini.propTypes = {
  onSendData: PropTypes.func,
};
export default ItemFormSandMini;
