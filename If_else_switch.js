const x = 10;

if(x === 10) {       //For type matching use `===` 
    console.log('x is 10');
} else if(x > 10){
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}


const p = 4;
const q = 6;

if (p > 5 && q < 7) {
    console.log('first condn: p is greater than 5 and q is more than 7')
}

if (p > 5 || q < 7) {
    console.log('second condn: p is greater than 5 and q is more than 7')
}


const l = -10;

const color = l > 10 ? 'red' : 'blue';

console.log(color)

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log("color is not Red or Blue");
        break;
}
