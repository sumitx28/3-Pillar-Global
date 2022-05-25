const users = [{
        name: 'Sumit',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Het',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Dirgh',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'Parth',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'SOMEONE',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'ABC',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]

for ({
        name,
        scores,
        skills,
        age
    } of users) {
    console.log(name, scores, skills, age)
}

for ({
        name,
        scores,
        skills,
        age
    } of users) {
    if (skills.length < 2) {
        console.log(name, scores, skills, age)
    }
}