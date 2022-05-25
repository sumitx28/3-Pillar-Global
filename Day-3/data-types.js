const firstName = "Sumit"
const lastName = "Savaliya"
const country = "India"
const city = "Surat"
const age = 21;
const isMarried = false;
const year = new Date().getFullYear();

let vars = [firstName, lastName, country, city, age, isMarried, year];
vars.forEach(function (element) {
    console.log(typeof element);
});

console.log("10" === 10)
console.log(parseInt(9.8) === 10);