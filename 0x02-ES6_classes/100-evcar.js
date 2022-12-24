/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    const NewCar = super.constructor || super[Symbol.species];
    return new NewCar();
  }
}

export default EVCar;
