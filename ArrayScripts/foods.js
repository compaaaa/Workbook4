let myLunch = [
    { item: "Chicken Grill Box", price: 11.50 },
    { item: "Vegetable Springrolls", price: 3.50 }
];

function totalCost(lunch) { 
    costOfFood = 0;
    for (let i = 0; i < lunch.length; i++) {
        costOfFood += lunch[i].price;
    }
    return costOfFood;
}

let myMealCost = totalCost(myLunch);
let taxOfFood = 8.00;
let tipPercentage = 18;
let totalWithTaxAndTip = (myMealCost + 8) * 1.18;
console.log("Your total is " + myMealCost.toFixed(2));
console.log("Tax: " + taxOfFood.toFixed(2))
console.log("Tip: " + tipPercentage + "%");
console.log("Total Due: " + totalWithTaxAndTip.toFixed(2));

//Assume tax is 8 and tip on total is 18%