let limit = 0;
let start = 10;

while (start > limit) { // t/f boolean expression
    start--; //decrement - decrease by one
    console.log(start);
} //loop back up to line 4 the "while" re-evaluate

//fall out of loop while expression is false
console.log("BLAST OFF!")

//do while
let num = 1;
let i = 1;
do {
    //GUARANTEED TO HAPPEN ONCE
    num = num * 2; //DOUBLE THE VALUE
    console.log("DO: ", i, num); //DISPLAY NUM
    i++; //INCREMENT - COUNT UP
} while (i < 5)

//WE CAN DOT HE SAME THING IN FEWER LINES OF CODE WITH A FOR LOOP
let value = 1;

for (let i = 0; i < 5; i++) {
    value = value * 2; //DOUBLE EVERY TIME
    console.log("WHILE VALUE:", i, value);
}


//BREADKING OUT IN THE MIDDLE
let n = 1;
let index = 1;
while (index < 100) {
    n = n * 2;
    console.log("BREAK ME: "+ index, n)
    if (n >= 100) {
        break;
    }
    index++;
}
console.log("BROKEN OUT! (before index reaches 100")