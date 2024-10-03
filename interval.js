console.log(1);
console.log(2);
// console.log(3);
// doSomething();
// setTimeout(() => { //set timeout
//   doSomething();
// }, 5000);
console.log(4);
console.log(5);
console.log(6);

function doSomething() {
  console.log(3);
}

// SetInterval
//clearInterval(clkID) stop korar jonno devtool theke
let num = 0;
const clkID = setInterval(() => {
  num++;
  if (num > 10) {
    clearInterval(clkID);
  }

  console.log(clkID, num);
}, 3000);
