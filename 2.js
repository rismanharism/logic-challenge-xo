var countX = 0;
var countO = 0;

for (var i = 0; i < kata.length; i++) {
    if (kata[i] === "x") {
        countX++;
    } else if (kata[i] === "o") {
        countO++;
    }
}

if (countX === countO && countX > 0 && countO > 0) {
    console.log(true);
} else {
    console.log(false);
}