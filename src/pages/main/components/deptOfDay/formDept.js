import React, { useState } from "react";
import Input from "../../../../components/Input";
import ItemFormAccessories from "./itemFormAccessories/itemFormAccessories";
import ItemFormRockBig from "./itemFormRockBig";
import ItemFormSandBig from "./itemFormSandBig/itemFormSandBig";
import ItemFormSandMini from "./itemFormSandMini";
import ItemFormTube from "./itemFormTube/itemFormTube";
import ItemFormRockMini from "./itemFormRockMini";
import ItemFormBrickBig from "./itemFormBrickBig";
import ItemFormBrickMini from "./itemFormBrickMini";
import ItemFormCement from "./itemFormCement";
import ItemFormTile from "./itemFormTile";
import ItemFromCeramic from "./itemFormCeramicTiles";

const FormDept = () => {
  const [dataSubmit, setDataSubmit] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const [dataAcc, setDataAcc] = useState([]);
  const [dataTube, setDataTube] = useState([]);
  const [dataSandBig, setDataSandBig] = useState([]);
  const [dataSandMini, setDataSandMini] = useState([]);
  const [dataRockBig, setDataRockBig] = useState([]);
  const [dataRockMini, setDataRockMini] = useState([]);
  const [dataBrickBig, setDataBrickBig] = useState([]);
  const [dataBrickMini, setDataBrickMini] = useState([]);
  const [dataCement, setDataCement] = useState([]);
  const [dataTile, setDataTile] = useState([]);
  const [dataCeramic, setDataCeramic] = useState([]);

  const handleSendData = (type, data) => {
    if (type === "dataAcc") {
      setDataAcc([...dataAcc, data]);
    }

    if (type === "dataTube") {
      setDataTube([...dataTube, data]);
    }

    if (type === "dataSandBig") {
      setDataSandBig([...dataSandBig, data]);
    }

    if (type === "dataSandMini") {
      setDataSandMini([...dataSandMini, data]);
    }

    if (type === "dataRockBig") {
      setDataRockBig([...dataRockBig, data]);
    }

    if (type === "dataRockMini") {
      setDataRockMini([...dataRockMini, data]);
    }

    if (type === "dataBrickBig") {
      setDataBrickBig([...dataBrickBig, data]);
    }

    if (type === "dataBrickMini") {
      setDataBrickMini([...dataBrickMini, data]);
    }

    if (type === "dataCement") {
      setDataCement([...dataCement, data]);
    }

    if (type === "dataTile") {
      setDataTile([...dataTile, data]);
    }

    if (type === "dataCeramic") {
      setDataCeramic([...dataCeramic, data]);
    }
  };

  const handleChange = (name, value) => {
    setDataSubmit({
      ...dataSubmit,
      [name]: value,
    });
  };

  return (
    <form>
      <div className="form-group">
        <Input
          label="T??n ng?????i n???"
          type="text"
          value={dataSubmit?.name}
          onChange={(e) => handleChange("name", e.target.value)}
          classLabel="form-label"
          classInput="form-control"
          customClass="name"
          placeholder="H??? v?? t??n"
        />
      </div>

      <div className="form-group">
        <Input
          label="?????a ch???"
          type="text"
          value={dataSubmit?.address}
          onChange={(e) => handleChange("address", e.target.value)}
          classLabel="form-label"
          classInput="form-control"
          customClass="address"
          placeholder="?????a ch???"
        />
      </div>

      <div className="form-group">
        <Input
          label="Li??n h???"
          type="text"
          value={dataSubmit?.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          classLabel="form-label"
          classInput="form-control"
          customClass="contact"
          placeholder="S??? ??i???n tho???i"
        />
      </div>

      <div className="form-inline form-sand-big">
        <ItemFormSandBig onSendData={handleSendData} />
      </div>

      <div className="form-inline form-sand-mini">
        <ItemFormSandMini onSendData={handleSendData} />
      </div>

      <div className="form-inline form-rock-big">
        <ItemFormRockBig onSendData={handleSendData} />
      </div>

      <div className="form-inline form-rock-mini">
        <ItemFormRockMini onSendData={handleSendData} />
      </div>

      <div className="form-inline form-brick-big">
        <ItemFormBrickBig onSendData={handleSendData} />
      </div>

      <div className="form-inline form-brick-mini">
        <ItemFormBrickMini onSendData={handleSendData} />
      </div>

      <div className="form-inline">
        <ItemFormCement onSendData={handleSendData} />
      </div>

      <div className="form-inline form-tile">
        <ItemFormTile onSendData={handleSendData} />
      </div>

      <div className="form-inline form-ceramic-tiles">
        <ItemFromCeramic onSendData={handleSendData} />
      </div>

      <div className="plastic my-3">
        <h4>????? n?????c</h4>
        <ItemFormTube onSendData={handleSendData} />
        <ItemFormAccessories onSendData={handleSendData} />
      </div>

      <div className="electric my-3">
        <h4>????? ??i???n</h4>
      </div>
    </form>
  );
};

export default FormDept;
