//function
function fun(alldep) {
  console.log(alldep);
}

fun(["Cse", "Cse", "Cse"]);

//arrow function
arrowfun = (dep) => {
  console.log(dep[0]);
};

arrowfun(["cse", "It"]);

//desctructing
console.log("-----------------desctructing-------------");
mark = [30, 45, 46];
const [m1, m2] = mark;
console.log(m1, m2);

//spread operator (...)
console.log("-----------------spread-------------------");
student = ["mathav", "maha", "Jayanth", "Arvi", "dinesh"];
new_s = ["ajay", "rajan", "anand"];
console.log(...student, ...new_s);
console.log([...student, ...new_s]);

//rest operator
console.log(
  "---------------------------------Rest--------------------------------"
);
const [a, b, ...c] = student;
console.log(a);
console.log(b);
console.log(c);

function restop(...foods) {
  console.log(foods);
}

f1 = "parotta";
f2 = "Biriyani";
f3 = "Rice";
restop(f1, f2, f3);

//scope
//let        ==>> block/local scope
//var/const  ==>> global scope

console.log("----------------------scope ------------------");
var v = 7;
console.log(v);
{
  let v = 40;
  console.log(v);
}
console.log(v);

console.log("---------------------without let ------------------");
var v = 100;
console.log(v);
{
  v = 50;
  console.log(v);
}
console.log(v);

//hosting
console.log("------------------------------------hosting---------------------");
console.log(z); //undefined
var z = 10;
console.log(z);

console.log(y); //reference error
let y = 10;
console.log(y);

console.log(x); //reference error
const x = 10;
console.log(x);
