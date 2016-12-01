import React from 'react';
import TextInput from '../common/form/TextInput';
//import SelectInput from '../common/form/SelectInput';

const ContactForm = ({ message, onSubmit, onChange, saving, errors }) => {
  return (
    <form>
      <h3>Contact form</h3>
      <TextInput
        name="name"
        label="Your Name"
        value={message.name}
        onChange={onChange}
        error={errors.name}
      />
      <TextInput
        name="email"
        label="Your Email"
        value={message.email}
        onChange={onChange}
        error={errors.email}
      />

      <TextInput
        name="message"
        label="Your Message"
        value={message.message}
        onChange={onChange}
        error={errors.message}
      />

      <input
        type="submit"
        disabled={saving}
        // value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        value="submit"
        onClick={onSubmit}
      />
    </form>
  );
};

ContactForm.propTypes = {
  message: React.PropTypes.object.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default ContactForm;
