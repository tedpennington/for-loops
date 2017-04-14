console.log("hello, first task: Increment By 10")
for (var i = 5; i <= 120; i = i + 10) {
    console.log("the value of i is: " + i);
}


console.log("Decrement By Division")
for (var i = 4096; i >=1; i = i / 2){
    console.log("the value of i is: " + i);
}


console.log("Array Iteration")
var presidentNames = ["George Washington", "John Adams", "Thomas Jefferson"];
for (var i = 0; i <3; i++) {
    console.log("President number " + (i + 1) +" was " + presidentNames[i]);
}


console.log("Object Iteration");
var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}
for (prop in antSpecies) {
    console.log(prop, antSpecies[prop]);
}