import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { listOptionRock } from "../../../../../common/listOption";
import Input from "../../../../../components/Input";
import SelectInput from "../../../../../components/Select";
import IMAGES from "../../../../../themes/images";

const ItemFormRockBig = ({ onSendData }) => {
  const [dataSubmit, setDataSubmit] = useState({
    option: listOptionRock[0],
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
      title: "Đá xe lớn",
      category: dataSubmit?.option?.value,
      quantity: dataSubmit?.quantity && parseInt(dataSubmit?.quantity),
      price: dataSubmit?.price && parseInt(dataSubmit?.price),
      unit: "khối",
    };

    setDataSubmit({
      option: listOptionRock[0],
      quantity: "",
      price: "",
    });

    onSendData("dataRockBig", data);
  };

  return (
    <Fragment>
      <Input
        label="Đá xe lớn (Khối)"
        type="number"
        value={dataSubmit?.quantity}
        onChange={(e) => handleChange("quantity", e.target.value)}
        classLabel="form-label"
        classInput="form-control"
        customClass="rock-big"
      />
      <SelectInput
        placeholderSelect="1x2"
        onChange={(e) => handleChange("option", e)}
        option={dataSubmit?.option}
        isSearchable
        listOptionString={listOptionRock}
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
        // placeholder={formatNumber(0)}
      />

      <div className="plus">
        <img src={IMAGES.plus} alt="" onClick={handlePlus} />
      </div>
    </Fragment>
  );
};

ItemFormRockBig.propTypes = {
  onSendData: PropTypes.func,
};
export default ItemFormRockBig;
