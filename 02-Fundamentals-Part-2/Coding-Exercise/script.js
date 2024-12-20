/*

CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:

1. Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

2. Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

3. Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

4. Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

5. Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

*/

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas} `);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
    } else {
        console.log(`No team wins`);
    }
};

checkWinner(scoreDolphins, scoreKoalas);

/*

CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

1. Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

2. And now let's use arrays! So, create an array called bills containing the test data below.

3. Create an array called tips containing the tip value for each bill, calculated from the function you created before.

4. BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.

*/

// Step 1: Define the calcTip function that takes any bill values.
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Step 2: Create an array called bills.
const bills = [125, 555, 44];

// Step 3: Create an array called tips containing the tip value for each bill.
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(`Tips : ${tips}`);

// Step 4: Create an array called totals containing the totak values, so the bill + tip.
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`Totals : ${totals}`);

/*

CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

2. Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

*/

// Step 1: Create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// mark object
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    // Step 2: Create a calcBMI method
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};

console.log(mark);

console.log(mark.calcBMI()); // Without this method call mark.bmi wont be available beacuse here this method doesn't call itself. We need to explicitly call it.

console.log(mark.bmi);

// john object
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};
console.log(john);

console.log(john.calcBMI());

console.log(john.bmi);

// Step 3: Log to the console who has the higher BMI.
if (john.bmi > mark.bmi) {
    console.log(
        `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
    );
} else if (mark.calcBMI() > john.calcBMI()) {
    console.log(
        `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
    );
}

/*

CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

1. Create an array called bills containing all 10 test bill values.

2. Create empty arrays for the tips and the totals (tips and totals)

3. Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

1. First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

3. Call the function with the totals array.

*/

// Step 1: Create an array called bills containing all 10 test bill values.
const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Step 2: Create empty arrays for the tips and the totals (tips and totals)
const tips1 = [];
const totals1 = [];

function calcTip1(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills1.length; i++) {
    const tip = calcTip1(bills1[i]);
    tips1.push(tip);
    totals1.push(tip + bills1[i]);
}

console.log(`Bill:`, bills1);
console.log(`Tip:`, tips1);
console.log(`Total:`, totals1);

// BONUS:
const calcAverage1 = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
};
console.log(`TotalAverage:`, calcAverage1(bills1));
console.log(`TipsAverage:`, calcAverage1(tips1));

