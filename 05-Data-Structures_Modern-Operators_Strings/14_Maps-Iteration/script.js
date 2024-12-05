const question = new Map([
    ["question", "Which is the best programming language?"],
    [1, "JavaScript"],
    [2, "Python"],
    [3, "Java"],
    ["correct", 1],
    [true, "Correct 🏆"],
    [false, "Wrong 😔"],
]);

console.log(question);

/*

Convert Object to Map -
As Object.entries() returns an array of arrays, we can use the Map constructor
to convert it to a Map object.

*/

const restaurants = {
    name: "Pizza Hut",
    categories: ["Pizza", "Italian", "Fast Food"],
    address: "123 Main St",
    openingHours: {
        monday: {
            open: "8:00 am",
            close: "4:00 pm",
        },
        tuesday: {
            open: "8:00 am",
            close: "4:00 pm",
        },
        wednesday: {
            open: "8:00 am",
            close: "4:00 pm",
        },
    },
};

const hours = Object.entries(restaurants.openingHours);
console.log(hours);

const hoursMap = new Map(Object.entries(restaurants.openingHours));
console.log(hoursMap);

/*

NOTE -
Map is an iterable object, so we can use for...of loop to iterate over it.

*/

const getQuestion = question.get("question");
console.log(getQuestion);

for (const [key, value] of question) {
    if (typeof key === "number") console.log(`Option ${key}: ${value}`);
}

const answer = Number(prompt("What is your answer?"));
console.log(answer);

console.log(
    question.get("correct") === answer ? question.get(true) : question.get(false)
);

// Convert Map to Array i.e. to its original form we can use [...map]

console.log([...question]);

/*

(7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
0: (2) ['question', 'Which is the best programming language?']
1: (2) [1, 'JavaScript']
2: (2) [2, 'Python']
3: (2) [3, 'Java']
4: (2) ['correct', 1]
5: (2) [true, 'Correct 🏆']
6: (2) [false, 'Wrong 😔']
length: 7

*/

console.log([...question.keys()]);
// (7) ['question', 1, 2, 3, 'correct', true, false]

console.log([...question.values()]);
/* 

(7) ['Which is the best programming language?', 'JavaScript', 'Python', 
'Java', 1, 'Correct 🏆', 'Wrong 😔']

*/

