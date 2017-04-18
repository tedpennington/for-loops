// Updated at bottom for some more practice w/ looping through object properties

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
  argentine: "antlers",
  army: "antenna",
  bigHeaded: "bigHeadThing",
  black: "darkSpot",
  bull: "horns",
  carpenter: "tools",
  crazy: "level10",
  fire: "very hot",
  glider: "can glide",
  honeyPot: "sticky",
  jackJumper: "can jump"
}

// For In loops, written as:  for ("property" in "object name")
for (x in antSpecies) {
    console.log("Key is: " + x, "    Value is: " + antSpecies[x]);
}

// Practicing referring to an object's property value.
console.log(antSpecies.army);

// Methods I found while looking at for loops (which may never be useful!)
console.log("Methods I found while looking at for loops");
// Alternative way to do this using Object.values method
console.log(Object.keys(antSpecies), Object.values(antSpecies));
