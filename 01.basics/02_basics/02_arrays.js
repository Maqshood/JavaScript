const marvel_heroes = ["Ironman","Thor","Spiderman"] 
const Dc_heroes = ["Flash","Superman","Batman"] 

//marvel_heroes.push(Dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allheroes = marvel_heroes.concat(Dc_heroes)
// console.log(allheroes);

const all_new_heroes = [...marvel_heroes,...Dc_heroes]
// console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Maqshood"))
console.log(Array.from("Maqshood"))
console.log(Array.from({name: "Maqshood"}))    // Intersting

let scrore1 = 100
let scrore2 = 200
let scrore3 = 300

console.log(Array.of(scrore1,scrore2,scrore3));

