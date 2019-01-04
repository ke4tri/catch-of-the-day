import React from 'react';

class Fish extends React.Component {
  render() {
    return <li className="single-fish">
      <img src={this.props.details.image} alt={this.props.details.name}></img>
    </li>;
  }
}

export default Fish;