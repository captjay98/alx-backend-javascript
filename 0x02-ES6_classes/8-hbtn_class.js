/* eslint-disable no-underscore-dangle */
class HolbertonClass {
  constructor(size = 0, location = '') {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](atr) {
    if (atr === 'number') {
      return `${this._size}`;
    }
    return `${this._location}`;
  }
}
export default HolbertonClass;


/*
class HolbertonClass:
    def __init__(self, size = 0, location = ''):
        self._size = size;
        self._location = location;

        if atr == "number":
            return self.size
        return self.location*/