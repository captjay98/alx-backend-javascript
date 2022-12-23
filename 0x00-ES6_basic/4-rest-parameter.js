export default function returnHowManyArguments(...args) {
  let total = 0;
  const data = Object.values(args);
  for (let i = 0; i < data.length; i += 1) {
    total += 1;
  }
  return total;
}
