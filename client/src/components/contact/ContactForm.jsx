import React from 'react';
import { reduxForm } from 'redux-form';
import TextInput from '../common/form/TextInput';
//import SelectInput from '../common/form/SelectInput';

const ContactForm = () => {
  return (
    <form>
      <h3>Manage Course</h3>
      <TextInput
        name="name"
        label="Your Name"
        //value={course.title}
        // onChange={onChange}
        //error={errors.title}
      />

      {/* <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange} error={errors.authorId}
      /> */}

      <TextInput
        name="email"
        label="Your Email"
        //value={course.category}
        // onChange={onChange}
        //error={errors.category}
      />

      <TextInput
        name="message"
        label="Your Message"
        // value={course.length}
        // onChange={onChange}
        //error={errors.length}
      />

      <input
        type="Send Message"
        //disabled={saving}
        // value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        //onClick={onSave}
      />
    </form>
  );
};

ContactForm.propTypes = {
  //onSave: React.PropTypes.func.isRequired,
  // onChange: React.PropTypes.func.isRequired,
  // saving: React.PropTypes.bool,
  //errors: React.PropTypes.object
};

export default ContactForm;
