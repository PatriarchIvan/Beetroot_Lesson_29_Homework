"use strict";

// 1
let answer = prompt('Even number from 10 to 50?', '');
if (answer > 9 && answer < 51 && answer % 2 == 0 && !isNaN(answer)) {
    alert(`Result: ${answer/2}`);
} else {
    alert('Enter allowed value...');
}

// 2
let num = -124;
console.log(num);
let x = 100 + (num *= 5);
console.log(num);
console.log(x);

// 3
console.log("" + 15 + 5);
console.log("" - 10 + 5);
console.log(false + true); //ONE!!!!!!!(0 + 1) 
console.log(69 / "3");
console.log("10" * "20");
console.log(12 + 10 + "px"); //22px;(10+12)+'px';

// // 4
console.log(2 || 0 || 3); //FIRST TRUE;
console.log(2 && 0 && 3); //FIRST FALSE;
console.log(2 && 0 || 3); 
// && - Priority 5; 2 && 0 => 0;
// || - Priority 4; 0 || 3 => 3;

// 5
console.log((0.1 + 0.2).toFixed(1));

// 6
console.log(+'1' + 2);