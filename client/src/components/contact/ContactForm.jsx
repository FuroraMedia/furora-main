import React from 'react';
import Recaptcha from 'react-gcaptcha';
import TextInput from '../common/form/TextInput';
import TextArea from '../common/form/TextArea';

const propTypes = {
  message: React.PropTypes.object.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object,
  recaptchaVerified: React.PropTypes.bool.isRequired,
  recaptchaVerifiedCallback: React.PropTypes.func.isRequired,
};

const defaultProps = {
  saving: false,
  errors: {},
};

const ContactForm = ({
  message,
  onSubmit,
  onChange,
  saving,
  errors,
  recaptchaVerified,
  recaptchaVerifiedCallback,
}) => (
  <form className="c-form" role="form">
    <div className="o-layout">
      <div className="o-layout__item u-1/1">
        <h3 className="u-margin-bottom">For Quotes and avalability please fill form below.</h3>
      </div>
      <div className="o-layout__item u-1/1 u-1/2@tablet u-1/2@desktop">
        <TextInput
          name="name"
          label="Your Name"
          value={message.name}
          onChange={onChange}
          // placeholder="Your Name"
          error={errors.name}
          required="required"
        />
      </div>
      <div className="o-layout__item u-1/1 u-1/2@tablet u-1/2@desktop">
        <TextInput
          name="email"
          label="Your Email"
          value={message.email}
          onChange={onChange}
          // placeholder="Your Email"
          error={errors.email}
          required="required"
        />
      </div>
      <div className="o-layout__item u-1/1">
        <TextArea
          name="message"
          label="Your Message"
          value={message.message}
          onChange={onChange}
          // placeholder="Your Message"
          error={errors.message}
          required="required"
        />
      </div>
      <div className="o-layout__item u-1/1">
        <div className="u-margin-bottom">
          <Recaptcha
            sitekey="6LdOtA4UAAAAAK8KZZz3G86eBImM2IrFGnJ-K_SY"
            // onloadCallback={loaded}
            verifyCallback={recaptchaVerifiedCallback}
          />
        </div>
      </div>
      <div className="o-layout__item u-1/1">
        <input
          type="submit"
          disabled={!recaptchaVerified}
          value={saving ? 'Saving...' : 'Submit'}
          className="c-btn c-btn--primary"
          onClick={onSubmit}
        />
      </div>
    </div>
  </form>
);

ContactForm.propTypes = propTypes;
ContactForm.defaultProps = defaultProps;
export default ContactForm;
