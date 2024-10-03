// single threaded -->>> scequencially jai , ek tar por ekta

function a() {
  console.log("a");
  b();
  console.log("aa");
}
function b() {
  console.log("b");
  d();
  console.log("bb");
}

function d() {
  console.log("d");
  console.log("dd");
}
setTimeout(() => {
  console.log("set Timeout function call");
});

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
a();
