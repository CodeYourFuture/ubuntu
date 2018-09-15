import React from "react";
import * as api from "../../helpers/api";

class ShelterFooter extends React.Component {
  state = {
    email: ""
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  render() {
    return (
      // <div className="container">
      //   <div className="row">
      //     <div className="col-12 col-md-6 offset-md-3">
      //       <form onSubmit={this.onSubmit}>
      //         <p className="h4 text-center mb-4">
      //           Please provide all the information requested. Your registration
      //           cannot be completed without it.
      //         </p>
      //         <div className="form-group">
      //           <label htmlFor="contactName" className="sr-only">
      //             Your name
      //           </label>
      //           <input
      //             type="text"
      //             name="contactName"
      //             onChange={this.onChange}
      //             id="contactName"
      //             placeholder="Your name"
      //             className="form-control"
      //             required
      //           />
      //         </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Subscribe to our mailing list</label>
                  <input
                    type="email"
                    name="email"
                    onChange={this.onChange}
                    id="email"
                    placeholder="email"
                    className="form-control"
                  />
                </div>

                <div className="text-center mt-4">
                  <button className="btn btn-large btn-primary">
                    <label htmlFor="submit"> Subscribe</label>
                  </button>
                </div>
              </form>

              <div>twitter button</div>
              <div>fb button</div>
              <div>shelter name copyright info</div>
              <div>developed by cfy info</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default ShelterFooter;
