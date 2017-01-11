import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import validator from 'validator';

import ContactForm from './ContactForm';
import SuccessMsg from '../common/form/SuccessMessage';
import * as formActions from '../../actions/formActions';

class ContactSection extends React.Component {
  constructor(props, context) {
    super(props, context);
    //console.log(props)
    
    this.state = {
      message: Object.assign({}, props.message),
      errors: {},
      saving: false,
      showForm: true,
      recaptchaVerified: false,
    };

    this.submitForm = this.submitForm.bind(this);
    this.updateMessageState = this.updateMessageState.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
  updateMessageState(event) {
    const field = event.target.name;
    let message = this.state.message;
    message[field] = event.target.value;
    return this.setState({ message: message });
  }
  
  courseFormIsValid() {
    let formIsValid = true;
    let errors = {};
    if (!this.state.message.name) {
      errors.name = 'A name must be required';
      formIsValid = false;
    }
    if (!this.state.message.email) {
      errors.email = 'A email address is required';
      formIsValid = false;
    }
    if (this.state.message.email && !validator.isEmail(this.state.message.email)) {
      errors.email = 'Not a Valid email';
      formIsValid = false;
    }
    if (!this.state.message.message) {
      errors.message = 'A message is required';
      formIsValid = false;
    }
    if (this.state.recaptchaVerified === false) {
      formIsValid = false;
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  submitForm(event) {
    event.preventDefault();

    if (!this.courseFormIsValid()) {
      return;
    }
    this.setState({ saving: true });
    this.props.actions.saveMessage(this.state.message)
    .then(() => {
      this.setState({ saving: false });
      //this.resetForm();
    })
    .catch((error) => {
      // console.log('error', error);
      this.setState({ saving: false });
      //this.props.actions.reset();
    });
  }
  resetForm() {
    console.log('reset');
    this.props.actions.resetForm({});
  }
  verifyCallback() {
    return this.setState({ recaptchaVerified: true });
  }

  render() {
    return (
      <section className="o-wrapper c-contact">
        <div className="o-layout">
          <div className="o-layout__item u-1/1">
          
          {/* <button onClick={this.resetForm}>reset</button> */}
          {/* {!this.state.showForm && <SuccessMsg />} */}
            { this.state.showForm && <ContactForm
              onChange={this.updateMessageState}
              onSubmit={this.submitForm}
              message={this.state.message}
              errors={this.state.errors}
              saving={this.state.saving}
              recaptchaVerified={this.state.recaptchaVerified}
              recaptchaVerifiedCallback={this.verifyCallback}
            />}

          </div>

        </div>
      </section>
    );
  }
}

ContactSection.propTypes = {
  message: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    message: state.message,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(formActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactSection);
