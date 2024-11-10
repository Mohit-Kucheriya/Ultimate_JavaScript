/*

Functions calling other Functions - Calling one function from inside another function.

*/

function cutPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applesPieces = cutPieces(apples);
    const orangesPieces = cutPieces(oranges);

    const juice = `Juice of ${applesPieces} piece of apples and ${orangesPieces} piece of oranges`;
    return juice;
}

console.log(fruitProcessor(3, 2));

/*

Explanation - Here we have two functions, one is cutPieces and the other is fruitProcessor. We call the cutPieces function inside the fruitProcessor function. The fruitProcessor function will call the cutPieces function and store the result in applesPieces and orangesPieces. Then it will return the juice.

*/