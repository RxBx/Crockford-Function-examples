let dragon =
  name =>
    size => 
      element =>
        name + 'is a' +
        size + ' dragon that breathes ' +
        element + '!'
        
console.log(dragon ('fluffykins')('tiny')('lightening'));

//or

let fluffykinsDragon = dragon ('fluffykins');

console.log(fluffykinsDragon('tiny')('lightening')); //same output
