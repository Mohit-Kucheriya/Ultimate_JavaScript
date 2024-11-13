const marvelMovies = [
    "Iron Man",
    "Thor",
    "Captain America",
    "Black Panther",
    "Hulk",
];

// Looping backwards
for (let i = marvelMovies.length - 1; i >= 0; i--) {
    console.log(i, marvelMovies[i]);
}

// Loop inside a Loop
for (let i = 1; i <= 3; i++) {
    console.log(`Biceps Curls ${i} set`);

    for (j = 1; j <= 5; j++) {
        console.log(`${j} Repitition`);
    }
}
