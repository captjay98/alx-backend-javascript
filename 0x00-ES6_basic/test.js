/* eslint-disable guard-for-in */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);

import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));

import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);

import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));

import returnHowManyArguments from './4-rest-parameter.js';

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));

import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));



const person = { fname: 'John', lname: 'Doe', age: 25 };

for (const det in person) {
  console.log(`${det} : ${person[det]}`);
}
*/   
const person = [45, 4, 9, 16, 25];

let txt = '';
person.forEach(func);

function func(val, ind, array) {
  txt += val;
};
