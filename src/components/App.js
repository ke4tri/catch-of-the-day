import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  // where the state is held
  state = {
    fishes: {},
    order: {}
  };
  // what is used to update the state
  addFish = fish => {
    const fishes = {...this.state.fishes}
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
     // fishes:fishes
     fishes
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish}/> 
      </div>
    )
  }

}

export default App;