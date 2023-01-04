/* eslint-disable no-restricted-syntax */
export default function hasValuesFromArray(argi, arg) {
  for (const num of arg) {
    if (!argi.has(num)) {
      return false;
    }
  }
  return false;
}
