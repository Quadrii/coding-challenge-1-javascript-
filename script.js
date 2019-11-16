var markMass = 200;
var markHeight = 5;
var bmiMark = markMass / (markHeight * markHeight);
console.log(bmiMark);

var johnMass = 100;
var johnHeight = 6.5;
var bmiJohn = johnMass / (johnHeight * johnHeight);

var johnMark = bmiMark - bmiJohn;
console.log(johnMark) 

var compare = bmiMark > bmiJohn;
console.log('Is Mark\'s mass bigger than John\'s?' + compare); 
