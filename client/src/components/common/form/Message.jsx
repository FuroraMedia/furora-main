import React, { PropTypes } from 'react';

const Message = ({ formValidation }) => {
  let wrapperClass = 'o-layout__item u-1/1 c-form__dialog u-margin-bottom';
  
  if (formValidation.success === true) {
    wrapperClass += ' c-form__dialog--success';
  } else {
    wrapperClass += ' c-form__dialog--error';
  }
  // if (error && error.length > 0) {
  //   wrapperClass += ' c-form__group--error';
  // }

  return (
    <div>
      {formValidation.show &&
      <div className={wrapperClass}>
        <div className="o-block u-padding">{formValidation.message || 'Something Went Wrong'}</div>
      </div>}
    </div>
  );
};
Message.propTypes = {
  formValidation: PropTypes.object,
  // error: PropTypes.object,
};

Message.defaultProps = {
  formValidation: {},
  // error: {},
};

export default Message;
