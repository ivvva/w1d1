let hacker = "yourname";
let firstDigit = hacker.slice(0, 1);

hacker = `${firstDigit.toUpperCase()}` + `${hacker.substring(1)}`;
console.log(hacker);

let password = "";

if (!password) {
  console.log("not set");
} else {
  console.log("it is set");
}

// const age = Number(prompt("what is ur age?"));
// console.log(age);

// if (age >= 18) {
//   console.log("u can drive bae");
// } else if (age === 17) {
//   console.log("bestie get an adult to drive w u");
// } else {
//   console.log("get back to nursery infant");
// }

// const language = prompt("whatcha language queen");
// switch (language) {
//   case "french":
//     console.log("oui oui je m'apelle petit poney");
//     break;
//   case "german":
//     console.log("schjanhchcjeerrrshshshch");
//     break;
//   case "english":
//     console.log("omg international queen!!");
//     break;
// }

// for (let i = 1; i <= 10; i++){
//   console.log(i)
// }

let i = 1;
while (i < 11){
  console.log(i)
  i++
}