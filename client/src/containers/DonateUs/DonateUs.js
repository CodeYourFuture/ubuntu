import React from "react";
import "./DonateUs.css";
import * as api from "../../helpers/api";

class DonateUs extends React.Component {
  state = {
    email: "",
    cardnumber: "",
    expiremonthandyear: "",
    cvc: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      formSubmitted: true
    });
    //console.log(this.state);
    if (
      this.state.email.length === 0 ||
      this.state.cardnumber.length === 0 ||
      this.state.expiremonthandyear.length === 0 ||
      this.state.cvc.length === 0
    ) {
      // invalid
      this.setState({
        formValid: false
      });
    } else {
      //valid
      this.setState({ formValid: true });
      document.getElementById("donate-form").reset();
      this.setState({ formValid: true});
      api.saveUser(this.state).then(()=>{
        this.props.history.push("/DonateUs");
      });
    }
  };
  onClick = e => {
    this.onSubmit(e);
  };
  onChange = e => {
    const state = this.state;
    state[e.target.cardNumber] = e.target.value;
    this.setState(state);
    console.log(state[e.target.cardNumber]);
  };

  render() {
    return (
      <div>
        {this.state.formValid && this.state.formSubmitted ? (
          <div class="alert alert-success" role="alert">
            <strong>Well done!</strong> You successfully read this important
            alert message.
          </div>
        ) : null}
        {!this.state.formValid && this.state.formSubmitted ? (
          <div class="alert alert-danger" role="alert">
            <strong>Oh snap!</strong> Change a few things up and try submitting
            again.
          </div>
        ) : null}

        <div className="container" align-items="center">
          <div className="row">
            <div className="col-xs-12 col-md-7">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Payment Details</h3>
                </div>
                <div className="panel-body">
                  <form role="form">
                    <div className="form-group">
                      <label for="selectAmount">SELECT AMOUNT</label>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          id="selectAmount"
                          placeholder="eg.£10"
                          requried
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="cardNumber">CARD NUMBER</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="cardNumber"
                          placeholder="Valid Card Number"
                          required
                          autofocus
                        />
                        <span className="input-group-addon">
                          <span className="glyphicon glyphicon-lock" />
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-7 col-md-7">
                        <div className="form-group">
                          <label for="expityMonth">EXPIRY MONTH</label>
                          <div className="col-xs-6 col-lg-6 pl-ziro">
                            <input
                              type="text"
                              className="form-control"
                              id="expityMonth"
                              placeholder="MM"
                              required
                            />
                          </div>
                          <div className="col-xs-6 col-lg-6 pl-ziro">
                            <input
                              type="text"
                              className="form-control"
                              id="expityYear"
                              placeholder="YY"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-5 col-md-5 pull-right">
                        <div className="form-group">
                          <label for="cvCode">CV CODE</label>
                          <input
                            type="password"
                            class="form-control"
                            id="cvCode"
                            placeholder="CV"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-md-left">
            <button
              className="btn btn-large btn-primary"
              onClick={this.onClick}
              type="submit"
            >
              Donate Us
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default DonateUs;
