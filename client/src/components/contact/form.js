import React from "react";
import PropTypes from "prop-types";
import ReCAPTCHA from "react-google-recaptcha";
import TextInput from "../common/form/textInput";
import TextArea from "../common/form/textArea";
import Message from "../common/form/message";

const propTypes = {
  message: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.Object,
  recaptchaVerified: PropTypes.bool.isRequired,
  recaptchaVerifiedCallback: PropTypes.func.isRequired,
  formValidation: PropTypes.object
};

const recaptchaRef = React.createRef();

const defaultProps = {
  saving: false,
  errors: {},
  formValidation: {}
};

const ContactForm = ({
  message,
  onSubmit,
  onChange,
  saving,
  errors,
  recaptchaVerified,
  recaptchaVerifiedCallback,
  formValidation
}) => (
  <form className="c-form">
    {saving && <div>Save</div>}
    <div className="o-layout">
      <div className="o-layout__item u-1/1">
        <h3 className="u-margin-bottom">For Quotes and avalability please fill form below.</h3>
      </div>
      <Message formValidation={formValidation} />
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
          <ReCAPTCHA
            style={{ display: "inline-block" }}
            ref={recaptchaRef}
            sitekey="6LdOtA4UAAAAAK8KZZz3G86eBImM2IrFGnJ-K_SY"
            onChange={recaptchaVerifiedCallback}
          />
        </div>
      </div>
      <div className="o-layout__item u-1/1">
        <input
          type="submit"
          disabled={!recaptchaVerified}
          value={saving ? "Saving..." : "Submit"}
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
