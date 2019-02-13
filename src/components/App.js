import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from "../sample-fishes";
import Fish from './Fish';
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
componentDidMount() {
  const { params } = this.props.match;
  const localStorageRef = localStorage.getItem(params.storeId);
  if (localStorage) {
    this.setState({ order: JSON.parse(localStorageRef) })
  }
  this.ref = base.syncState(`${params.storeId}/fishes/`, {
    context: this,
    state: 'fishes'
  });
}

componentDidUpdate() {
  localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order)
  );
}

componentWillUnmount(){
  base.removeBinding(this.ref);
}

  // what is used to update the state
  addFish = fish => {
    const fishes = {...this.state.fishes}
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
     // fishes:fishes
     fishes
    });
  };

  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({ fishes});
  };


deleteFish = (key) => {
  // Take a copy of the current state
  const fishes = { ...this.state.fishes };
  // Update that state
  fishes[key] = null;
  // UPdate that to state
  this.setState({ fishes });
} 

loadSampleFishes = () => {
  this.setState({ fishes: sampleFishes });
};

addToOrder = (key) => {
  const order = { ...this.state.order };
  order[key] = order[key] + 1 || 1 ;
  this.setState({ order });
};

removeFromOrder = (key) => {
  // Take a copy of the current state
  const order = { ...this.state.order };
  // Update that state
  delete order[key];
  // UPdate that to state
  this.setState({ order });
} 

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
            <ul className="fishes">
              {Object.keys(this.state.fishes).map(key => (
              <Fish 
                key={key}
                index={key}
                details={this.state.fishes[key]} 
                addToOrder={this.addToOrder} 
              />
              ))}
            </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder}/>
        {/* <Order {...this.state} />         */}
        <Inventory
          deleteFish={this.deleteFish}
          updateFish={this.updateFish}
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          /> 
      </div>
    )
  }

}

export default App;