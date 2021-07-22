/*Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
Если да – приведите пример вашего кода. */

//ответ: да
let object = {};
function A() { 
    return object;
 }
function B() { 
    return object; 
}
console.log(new A() == new B()); // true