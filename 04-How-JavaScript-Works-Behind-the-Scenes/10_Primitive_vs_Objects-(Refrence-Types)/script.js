let age = 24;
let oldAge = age;
age = 25;
console.log(age); // 25
console.log(oldAge); // 24

const meObj = {
    name: "Mohit",
    age: 24,
}

const friendObj = meObj;

friendObj.age = 30;
console.log(meObj);
console.log(friendObj);

