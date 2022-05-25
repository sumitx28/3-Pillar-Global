//level-1
let dog = {};
console.log(dog);
dog.name = "oreo";
dog.legs = 4;
dog.color = "black"
dog.age = 4;
dog.bark = function () {
    console.log("woof woof")
}
console.log(Object.values(dog));
dog.breed = "german shepherd";
dog.getDogInfo = function () {
    console.log(Object.values(this));
}