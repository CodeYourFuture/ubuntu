import React from "react";
import * as api from "../../helpers/api";

class OrganisationsRegister extends React.Component {
  state = {
    contactName: "",
    organisationName: "",
    address: "",
    email: "",
    phoneNumber: "",
    password: ""
  };

  onSubmit = e => {
    e.preventDefault();
    api.saveUser(this.state);
  };
  render() {
    return (
      
      // WRONG BOOTSTRAP VERSION
//       <form onSubmit={this.onSubmit} className="organisation-details">
//         <p className="h4 text-center mb-4">Register your organisation</p>
//         <label htmlFor="organisationName" className="grey-text">
//           Organisation name
//         </label>
//         <input type="text" id="organisationName" className="form-control" />
//         <br />
//         <label htmlFor="Name" className="grey-text">
//           Your name
//         </label>
//         <input type="text" id="yourName" className="form-control" />
//         <br />
//         <label htmlFor="address" className="grey-text">
//           Your address
//         </label>
//         <input type="text" id="address" className="form-control" />
//         <br />
//         <label htmlFor="email" className="grey-text">
//           Email
//         </label>
//         <input type="email" id="email" className="form-control" />
//         <br />
//         <label htmlFor="phoneNumber" className="grey-text">
//           Phone number
//         </label>
//         <input type="number" id="number" className="form-control" />
//         <br />
//         <label htmlFor="password" className="grey-text">
//           Password
//         </label>
//         <input type="password" id="password" className="form-control" />
//         <div className="text-center mt-4">
//           <button className="btn btn-unique" type="submit">
//             Register
//           </button>
//         </div>
//       </form>
//     );
//   }
// }
export default OrganisationsRegister;

/* <h1 className="heading">Register your organisation</h1>
    <div className ="container">
      
        <div className="form-group">
          <label htmlFor="contactName">Name</label>
          <input
            name="contactName"
            placeholder="Contact name"
            value={this.state.contactName}
            onChange={e => this.setState({ contactName: e.target.value })}
          />
          </div>      
          
          <br />

          <div className="form-group">
           <label htmlFor="organisationName">Organisation name</label>
           <input
            name="organisationName"
            placeholder="Organisation name"
            value={this.state.organisationName}
            onChange={e => this.setState({ organisationName: e.target.value })}
          />
          </div>

          <br />

          <div className="form-group">
           <label htmlFor="address">Address</label>
           <input
            name="address"
            placeholder="Address"
            value={this.state.address}
            onChange={e => this.setState({ address: e.target.value })}
          />
          </div>

          <br />

          <div className ="form-group">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          </div>

          <br />

          <div className="form-group">
          <label htmlFor="phone number">Phone number</label>
          <input
            name="phoneNumber"
            placeholder="Phone number"
            value={this.state.phoneNumber}
            onChange={e => this.setState({ phoneNumber: e.target.value })}
          />
          </div>

          <br />

          <div className="form-group">
          <label htmlFor="password">
            <input
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </label>
          </div>
         </form>
          <br />

          
          <button type="submit">Submit</button>
       

    </div> */
