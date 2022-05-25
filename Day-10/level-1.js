
let set = new Set();
for (let i = 0; i <= 10; i++) {
    set.add(i);
}
console.log(set);
set.delete(5);
console.log(set)
set.clear();

let names = ["Sumit", "Het", "Parth", "Pranav", "Dirgh"]
let namesSet = new Set();
names.forEach(name => {
    set.add(name)
})
console.log(set)

let countries = ["India", "USA", "Germany", "England", "Italy"]
let countriesLength = new Set();
for (let i = 0; i < countries.length; i++){
        countriesLength.add(countries[i])
        countriesLength.add(countries[i].length);
}
console.log(countriesLength);