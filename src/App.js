import React, { Component } from 'react';
import './App.css';
import PlantForm from './PlantForm'
import PlantList from './PlantList'

class App extends Component {
  constructor() {
    super();

    this.addPlant = this.addPlant.bind(this);
    this.state = {
      plants: {},
    };
  }

  addPlant(plant) {
    const plants = {...this.state.plants};
    const timestamp = Date.now();
    plants[`plant-${timestamp}`] = plant;
    this.setState({ plants })
  }

  render() {
    return (
      <div>
        <PlantForm addPlant={this.addPlant} />
        <PlantList plants={this.state.plants} />
      </div>
    );
  }
}

export default App;
