const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
const language = prompt("Bisa berbahasa apa?");
const gender = confirm("Apa Gendermu?");
const user = {
    name: {
        first: firstName,
        last: lastName,
    },
    language: language,
    gender : gender
};

if (user.gender === true){
    if (user.language === "English") {
        alert("Nice to meet you mr. " + user.name.first + " " + user.name.last + "!");
    } 
    else if (user.language === "French") {
        alert("Ravi de vous rencontrer senor " + user.name.first + " " + user.name.last + "!");
    } else if (user.language === "Japanese") {
        alert("Hajimemashite, " + user.name.first + " " + user.name.last + "-kun !");
    } else {
        alert("Senang bertemu dengan Anda tuan " + user.name.first + " " + user.name.last + "!");
    }
}

else if (user.gender === false) {
    if (user.language === "English") {
        alert("Nice to meet you mrs. " + user.name.first + " " + user.name.last + "!");
    } 
    else if (user.language === "French") {
        alert("Ravi de vous rencontrer signora " + user.name.first + " " + user.name.last + "!");
    } else if (user.language === "Japanese") {
        alert("Hajimemashite, " + user.name.first + " " + user.name.last + "-chan!");
    } else {
        alert("Senang bertemu dengan Anda nyonya" + user.name.first + " " + user.name.last + "!");
    }
}
