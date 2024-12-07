const modifyString = function (str) {
    const [first, ...otherWord] = str.split(/\s+/);
    const modified = otherWord.map((word) =>
        word.replace(word[0], word[0].toUpperCase())
    );
    console.log(modified);

    return [first.toUpperCase(), ...modified].join(" ");
};
const UpdatedString = function (str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Updated String: ${fn(str)}`);
};

UpdatedString("    wow!                   its  looking amazing", modifyString);
