export default function returnHowManyArguments(...args) {
  let total = 0;
  for (let arg in args) {
    total += 1;
  }
  return total;
}
