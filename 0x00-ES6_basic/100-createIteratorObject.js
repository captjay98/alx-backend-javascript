// eslint-disable-next-line no-unused-vars

export default function createIteratorObject(report) {
  const nArr = [];
  for (const arr of Object.keys(report)) {
    nArr.push(arr);
  }
  return nArr;
}
