import React, { Component } from 'react';

class PlantForm extends Component {
  constructor() {
    super();
    this.state = {
      commonName: null
    }
  }

  createPlant(event) {
    event.preventDefault();
    const plant = {
      commonName: this.state.commonName
    }
    this.props.addPlant(plant);
    this.plantForm.reset();
    this.setState({
      commonName: null
    })
  }

  addCommonName(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
    this.setState({commonName: event.target.value});
  }

  render () {
    return(
      <form ref={(input) => this.plantForm = input } onSubmit={(e) => this.createPlant(e)}>
        <input ref={(input) => this.commonName = input } type="text" placeholder="Common Name" onBlur={(e) => this.addCommonName(e)}/>
        <p>
          <button className="add-button" type="submit">Add Plant</button>
        </p>
      </form>
    )
  }
}

export default PlantForm;
