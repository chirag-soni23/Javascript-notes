const marvel_heros = ["Ironman", "THor", "Spiderman"]
const dc_heros = ['Superman', "Flash", "Batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// const allhero = marvel_heros.concat(dc_heros)
// console.log(allhero);

1.//spread operators

const allhero = [...marvel_heros, ...dc_heros]
console.log(allhero);

const anotherarr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]
console.log(anotherarr);
let real_usablearray = anotherarr.flat(Infinity)
console.log(real_usablearray);

console.log(Array.isArray("Chirag"));
// from array me convert krega
console.log(Array.from("Chirag"));
console.log(Array.from({
    name: "Chirag",
    age: 19
}));

let score1 = 100;
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));



