let student = {
    firstName: "Sumit",
    lastName: "Savaliya",
    age: 21,
    skills: ["html", "css", "javascript", "netlify"],
    country: "India"
}

let txt = JSON.stringify(student)
localStorage.setItem("s1", "txt")