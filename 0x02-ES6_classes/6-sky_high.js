/* eslint-disable no-unreachable */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
export default SkyHighBuilding;
