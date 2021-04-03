import React, { memo } from "react";
import PropTypes from "prop-types";

const Input = ({
  customClass,
  classInput,
  classLabel,
  label,
  placeholder,
  value,
  disabled,
  type,
  innerRef,
  onChange,
  errorMsg,
}) => {
  return (
    <div className={`input ${customClass}`}>
      {label && <p className={`input-label ${classLabel}`}>{label}</p>}
      <input
        className={`${classInput}`}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        type={type}
        ref={innerRef}
        onChange={(e) => onChange(e)}
      />
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
    </div>
  );
};

Input.propTypes = {
  customClass: PropTypes.string,
  classInput: PropTypes.string,
  classLabel: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  innerRef: PropTypes.any,
  onChange: PropTypes.func,
  errorMsg: PropTypes.string,
};

export default memo(Input);
