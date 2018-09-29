import React, { Component } from "react";
import * as api from "../helpers/api";
import { withRouter } from "react-router-dom";

class SheltersDropDownList extends Component {
  state = {
    shelters: []
  };
  componentDidMount() {
    api.getShelters().then(data => {
      console.log('data',data);

      this.setState({
        shelters: data

      });
    });
  }
  onChange = (event) => {
      const shelterId = event.target.value
      this.props.history.push(`/shelters/${shelterId}`)
  }
  render() {
    return (
        <form className="form-inline shelters-dropdown">
            <div className="form-group">
                <select className="form-control form-control-sm" onChange={this.onChange}>
                    {this.state.shelters.map(shelter => {
                        return (<option value={shelter.shelter_id}>
                        {shelter.name}
                        </option>)
                    })}
                </select>
            </div>
        </form>
    );
  }
}

export default withRouter(SheltersDropDownList);
