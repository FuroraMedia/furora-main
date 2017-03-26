import React, { PropTypes } from 'react';

const SuccessMsg = ({ success, error }) => {
  let wrapperClass = 'o-layout__item u-1/1';
  if (error && error.length > 0) {
    wrapperClass += ' c-form__group--error';
  }
  return (
    <div>
      {success && <div className={wrapperClass}>
        <p>Thank you, we will try to respond to your query asap</p>
        </div>
      }
      {error && <div className={wrapperClass}>
        <p>Sorry Something has gone wrong</p>
        </div>
      }
    </div>
  );
};
SuccessMsg.propTypes = {
  success: PropTypes.bool,
  error: PropTypes.bool,
};

SuccessMsg.defaultProps = {
  success: false,
  error: false,
};

export default SuccessMsg;
