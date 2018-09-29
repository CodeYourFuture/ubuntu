import React, { Component } from "react";
import ShelterHeader from "./ShelterHeader";
import ShelterFooter from "./ShelterFooter";
import * as api from '../../helpers/api'
import { withRouter } from 'react-router-dom'
import HeroImage from '../../components/HeroImage'

class Shelters extends Component {
  state = {
    shelter: {}
  }
  componentDidMount() {
    const shelterId = this.props.match.params.shelterId
    api.getSingleShelter(shelterId).then(data => {
      this.setState({
        shelter: data
      });
    });
  }

  render() {
    const { shelterId } = this.props.match.params
    const { name } = this.state.shelter
    return (
      <div>
        <ShelterHeader shelter={this.state.shelter} />
        <HeroImage shelterId={shelterId} />
        <ShelterFooter />
      </div>
    );
  }
}
export default withRouter(Shelters);
