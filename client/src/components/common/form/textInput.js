import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, label, onChange, value, error }) => {
  let wrapperClass = 'c-form__group u-margin-bottom';
  if (error && error.length > 0) {
    wrapperClass += ' c-form__group--error';
  }
  return (
    <fieldset className={wrapperClass}>
      <label className="c-form__label" htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        className="c-form__input u-margin-top-small u-padding-bottom-small"
        // placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-required="true"
      />
      {error &&
        <div className="c-form__message c-form__message--alert u-margin-top-small">
          {error}
        </div>
      }
    </fieldset>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  // placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  error: '',
};

export default TextInput;
