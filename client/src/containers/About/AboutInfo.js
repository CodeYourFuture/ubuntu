import React from "react";
import { getShelterAbout } from "../../helpers/api";

class AboutInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: {}
    };
  }

  componentDidMount() {
    const _this = this;

    var about = getShelterAbout("about", {
      series: [{ data: _this.props.data }]
    });

    this.setState({ about });
  }

  render() {
    const about = this.state.about;
    if (!about) {
      return null;
    }

    return <div>{about.map}</div>;
  }
}
export default AboutInfo;
