

const name = "Maqshood"
const repoCount = 50

 // console.log(name + repoCount + " Value");

 // console.log(`Hello my is ${name} and my repo count is ${repoCount}`) ;

const gameName =  new String('Maqshood-fc-sk') 

//   console.log(gameName [0]);
//   console.log(gameName.__proto__);

//   console.log(gameName.length);
//   console.log(gameName.toUpperCase());
//   console.log(gameName.charAt(2));
//   console.log(gameName.indexOf('q'));

const newString = gameName.substring(0 , 4 )    
console.log(newString);

const anotherString = gameName.slice(-2 , 10)
console.log(anotherString); 

const newStringOne = "      MaQ    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://maqshood.com/maq%20sk"

console.log(url.replace('%20','-'));

console.log(url.includes('hii'));
console.log(gameName.split('-'));
