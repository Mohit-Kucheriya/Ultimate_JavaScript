/*

Nullish Coalescing Operator (??) -
1. It is a logical operator that returns the first operand if it is not null or undefined.

2. If the first operand is null or undefined, it returns the second operand.

3. In this '0' and "" are treated as the truthy value.

4. ?? operator only considers null and undefined as nullish

*/

const restaurant = {
    name: "The Resturant",
    location: "Via del Corso, 1",
    categories: ["Italian", "Vegetarian", "Organic"],
    startMenu: ["Focaccia", "Pizza", "Pasta", "Gelato", "Tiramisu"],
};

restaurant.numOfGuests = 0;
const guest1 = restaurant.numOfGuests || 10;
console.log(guest1); // 10

const guest2 = restaurant.numOfGuests ?? 10;
console.log(guest2); // 0
