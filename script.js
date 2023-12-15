var number=Number(window.prompt('Enter a number'));
console.log(number);
// -----------------------------

var number=Number(window.prompt('Enter a number'));
if(number%3===0 && number%4===0){
    console.log('yes');
}else{
    console.log('No');
}

// -----------------------------

var Num1=Number(prompt('Enter Number1'));
var Num2=Number(prompt('Enter Number2'));
if(Num1>Num2){
    console.log('Num1 is  Max');
}else if(Num2>Num1){
    console.log('Num2 is  Max');
}else if(Num1===Num2){
    console.log('Num1 and Num2 are equal');
}else{
    console.log('Enter A Valid Number');
}

// -----------------------------

var Num=Number(prompt('Enter A Number'));
if(Num>=0){
    console.log('Number is Positive ');
}else if(Num<0){
    console.log('Number is Negative ');
}else{
    console.log('Enter A Valid Number');
}

// -----------------------------

var Num1=Number(prompt('Enter Number1'));
var Num2=Number(prompt('Enter Number2'));
var Num3=Number(prompt('Enter Number3'));
if(Num1>Num2 && Num1>Num3 && Num2>Num3){
    console.log('Num1 is Max and Num3 is Min');
}else if(Num1>Num2 && Num1>Num3 && Num3>Num2){
    console.log('Num1 is Max and Num2 is Min');
}else if(Num2>Num1 && Num2>Num3 && Num1>Num3){
    console.log('Num2 is Max and Num3 is Min');
}else if(Num2>Num1 && Num2>Num3 && Num3>Num1){
    console.log('Num2 is Max and Num1 is Min');
}else if(Num3>Num1 && Num3>Num2 && Num1>Num2){
    console.log('Num3 is Max and Num2 is Min');
}else if(Num3>Num1 && Num3>Num2 && Num2>Num1){
    console.log('Num3 is Max and Num1 is Min');
}else{
    console.log('Enter A Valid Number');
}

// -----------------------------

 var Num=Number(prompt('Enter A Number'));
 if(Num%2===0 && Num>=0){
    console.log(' Even');
 }else if(Num%2!=0 && Num>0){
    console.log(' Odd');
 }else{
    console.log(' Enter A Valid Number');
 }

// -----------------------------

var char=prompt('Enter a character ');
if(isNaN(char)){
    if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u'){
        console.log('vowel')
    }else {
        console.log('consonant');
    }
}
else{
    console.log('Enter a character');
}

// -----------------------------

var num=Number(prompt('Enter A Number'));
for(var i=1; i<=num; i++){
    console.log(i);
}

// -----------------------------

var userInput = prompt("Enter a number:");
var num = +userInput;

if (!isNaN(userInput) && !isNaN(userInput) ) {
 
  for (var i = 2; i <= userInput; i += 2) {
    console.log(i);
  }
} else {
  console.log("Enter A Valid Number.");
}

// -----------------------------

var Num1 = prompt("Enter the base number:");
var Num2= prompt("Enter the exponent:");

var result = 1;

for (var i = 0; i <Num2; i++) {
  result *=Num1;
}
console.log(`Result: `+ result);

// -----------------------------

var total = 0;
var numberOfSubjects = 5;

console.log("Enter Marks of five subjects:");
for (var i = 0; i < numberOfSubjects; i++) {
  var subjectMarks = +prompt(`Enter marks for subject ${i + 1 }:`); 
  total += subjectMarks;
}

var average = total / numberOfSubjects;
var percentage = (total / (numberOfSubjects * 100)) * 100;
console.log("Total marks = " + total);
console.log("Average Marks = " + average);
console.log("Percentage = " + percentage);


// -----------------------------

var monthNumber = prompt("Enter Month Number");

if (monthNumber === '1' || monthNumber === '3' || monthNumber === '5' || monthNumber === '7' || monthNumber === '8' || monthNumber === '10' || monthNumber === '12') {
  console.log("Days in Month 31");
} else if (monthNumber === '4' || monthNumber === '6' || monthNumber === '9' || monthNumber === '11') {
  console.log("Days in Month 30");
} else if (monthNumber === '2') {
  console.log("Days in Month 29"); 
} else {
  console.log("Invalid Month Number");
}

// -----------------------------

var Physics = +prompt("Enter Physics marks:");
var Chemistry = +prompt("Enter Chemistry marks:");
var Biology = +prompt("Enter Biology marks:");
var Mathematics = +prompt("Enter Mathematics marks:");
var Computer = +prompt("Enter Computer marks:");

var totalMarks = Physics + Chemistry + Biology + Mathematics + Computer;
var percentage = (totalMarks / (5 * 100)) * 100;

var grade;

if (percentage >= 90) {
  grade = 'Grade A';
} else if (percentage >= 80) {
  grade = 'Grade B';
} else if (percentage >= 70) {
  grade = 'Grade C';
} else if (percentage >= 60) {
  grade = 'Grade D';
} else if (percentage >= 40) {
  grade = 'Grade E';
} else {
  grade = 'Grade F';
}
console.log(`Percentage:${percentage}%`);
console.log( grade);

// -----------------------------

var monthNumber = prompt("Enter Month Number:");
switch (monthNumber) {
  case '1':
  case '3':
  case '5':
  case '7':
  case '8':
  case '10':
  case '12':
    console.log("Days in Month 31");
    break;
  case '4':
  case '6':
  case '9':
  case '11':
    console.log("Days in Month 30");
    break;
  case '2':
    console.log("Days in Month 29"); 
    break; 
  default:
    console.log("Invalid Month Number");
}

// -----------------------------

var alphabet = prompt("Enter an alphabet:");

switch (alphabet) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log(" vowel");
    break;
  
  default:
    console.log(" consonant");
}

// -----------------------------

var number = Number(prompt("Enter a number"));

switch (number % 2) {
  case 0:
    console.log( "Even number");
    break;
  case 1:
    console.log( "Odd number");
    break;
  default:
    console.log(" Enter A Valid Number");
}

// -----------------------------

var number =Number(prompt("Enter a number"));

switch (true) {
  case number > 0:
    console.log(" positive number");
    break;
  case number < 0:
    console.log(" negative number");
    break;
  case number === 0:
    console.log("The number is zero");
    break;
  default:
    console.log("Enter A Valid Number");
}

// -----------------------------

var num1 = Number(prompt("Enter first number"));
var operator = prompt("Enter an operator ");
var num2 = Number(prompt("Enter second number"));

var result;
switch (operator) {
  case '+':
    result = num1 + num2;
    console.log(result);
    break;
  case '-':
    result = num1 - num2;
    console.log(result);
    break;
  case '*':
    result = num1 * num2;
    console.log(result);
    break;
  case '/':
    if (num2 === 0) {
      console.log("undefined");
    } else {
      result = num1 / num2;
      console.log(result);
    }
    break;
  default:
    console.log("Invalid operator");
}
// -----------------------------