import React from 'react';
//import Recaptcha from 'react-gcaptcha';
import TextInput from '../common/form/TextInput';
import TextArea from '../common/form/TextArea';

const ContactForm = ({ message, onSubmit, onChange, saving, errors }) => {
  return (
      <form className="c-form">
        <div className="o-layout">
          <div className="o-layout__item u-1/1 u-1/2@tablet u-1/2@desktop">
            <TextInput
              name="name"
              label="Your Name"
              value={message.name}
              onChange={onChange}
              error={errors.name}
            />
          </div>
          <div className="o-layout__item u-1/1 u-1/2@tablet u-1/2@desktop">
            <TextInput
              name="email"
              label="Your Email"
              value={message.email}
              onChange={onChange}
              error={errors.email}
            />
          </div>
          <div className="o-layout__item u-1/1">
            <TextArea
              name="message"
              label="Your Message"
              value={message.message}
              onChange={onChange}
              error={errors.message}
            />
          </div>
          
          <div className="o-layout__item u-1/1">
            <input
              type="submit"
              disabled={saving}
              // value={saving ? 'Saving...' : 'Save'}
              className="c-btn c-btn--primary"
              value="submit"
              onClick={onSubmit}
            />
          </div>
        </div>
      </form>
  );
};

ContactForm.propTypes = {
  message: React.PropTypes.object.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object,
};

export default ContactForm;
