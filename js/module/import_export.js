import { stat, exists, readFile } from 'fs';

export var firstName = '...';
export var lastName = '...';
export var year = '...';

// or

var firstName = '...';
var lastName = '...';
var year = '...';
export {firstName, lastName, year};

export function fun(x, y) {
    return '...';
};

function f1() { ... }
function f2() { ... }
export {
  f1 as rename1,
  f2 as rename2
};
