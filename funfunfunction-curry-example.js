let dragon =
  name =>
    size => 
      element =>
        name + 'is a ' +
        size + ' dragon that breathes ' +
        element + '!'
        
console.log(dragon ('fluffykins')('tiny')('lightening'));

//or

let fluffykinsDragon = dragon ('fluffykins');

console.log(fluffykinsDragon('tiny')('lightening')); //same output

//or

let tinyDragon = fluffykinsDragon('tiny');

console.log(tinyDragon('lightening')); //same output

//vs standard functional form

//which can be 'curried' via lodash library

import _ from 'lodash'



let dragon = (name, size, element) =>
        name + 'is a ' +
        size + ' dragon that breathes ' +
        element + '!'

dragon = _.curry(dragon);

let fluffykinsDragon = dragon ('fluffykins');

let tinyDragon = fluffykinsDragon('tiny');

console.log(tinyDragon('lightening')); 