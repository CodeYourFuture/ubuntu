import React, { Component } from "react";
import ShelterHeader from "./ShelterHeader";
import ShelterFooter from "../../components/Footer/ShelterFooter";
import * as api from '../../helpers/api'
import { withRouter } from 'react-router-dom'
import HeroImage from '../../components/HeroImage'


class Shelters extends Component {
  state = {
    shelter: {}
  };
  componentDidMount() {
    const { shelterId } = this.props.match.params
    // if(!shelterId) {
    //   this.props.history.push('/shelters/1')
    //   return
    // }
    api.getSingleShelter(shelterId).then(data => {
      this.setState({
        shelter: data
      });
    });
  }

  render() {
    const { shelterId } = this.props.match.params
    const path = this.props.match.path
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
