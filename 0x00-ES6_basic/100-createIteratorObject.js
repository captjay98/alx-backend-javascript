// eslint-disable-next-line no-unused-vars
import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

export default function createIteratorObject(report) {
  const nArr = [];
  for (const arr of Object.keys(report)) {
    nArr.push(arr);
  }
  return nArr;
}
const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
    console.log(item);
}
