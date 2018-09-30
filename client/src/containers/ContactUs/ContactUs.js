import React from "react";
import "./ContactUs.css";

class ContactUs extends React.Component {
  state = {
    name: "",
    subject: "",
    message: "",
    email: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.setState({
      formSubmitted: true
    });
    //console.log(this.state);
    if (
      this.state.name.length === 0 ||
      this.state.email.length === 0 ||
      this.state.message.length === 0 ||
      this.state.subject.length === 0
    ) {
      // invalid
      this.setState({
        formValid: false
      });
    } else {
      //valid
      this.setState({ formValid: true });
      document.getElementById("contact-form").reset();
    }
  };
  onClick = e => {
    this.onSubmit(e);
  };
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(state[e.target.name]);
  };

  render() {
    return (
      <div>
        <div className="section">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Contact us
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within matter of hours to
            help you.
          </p>
          {this.state.formValid && this.state.formSubmitted ? (
            <div class="alert alert-success" role="alert">
              <strong>Well done!</strong> You successfully read this important
              alert message.
            </div>
          ) : null}
          {!this.state.formValid && this.state.formSubmitted ? (
            <div class="alert alert-danger" role="alert">
              <strong>Oh snap!</strong> Change a few things up and try
              submitting again.
            </div>
          ) : null}
          <div className="row">
            <div className="col-md-12 mb-md-0 mb-5">
              <form
                onSubmit={this.onSubmit}
                id="contact-form"
                name="contact-form"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        onChange={this.onChange}
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      />
                      <label for="name" className="">
                        Your name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        onChange={this.onChange}
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                      <label for="email" className="">
                        Your email
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        onChange={this.onChange}
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      />
                      <label for="subject" className="">
                        Subject
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        onChange={this.onChange}
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                      />
                      <label for="message">Your message</label>
                    </div>
                  </div>
                </div>
              </form>

              <div className="text-center text-md-left">
                <button
                  className="btn btn-large btn-primary"
                  onClick={this.onClick}
                  type="submit"
                >
                  Send
                </button>
              </div>
              <div className="status" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
