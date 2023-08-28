// Problems in code: incorrect syntax (should be backticks surrounding everything, including the !)
// Should use if else statement to check for nickname and firstname variables


const nickname = "Timmy";
const firstname = "Timothy";

// console.log("Good Morning, ${nickname} || {firstname}!");
if (nickname && firstname){
    console.log(`Good Morning ${nickname}!`)
} else {
    console.log(`Good Morning ${firstname}!`)
}


if (!nickname && !firstname) {
    console.log(`Good Morning!`);
}