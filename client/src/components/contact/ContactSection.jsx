import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';

import * as formActions from '../../actions/formActions';

class ContactSection extends React.Component {
  
  constructor(props, context) {
    super(props, context);
    this.state = {
      message: Object.assign({}, props.message),
      errors: {},
      saving: false,
    };
    this.submitForm = this.submitForm.bind(this);
    this.updateMessageState = this.updateMessageState.bind(this);
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

    // if (this.state.course.title.length < 5) {
    //   errors.title = 'Title must be at least 5 characters.';
    //   formIsValid = false;
    // }

    this.setState({errors: errors});
    return formIsValid;
  }
  
  submitForm(event) {
    event.preventDefault();

    if (!this.courseFormIsValid()) {
      return;
    }
    
    this.props.actions.saveMessage(this.state.message);
    this.setState({ saving: true });
  }

  render() {
    return (
      <section>
        <ContactForm 
          onChange={this.updateMessageState}
          onSubmit={this.submitForm}
          message={this.state.message}
          errors={this.state.errors}
          saving={this.state.saving}
        />
      </section>
    );
  }
}


ContactSection.propTypes = {
  message: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  let message = { 'name': '', email: '', message: '' };
  return {
    message,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(formActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactSection);
