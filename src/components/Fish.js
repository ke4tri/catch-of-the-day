import React from 'react';
import {formatPrice } from '../helpers';

class Fish extends React.Component {
  // handleClick = () => {
  //   this.props.addToOrder(this.props.index);
  // }
  render() {
    const {image, name, price, desc, status } = this.props.details;
    const isAvailable = status === 'available';
    // const isTrue = status === true;

    return <li className="menu-fish">
      <img src={image} alt={name} />
      <h3 className="fish-name">
        {name}
        <span className="price">{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>
      {isAvailable ? 'Add To Cart' : 'Sold out!'}</button>
      {/* <button disabled={!isTrue}>Add To Cart</button> */}
    </li>;
  }
}

export default Fish;