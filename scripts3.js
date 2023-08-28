// const leoName = "Leo";
// const leoSurname = "Musvaire     ";
// const leoBalance = "-9394";

// const sarahName = "Sarah    ";
// const sarahSurname = "Kleinhans";
// const sarahBalance = "-4582.2";

// const divider = "----------------------------------";

// // Only change below this line

// const owed = parseInt("R" + leoBalance + sarahBalance);
// const leo = '${leoName} + {leoSurname} + "Owed" + "R" + {sarahBalance}';
// const sarah = '{leoName} + {surname} + "Owed" + "R" + {sarahBalance}';
// const total = "Total amount owed: ";
// const result = leo + sarah + divider + divider + total + owed + divider;

// console.log(result);

const leoName = "Leo";
const leoSurname = "Musvaire";
const leoBalance = "-9394";

const sarahName = "Sarah";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line

const owed =
    Math.abs(parseFloat(leoBalance)) + Math.abs(parseFloat(sarahBalance));
const formattedOwed = owed.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
const leo = `${leoName} ${leoSurname} (Owed: R${Math.abs(
    parseFloat(leoBalance)
).toFixed(2)})\n`;
const sarah = `${sarahName} ${sarahSurname} (Owed: R${Math.abs(
    parseFloat(sarahBalance)
).toFixed(2)})\n`;
const total = `Total amount owed: R${formattedOwed}`;
const result = `${leo}${sarah}${divider}\n${total}\n${divider}`;

console.log(result);


