import PropTypes from "prop-types";
import React, { memo } from "react";
import IMAGES from "../../themes/images";

const Radio = ({ isChecked, onChange }) => {
  return (
    <div className="wrap-radio">
      <img
        src={isChecked ? IMAGES.radioOn : IMAGES.radioOff}
        alt=""
        onClick={onChange}
        role="presentation"
        onKeyDown={onChange}
      />
    </div>
  );
};

Radio.propTypes = {
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default memo(Radio);
