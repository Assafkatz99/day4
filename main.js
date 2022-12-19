function Ex_A () {
let someName = "Assaf";
console.log(someName);
someName = "Katz";
alert(someName);
}

function Ex_B () {
let rdNumber = Math.random()
let result = 3 * rdNumber
let stirngCalculation = `${rdNumber} * 3 = ${result}`
console.log(stirngCalculation)
}

function Ex_C () {
let favoriteNumber = 32;
let favoriteStringed = favoriteNumber.toString();
// console.log(typeof favoriteStringed);
console.log(favoriteNumber)
}

function Ex_D () {
const favoriteNumber = 32;
const halfOfFavNum = favoriteNumber/2;
let michaelsFavorite = 13;
console.log(`subtract from Michael's number: ${michaelsFavorite-favoriteNumber}`);
michaelsFavorite = michaelsFavorite * 26;
console.log(`new value for michael's number: ${michaelsFavorite}`);
}

function Ex_E () {
    let numberOfChildren = 3;
    let partnerName = "Gab";
    let geographicLocation = "Israel";
    let jobTitle = "tech industry";

    console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`)
}

function Ex_F () {
    let yearOfBirth = 1999
    let futureYear = 2063
    let sub = futureYear-yearOfBirth;

    console.log(`I will be either ${sub} or ${sub + 1} in ${futureYear}`)
}

Ex_F()