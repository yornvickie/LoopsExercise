// 1
for (i = 1; i <= 7; i++){
    console.log(i);
}

// 2
for (i = 5; i <=25; i +=4){
    console.log(i);
}

// 3
const wizards = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley"
]

for (title of wizards){
    console.log(title);
}

// 4
let harryPotterMovies = 0;

while (harryPotterMovies <=8){
    console.log(harryPotterMovies);
    harryPotterMovies++;
} 

console.log(harryPotterMovies-1);

// BONUS
// 5
const hogwartsHouses = [
    "Gryffindor",
    "Hufflepuff",
    "Slytherin"
]

for (house of hogwartsHouses){
    
    for (type of house){
        console.log(type);
    }
}

// 6
const quote = [
    "Yer",
    "A",
    "Wizard",
    "Harry"
]

for (i = 0; i < quote.length; i++) {
    console.log(quote[i]);
}

let string = quote.join(` `)+`.`;
console.log(string);

// 7
for (i = 1; i <= 25; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Expecto Patronum");
    } else if (i % 5 === 0) {
    console.log("Patronum");
    } else if (i % 3 === 0) {
        console.log("Expecto");
    } else {
        console.log(i);
    }
}