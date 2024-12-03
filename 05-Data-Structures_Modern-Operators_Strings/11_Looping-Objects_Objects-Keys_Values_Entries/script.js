/*

NOTE -
1. We can loop over objects although they are not iterable,
but we can loop over object keys and values.

2. We can loop over object entries.

3. To loop over object keys and values, we can use for...of loop.

4. Object.keys() returns an array of keys of an object.

5. Object.values() returns an array of values of an object.

6. Object.entries() returns an array of key-value pairs of an object.

*/

const obj = {
    name: "Mohit",
    age: 25,
    city: "Jalgaon",
    country: "India",
    hobbies: ["Coding", "Reading", "Gym"],
    skills: ["HTML", "CSS", "JavaScript", "React"],
    otherDetails: {
        address: "123, Main Street,Jalgaon",
        phone: "1234567890",
        email: "mohit@gmail.com",
    },
};

// Looping over object keys
const properties = Object.keys(obj);
console.log(properties); // ["name", "age", "city", "country", "hobbies", "skills", "otherDetails"]

for (const key of properties) {
    console.log(key);
}

// Looping over object values
const values = Object.values(obj);
console.log(values);

for (const value of values) {
    console.log(value);
}

// Looping over object entries
const entries = Object.entries(obj);
console.log(entries);

for (const [k, v] of entries) {
    console.log(k, v);
}
