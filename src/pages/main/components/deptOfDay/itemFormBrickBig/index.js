import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { listOptionBrickBig } from "../../../../../common/listOption";
import Input from "../../../../../components/Input";
import SelectInput from "../../../../../components/Select";
import IMAGES from "../../../../../themes/images";

const ItemFormBrickBig = ({ onSendData }) => {
  const [dataSubmit, setDataSubmit] = useState({
    option: listOptionBrickBig[0],
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
      title: "Gạch xe lớn(số lượng)",
      category: dataSubmit?.option?.value,
      quantity: dataSubmit?.quantity && parseInt(dataSubmit?.quantity),
      price: dataSubmit?.price && parseInt(dataSubmit?.price),
    };

    setDataSubmit({
      option: "",
      quantity: "",
      price: "",
    });

    onSendData("dataBrickBig", data);
  };

  return (
    <Fragment>
      <Input
        label="Gạch xe lớn(SL)"
        type="number"
        value={dataSubmit?.quantity}
        onChange={(e) => handleChange("quantity", e.target.value)}
        classLabel="form-label"
        classInput="form-control"
        customClass="brick"
      />
      <SelectInput
        placeholderSelect="Thanh châu lớn"
        onChange={(e) => handleChange("option", e)}
        option={dataSubmit?.option}
        isSearchable
        listOptionString={listOptionBrickBig}
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

ItemFormBrickBig.propTypes = {
  onSendData: PropTypes.func,
};
export default ItemFormBrickBig;
