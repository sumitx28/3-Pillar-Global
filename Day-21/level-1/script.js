
const firstP = document.getElementsByTagName("p")[0];
console.log(firstP)

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
console.log(one)
console.log(two)
console.log(three)
console.log(four)

let pS = document.querySelectorAll('p');

console.groupCollapsed(pS)

pS.forEach(p => {
    console.log(p.textContent)
})

pS[3].textContent = "fourth paragraph"

pS[0].className = "first-pararaph";
pS[0].id = "first";

pS[1].setAttribute("class", "second");
pS[1].setAttribute("id", "second");

pS[2].classList.add('title', 'third')