import React, { useEffect, useState } from "react";
import Input from "../../../../../components/Input";
import ItemFormRockBig from "../itemFormRockBig";
import ItemFormSandBig from "../itemFormSandBig/itemFormSandBig";
import ItemFormSandMini from "../itemFormSandMini";
import ItemFormTube from "../itemFormTube/itemFormTube";
import ItemFormRockMini from "../itemFormRockMini";
import ItemFormBrickBig from "../itemFormBrickBig";
import ItemFormBrickMini from "../itemFormBrickMini";
import ItemFormCement from "../itemFormCement";
import ItemFormTile from "../itemFormTile";
import ItemFromCeramic from "../itemFormCeramicTiles";
import ItemFormElectric from "../itemFormElectric";
import ItemFormHouseware from "../itemFormHouseware";
import ItemFormAccessories from "../itemFormAccessories/itemFormAccessories";
import ItemFormSteel from "../itemFormSteel";
// import Button from "../../../../../components/Button";
import { useDispatch } from "react-redux";
import { Creators } from "../../../redux";

const FormDept = () => {
  const [dataSubmit, setDataSubmit] = useState({
    name: "",
    address: "",
    phone: "",
    dataAcc: [],
    dataTube: [],
    dataSandBig: [],
    dataSandMini: [],
    dataRockBig: [],
    dataRockMini: [],
    dataBrickBig: [],
    dataBrickMini: [],
    dataCement: [],
    dataTile: [],
    dataCeramic: [],
    dataElectric: [],
    dataHouseware: [],
    dataSteel: [],
  });

  const dispatch = useDispatch();

  const handleSendData = (type, data) => {
    switch (type) {
      case "dataAcc":
        setDataSubmit({
          ...dataSubmit,
          dataAcc: [...dataSubmit.dataAcc, data],
        });
        break;

      case "dataTube":
        setDataSubmit({
          ...dataSubmit,
          dataTube: [...dataSubmit.dataTube, data],
        });
        break;

      case "dataSandBig":
        setDataSubmit({
          ...dataSubmit,
          dataSandBig: [...dataSubmit.dataSandBig, data],
        });
        break;

      case "dataSandMini":
        setDataSubmit({
          ...dataSubmit,
          dataSandMini: [...dataSubmit.dataSandMini, data],
        });
        break;

      case "dataRockBig":
        setDataSubmit({
          ...dataSubmit,
          dataRockBig: [...dataSubmit.dataRockBig, data],
        });
        break;

      case "dataRockMini":
        setDataSubmit({
          ...dataSubmit,
          dataRockMini: [...dataSubmit.dataRockMini, data],
        });
        break;

      case "dataBrickBig":
        setDataSubmit({
          ...dataSubmit,
          dataBrickBig: [...dataSubmit.dataBrickBig, data],
        });
        break;

      case "dataBrickMini":
        setDataSubmit({
          ...dataSubmit,
          dataBrickMini: [...dataSubmit.dataBrickMini, data],
        });
        break;

      case "dataCement":
        setDataSubmit({
          ...dataSubmit,
          dataCement: [...dataSubmit.dataCement, data],
        });
        break;

      case "dataTile":
        setDataSubmit({
          ...dataSubmit,
          dataTile: [...dataSubmit.dataTile, data],
        });
        break;

      case "dataCeramic":
        setDataSubmit({
          ...dataSubmit,
          dataCeramic: [...dataSubmit.dataCeramic, data],
        });
        break;

      case "dataElectric":
        setDataSubmit({
          ...dataSubmit,
          dataElectric: [...dataSubmit.dataElectric, data],
        });
        break;

      case "dataHouseware":
        setDataSubmit({
          ...dataSubmit,
          dataHouseware: [...dataSubmit.dataHouseware, data],
        });
        break;

      case "dataSteel":
        setDataSubmit({
          ...dataSubmit,
          dataSteel: [...dataSubmit.dataSteel, data],
        });
        break;

      default:
        setDataSubmit({ ...dataSubmit });
        break;
    }
  };

  useEffect(() => {
    dispatch(Creators.getListDataDept(dataSubmit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSubmit]);

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
          label="Tên người nợ"
          type="text"
          value={dataSubmit?.name}
          onChange={(e) => handleChange("name", e.target.value)}
          classLabel="form-label"
          classInput="form-control"
          customClass="name"
          placeholder="Họ và tên"
        />
      </div>

      <div className="form-group">
        <Input
          label="Địa chỉ"
          type="text"
          value={dataSubmit?.address}
          onChange={(e) => handleChange("address", e.target.value)}
          classLabel="form-label"
          classInput="form-control"
          customClass="address"
          placeholder="Địa chỉ"
        />
      </div>

      <div className="form-group">
        <Input
          label="Liên hệ"
          type="text"
          value={dataSubmit?.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          classLabel="form-label"
          classInput="form-control"
          customClass="contact"
          placeholder="Số điện thoại"
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
        <h4>Đồ nước</h4>
        <ItemFormTube onSendData={handleSendData} />
        <ItemFormAccessories onSendData={handleSendData} />
      </div>

      <div className="form-electric my-3">
        <h4>Đồ điện</h4>
        <div className="form-inline">
          <ItemFormElectric onSendData={handleSendData} />
        </div>
      </div>

      <div className="form-houseware my-3">
        <h4>Đồ Gia Dụng</h4>
        <div className="form-inline">
          <ItemFormHouseware onSendData={handleSendData} />
        </div>
      </div>

      <div className="form-steel my-3">
        <h4>Sắt thép</h4>
        <div className="form-inline">
          <ItemFormSteel onSendData={handleSendData} />
        </div>
      </div>

      {/* <div className="review">
        <Button
          type="button"
          customClass="btn btn-success btn-review"
          onClick={handleReview}
          children="Xem danh sách"
        />
      </div> */}
    </form>
  );
};

export default FormDept;
