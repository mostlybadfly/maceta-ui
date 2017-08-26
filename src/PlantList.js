import React, { Component } from 'react';

class PlantList extends Component {
  render() {
    const plants = {...this.props.plants};
    const plantInfo = Object.keys(plants).map((key) =>
      <li>{plants[key].commonName}</li>)
    return (
      <ul>
        {plantInfo}
      </ul>
    )
  }
} 

export default PlantList;
