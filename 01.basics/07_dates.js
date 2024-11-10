// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

// let mycreatedDate = new Date(2002,0,28)
// let mycreatedDate = new Date(2002,0,28,5,5)
// let mycreatedDate = new Date("2002-08-28")
let mycreatedDate = new Date("08-28-2002")
// console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()));

let newDate = new Date ()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
 
// `${newDate.getMonth()} and the time `

newDate.toLocaleString('default',{weekday: "long", dayPeriod: "short"})
