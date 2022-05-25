let profile = {
    firstName: "Sumit",
    lastName: "Savaliya",
    age: 21,
    country: "India",
    city: "Surat",
}

let txt = JSON.stringify(profile);
localStorage.setItem("user", "txt");

