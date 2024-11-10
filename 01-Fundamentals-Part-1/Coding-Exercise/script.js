/*

CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/

// TEST DATA 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);

const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI); // true

/*

CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.

*/

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

/*

CHALLENGE #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks �

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:

a. Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

b. Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

c. Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

*/

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log(`Dolphins win the trophy`);
} else if (scoreDolphins < scoreKoalas) {
    console.log(`Koalas win the trophy`);
} else if (scoreDolphins === scoreKoalas) {
    console.log(`Both win the trophy`);
}

// Bonus 1 & Bonus 2
const scoreDolphinsBonus1 = (97 + 112 + 101) / 3;
const scoreKoalasBonus1 = (109 + 95 + 106) / 3;

if ((scoreDolphinsBonus1 > scoreKoalasBonus1) && (scoreDolphinsBonus1 >= 100)) {
    console.log(`Dolphins win the trophy with score ${scoreDolphinsBonus1} 🏆`);
} else if (
    (scoreDolphinsBonus1 < scoreKoalasBonus1) &&
    (scoreKoalasBonus1 >= 100)
) {
    console.log(`Koalas win the trophy with score ${scoreKoalasBonus1} 🏆`);
} else if (
    (scoreDolphinsBonus1 === scoreKoalasBonus1) &&
    (scoreDolphinsBonus1 >= 100) &&
    (scoreKoalasBonus1 >= 100)
) {
    console.log(`Both win the trophy 🏆`);
} else {
    console.log(`No one wins the trophy 😭 `);

}

/*

CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

1. Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

*/

let tip;
let bill = 275

if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15
} else {
    tip = bill * 0.2
}
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);


let bill1 = 40;
const tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2
console.log(`The bill was ${bill1}, the tip was ${tip1}, and the total value ${bill1 + tip1}`);


