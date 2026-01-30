// array in js
const fruits = ["Apple", " Mango", " KIwi"];
// document.getElementById("p1").innerHTML = fruits;
// fruit[0] for 1st elementy of array
fruits[1] = " Guawa";
document.getElementById("p1").innerHTML= fruits;

const skills = ["HTML", " CSS", " Bootstrap", " JavaScript", " React", " Noic"];
// document.getElementById("p1.1").innerHTML = skills;
let p1_1Length = skills.length;
document.getElementById("p1.1").innerHTML = p1_1Length;

let fruitsString = fruits.toString();
document.getElementById("p1.2").innerHTML= fruitsString;

let poppedLastOfSkill = skills.pop();
document.getElementById("p2").innerHTML= skills;

let pushedInSkill = skills.push(" Noic");
document.getElementById("p3").innerHTML= skills;

let anotherArray = ["Element1", " Element2", " Element3", " Element4"];
const a3 = fruits.concat(anotherArray);
document.getElementById("p4").innerHTML= a3;

const a4 = fruits.concat(skills, anotherArray);
document.getElementById("p5").innerHTML= a4;

// for (let  i = 0; i<anotherArray.length; i++) {
//     console.log(anotherArray[i]);
// }

const fruits1 = ["Apple", "Mango", "Kiwi", "Guawava"];
let splied_fruits1 = fruits1.splice(2,1,"Grapes");
document.getElementById("p7").innerHTML = splied_fruits1; //  output not displaying


let slice_fruits1 = fruits.slice(1,3);
document.getElementById("p8").innerHTML = slice_fruits1;