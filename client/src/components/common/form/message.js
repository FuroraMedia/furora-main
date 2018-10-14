import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  formValidation: PropTypes.object,
};

const Message = ({ formValidation }) => {
  let wrapperClass = 'o-layout__item u-1/1 c-form__dialog u-margin-bottom';
  if (formValidation.success === true) {
    wrapperClass += ' c-form__dialog--success';
  } else {
    wrapperClass += ' c-form__dialog--error';
  }

  return (
    <div>
      {formValidation.show &&
      <div className={wrapperClass}>
        <div className="o-block u-padding">{formValidation.message}</div>
      </div>}
    </div>
  );
};
Message.propTypes = propTypes;

Message.defaultProps = {
  formValidation: {},
};

export default Message;
