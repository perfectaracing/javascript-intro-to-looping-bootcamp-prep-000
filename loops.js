function forLoop(array) {
  
for (var i = 0; i < 25; i++) {
  if (i === 1) {
    array.push('I am 1 strange loop.')
  } else {
    array.push(`I am ${i} strange loops.`)
  }
  
}
return array;
}
var sample_arr = [];
console.log(forLoop(sample_arr));

function whileLoop(n){
  while(n>0)
  {console.log(n--1);
}
return "done"
}