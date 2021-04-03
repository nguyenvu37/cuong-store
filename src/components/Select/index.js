import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Select from "react-select";

const SelectInput = ({
  placeholderSelect,
  innerRef,
  option,
  onChange,
  noOptionsMessage,
  listOptionString,
  errorMsg,
  onBlur,
  customClass,
  disabled,
  isSearchable,
  label,
  classLabel,
}) => {
  return (
    <>
      <div className={`customer-select ${customClass}`}>
        {label && <p className={`input-label ${classLabel}`}>{label}</p>}
        <Select
          placeholder={placeholderSelect}
          ref={innerRef}
          value={option || null}
          onChange={onChange}
          noOptionsMessage={noOptionsMessage}
          options={listOptionString}
          blurInputOnSelect={onBlur}
          isDisabled={disabled}
          isSearchable={isSearchable}
        />
        {errorMsg && <p className="error-msg">{errorMsg}</p>}
      </div>
    </>
  );
};

SelectInput.propTypes = {
  placeholderSelect: PropTypes.string,
  innerRef: PropTypes.any,
  option: PropTypes.object,
  onChange: PropTypes.func,
  noOptionsMessage: PropTypes.func,
  listOptionString: PropTypes.array,
  listItem: PropTypes.array,
  errorMsg: PropTypes.string,
  onBlur: PropTypes.func,
  customClass: PropTypes.string,
  disabled: PropTypes.bool,
  isSearchable: PropTypes.bool,
  label: PropTypes.string,
  classLabel: PropTypes.string,
};

export default SelectInput;
