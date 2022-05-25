const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
const skillsTxt = JSON.stringify(skills)
console.log(skillsTxt);

let age = 21;
const ageTxt = JSON.stringify(age)
console.log(ageTxt)

let isMarried = false
const isMTxt = JSON.stringify(isMarried)
console.log(isMTxt);

const student = {
    firstName: 'Sumit',
    lastName: 'Savaliya',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', ]
}
let studentTxt = JSON.stringify(student)