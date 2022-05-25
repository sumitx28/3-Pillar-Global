const student = {
    firstName: 'Sumit',
    lastName: 'Savaliya',
    age: 21,
    isMarried: false,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', ]
}

let studentTxt = JSON.stringify(student, ['firstName', 'lastName', 'skills'])
console.log(studentTxt)