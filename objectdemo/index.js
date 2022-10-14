//OBJECT DEMO
function printPerson(person) {
    // `` template strings
    console.log(`${person.greeting} my name is ${person.name}.`);
}

let p = { name: "Kevin", greeting: "Howdy", age: 55 };
printPerson(p);

/*
    // + concatenation - chaining together
    console.log(person.greeting + " my name is " + person.name + ".");
    // `` template strings
    console.log(`${person.greeting} my name is ${person.name}.`);

    console.log(person.age)

    person.age = person.age + 1 // = replace value with expression
    person.age += 1 // += add the amount we specify
    person.age++; // ++ add exactly one

    console.log(person.age)
*/
