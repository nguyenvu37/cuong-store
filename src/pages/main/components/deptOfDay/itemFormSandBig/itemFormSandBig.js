import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { listOptionSandBig } from "../../../../../common/listOption";
import Input from "../../../../../components/Input";
import SelectInput from "../../../../../components/Select";
import IMAGES from "../../../../../themes/images";

const ItemFormSandBig = ({ onSendData }) => {
  const [dataSubmit, setDataSubmit] = useState({
    option: listOptionSandBig[0],
    quantity: "",
    price: "",
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
      title: "Cát xe lớn",
      category: dataSubmit?.option?.value,
      quantity: dataSubmit?.quantity && parseInt(dataSubmit?.quantity),
      price: dataSubmit?.price && parseInt(dataSubmit?.price),
      unit: "khối",
    };

    if (dataSubmit.quantity && dataSubmit.price) {
      setDataSubmit({
        option: listOptionSandBig[0],
        quantity: "",
        price: "",
      });

      onSendData("dataSandBig", data);
    } else alert("Phải nhập đầy đủ số liệu");
  };

  return (
    <Fragment>
      <Input
        label="Cát xe lớn (Khối)"
        type="number"
        value={dataSubmit?.quantity}
        onChange={(e) => handleChange("quantity", e.target.value)}
        classLabel="form-label"
        classInput="form-control"
        customClass="sand-big"
      />
      <SelectInput
        placeholderSelect="xây"
        onChange={(e) => handleChange("option", e)}
        option={dataSubmit?.option}
        isSearchable
        listOptionString={listOptionSandBig}
        label="Loại"
        customClass=""
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
        <img src={IMAGES.plus} alt="" onClick={handlePlus} />
      </div>
    </Fragment>
  );
};

ItemFormSandBig.propTypes = {
  onSendData: PropTypes.func,
};

export default ItemFormSandBig;
