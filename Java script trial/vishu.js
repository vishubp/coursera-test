

function makeMultiplier(multiplier) {
  var myFunFunc = function (x) {
  	console.log(x);
  	console.log(multiplier);
    return multiplier * x;
  };
  
  //console.log(myFunFunc);
  return myFunFunc;
}

var operation = makeMultiplier(10);
console.log("Doing it ");
//console.log(multiplier);
//var operation;
// console.log(operation);
console.log(operation(20));
console.log(operation(30));
//console.log(multiplier);
//console.log(x);