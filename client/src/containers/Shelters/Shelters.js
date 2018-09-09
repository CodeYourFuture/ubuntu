import React, { Component } from "react";
import * as api from "../../helpers/api";
import "./Shelters.css";
import { Link } from "react-router-dom";

class Shelters extends Component {
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
  render() {console.log(this.state.shelters);
    return (
      <div >
        <div className="card  main-card">

         <div className="shelters-title">SHELTERS IN GLASGOW FOR PEOPLE WITHOUT RECOURSE TO PUBLIC FUNDS</div>
        
            <div className="shelters-container">
              <div className="card-deck">
               {this.state.shelters.map(shelter => {
                 return (
                  <Link to={`/shelters/${shelter.shelter_id}`}>
                   <div className="card">
                    <div className="card-body">
                     <div className="container">
                      <div className="box">
                      <div class="row">
                      <div className="col-md">
                      <h5 className="card-title">{shelter.name}</h5>
                      <p  className="card-text">{shelter.address}</p>                
                      </div>
                      <div className="col-md shelterImg">{shelter.image}
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <small className="text-muted"></small>
                </div>
              </Link>
            );
          })}
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Shelters;
