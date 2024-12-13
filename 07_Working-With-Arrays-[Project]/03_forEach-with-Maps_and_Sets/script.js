/*

forEach() method is also available for Maps and Sets.

*/

const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
    console.log(key + " is the currency code for " + value);
});


// So basically in 'set' we don't have the key i.e. the index.
const currenciesUnique = new Set(["USD", "EUR", "GBP", "USD", "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, set) {
    console.log(value);
});
