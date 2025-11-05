//Learning Functions
function add(a,b){
    return a+b;
}
var sum = add(2,3);
console.log(sum);

//Anoynmous function
var sum = function(c,d){
    return c+d;
}
//using fatpi "=>" shorthand operatiors
var sum = (c,d)=> c+d;
console.log(sum(2,3)); //Passing the arguments, here sum variable itself becomes a function

/*2 types of scope for "var" variable in JS: Global and Functional. Functional has only scope inside the 
function.
2 types of scope for "let" variable in JS: Global level, and block level {}
const variable has no scope it only allows just a single value use
*/