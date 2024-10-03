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
a();
