// For loops: 
// Contain 3 statements separated by semicolons.
// 1. first statement: executed before loop starts 
// (typically used to set counter variable to initial value, can be used to do multiple things separated by commas)
// 2. second statment: defines condition for running loop
// 3. thrid statement: executed after each time after the code runs

// So loop below says: 
// 1. before the loop, set this variable to 5, 
// 2. run this loop while i is less than or equal to 120, and 
// 3. each time add 10

// other notes: i++ increments by +1 each time

console.log("increment by 10");

for (var i = 5; i <= 120; i += 10) {
	console.log("value of i is: " + i);
}


console.log("-----------------------");
console.log("decrement by division");

for(var i = 4096; i >= 1; i = i/2) {
	console.log("value of i is " + i);
}


console.log("-----------------------");
console.log("presidents array");

var presArray = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren"];

for (var i = 0; i <= 7; i++) {
	console.log("President number " + (i+1) + " was " + presArray[i]);
}

console.log("-----------------------");
console.log("For/In loop, looping over object");

var antSpecies = {	
  argentine: "ant1",
  army: "ant2",
  bigHeaded: "ant3",
  black: "ant4",
  bull: "ant5",
  carpenter: "ant6",
  crazy: "ant7",
  fire: "ant8",
  glider: "ant9",
  honeyPot: "ant10",
  jackJumper: "ant11"
}

for (var prop in antSpecies){
	console.log(prop);
}

for (prop in antSpecies){
	console.log(antSpecies[prop]);
}












