const food = ["beans", "rice", "plantain", "egg"]


console.time("while loop")
let i = 0
while (i < food.length) {
    console.log(food[i])
    i++
}
console.timeEnd("while loop")

console.time('Regular for loop')
for (let i = 0; i < food.length; i++) {
    console.log(food[i])
}
console.timeEnd('Regular for loop')

console.time("for of")
for (const meal of food) {
    console.log(meal)
}
console.timeEnd("for of")

console.time("forEach")
food.forEach(meal => console.log(meal))
console.timeEnd("forEach")


