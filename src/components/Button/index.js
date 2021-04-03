import React, { memo } from "react";
import PropTypes from "prop-types";

const Button = ({ isDisabled, onClick, customClass, children, type }) => {
  return (
    <button
      type={type}
      className={`button ${customClass}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.string,
  isDisabled: PropTypes.any,
  customClass: PropTypes.string,
  children: PropTypes.any,
  type: PropTypes.string,
};

Button.defaultProps = {
  isDisabled: false,
  customClass: "",
  type: "submit",
};

export default memo(Button);
