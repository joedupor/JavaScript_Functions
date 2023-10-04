// Exercise 1 Section
console.log("EXERCISE 1: Print the Odds\n==========\n");

function printodds(count) {

    if (count == 0) {count = 1;}

    if (count < 0) {count *= -1;}

    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }        
}

printodds(10);
printodds(50);


// Exercise 2 Section
console.log("EXERCISE 2: Legal to Drive?\n==========\n");

function checkage(userName, age) {

    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age < 16) {
        console.log(belowSixteen);
    }

    if (age >= 16) {                //otherwise this line could read  "else {" 
        console.log(aboveSixteen);
    }

}

checkage(`John`, 17);
checkage(`Mary`, 15);
checkage(`Tim`, 16);
checkage();



// Exercise 3 Section
console.log("EXERCISE 3: Which Quadrant?\n==========\n");

function whichQuadrant (x, y) {

if (x == 0 && y == 0) {
    console.log(`The point (${x},${y}) is located at the origin.`);
}
else if (x == 0) {
    console.log(`The point (${x},${y}) is located on the y-axis.`);
}
else if (y == 0) {
    console.log(`The point (${x},${y}) is located on the x-axis.`);
}
else if (x > 0 && y > 0) {
    console.log(`The point (${x},${y}) is located in Quadrant 1.`);
}
else if (x < 0 && y > 0) {
    console.log(`The point (${x},${y}) is located in Quadrant 2.`);
}
else if (x < 0 && y < 0) {
    console.log(`The point (${x},${y}) is located in Quadrant 3.`);
}
else {
    console.log(`The point (${x},${y}) is located in Quadrant 4.`);
}

}

whichQuadrant(0,0);
whichQuadrant(0,3);
whichQuadrant(-3,0);
whichQuadrant(3,3);
whichQuadrant(-3,3);
whichQuadrant(-3,-3);
whichQuadrant(3,-3);



// Exercise 4 Section
console.log("EXERCISE 4: What type of triangle?\n==========\n");

function triangleType(a, b, c){

    let isValid = false;

    if (a + b > c && a + c > b && b + c > a) {
        isValid = true;
    }
    
    if (isValid) {

        if (a == b && b == c && c == a) {
            console.log(`The Triangle with all equal side lengths such as (${a},${b},${c}) is known as an equilateral.`);
        }

        else if (a == b || a == c || b == c) {
            console.log(`The Triangle with two sides equal such as (${a},${b},${c}) is known as an isosceles.`);
        }

        else {
            console.log(`The Triangle with all unequal side lengths such as (${a},${b},${c}) is known as a scalene.`);
        }
    }

    else {
        console.log(`The Triangle such as (${a},${b},${c}) is invalid because 
        two sides summed must always be greater than the third side.`);
    }

}
triangleType (3, 3, 3);
triangleType (3, 3, 5);
triangleType (1, 1, 2);
triangleType (3, 4, 5);

