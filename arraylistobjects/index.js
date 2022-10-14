let kids = [//[] declare array/list
    "Natalie",//index 0
    "Brittany",//index 1 (second)
    "Zachary"// length - 1
];

let oldest = kids[0];
let middle = kids[1];
let youngest = kids[2];

console.log(oldest, middle, youngest);

let last = kids[ kids.length - 1];
console.log("LAST:", last)

kids.push("Katlyn");
kids.push("Karl");
kids.push("Kyle");

last = kids[ kids.length - 1];
console.log("LAST", last)

//each time thru the loop kids [i] references a different
//element in the array
//old hard way - traditional mathy for loop
for(let i = 0; i < kids.length; i++) { //note length is not 3 hard-coded
    console.log("INDEX KID:", i, kids[i]);
}

// new cool function way
function showKid(k){
    console.log("KID NAME:", k);
}
kids.forEach(showKid);

//newer even cooler anonymous function way
kids.forEach( k => console.log(k) );

//newer even wackier an existing function way
kids.forEach( console.log ); //for each passes value, index, whole list