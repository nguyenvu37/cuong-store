import PropTypes from "prop-types";
import React from "react";
import Creatable from "react-select/creatable";

const CreateSelect = ({
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
  isClearable,
}) => {
  return (
    <>
      <div className={`customer-select ${customClass}`}>
        {label && <p className={`input-label ${classLabel}`}>{label}</p>}
        <Creatable
          isClearable={isClearable}
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

CreateSelect.propTypes = {
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
  isClearable: PropTypes.bool,
};

export default CreateSelect;
