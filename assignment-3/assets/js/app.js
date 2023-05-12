//==============CH 3 VARIABLES FOR NUMBERS===============
//===================Q-1=============
// let age =15;
// alert("I am  "+age+ " years old")

//=============Q-2============

// let num = "you have visited this site 14 times";
// alert(num);
//===========Q3===============

// let birthYear = 1990;
// document.write("My birth year is " + birthYear+"<br>" +" Data type of my declare variable is number");

//============Q4=============

// let visitorName = "Jhon Doe ";
// let order = "ordered 5 T-shirt (s) ";
// let prodTittle =" on xyz clothing store ";
// let purchase =(visitorName + order + prodTittle );
// document.write(purchase);



//========chap 4 start LEGAL AND ILLEGAL===================
// ================Q1===========

// let uName;
// uName ="Mark";
// uName="jhon";

//=========Q2============

// LEGAL 5 CASE==========
// camelCase
// snackcase
// hiphane
// short name are legal
// letters dollar sign & underscode are allowed

//ILLEGAL 5 CASE========
 
// case sensitive ===Rose==rose==== not allow
// javascript variable same name not allow==var
// variable can't any space
//Don't write number in starting variable
//any type sign & operators not allow

//=============Q3=============

// let js = "Rules for naming JS variables "+"<br>"+"<br>";
// let js1 = "variable names can only contain number , $ and _.For example ;$ my_1st variable " +"<br>";
// let js2 = "Variable must begin with a letter,$ or _.For example :$ name,_name or name " +"<br>";
// let js3 = "Variable name are case sensitive "+"<br>";
// let js4 = "Variable name should not be Js keyword"+"<br>";
// let jsAns =(js + js1 +js2 +js3 +js4);
// document.write(jsAns);

//=========chap 5 MATH EXPRESSION======================
//========Q1============

// let num = 3;
// let num2 = 5;
// let ans = num + " and " + num2 ;
// document.write("sum of "+ ans +" is 8 ");

//=============Q2=============

// let num = 3;
// let num1 = 5 ;
// let answ = (num - num1);
// document.write("sub of "+ "3" + "-" +"5 is "+answ);

// let num = 3;
// let num2 = 5 ;
// let answ = (num * num2);
// document.write("multiply of " +"3"+ "*" + "5 is"+ answ);

// let num = 3;
// let num2 = 5;
// let answ = (num/num2);
// document.write("divide of "+" 3" +"/" + "5 is "+answ );

// let num = 3; //pehly bara nmbr likhy gy
// let num2 = 5;
// let ans = (num2 % num);
// document.write(ans);

//===============Q3==========
//==============a=========
// let value  ;
// document.write("value after variable declaration is "+value +"<br>");

//=============b==========
// value = 5 ;
// document.write("initial value is: "+ value);

// let num = 5;
// document.write(num +"<br>");
// num++;
// document.write("value after increament is :"+num +"<br>");


// document.write("Value after Addition is : " +(num + 7)+"<br>");

// let num =13
// num--;
// document.write ( "Value after decrement is :"+num);


// let num =6;
// let num2 = 3 ;
// let numAns = (num% num2);
// document.write("The remainder is: "+numAns);


//========Q4===============

// let movTicket =600;
// let buyTicket = 5;
// let ans = (movTicket * 5);
// document.write("Total cost to buy 5 tickets to a movie is "+ ans + "PKR");

//===========Q5==========
//  let heading ="<h1>TABLE OF 4</h1>"; 
//  document.write(heading); 
// for (i = 1; i <=10 ; i++){
//     document.write("4 " + "x "+ i +"= "+ 4*i +"<br>" )
// }
//=========Q6=============

// let celcius  = +prompt("enter tempratue in celsius" ,"c");
// let fahrenhite = + prompt("enter temprature in fahrenhite" ,"f");
// document.write("25 <sup>0</sup>C  is 77 "+" <sup>0</sup> F<br>");
// document.write(" 70<sup>0</sup> F is 21.1111111111 "+"<sup>0</sup> C");

//=================Q7=============
// let priceOfOne = 650 ;
// let priceOfTwo = 100 ;

// let heading ="<h1>Shopping Cart</h1>"+" <br>";
// document.write(heading);
// document.write("Price of item 1 is "+ priceOfOne +"<br>");
// document.write("Quantity of item 1 is 3 "+"<br>");
// document.write("Price of item 2 is 100 "+"<br>");
// document.write("Quantity of item 2 is 7 "+"<br>");
// document.write("Shipping Charges 100 "+"<br>");
// document.write("Total cost of your order is 2750 " );

//============Q8===========================

// let totalMarks = +prompt("Enter total marks") ;
// let obtainedMarks =+prompt("Enter your obtained marks ");
// let answ = (obtainedMarks*100)/(totalMarks);
// document.write("Total marks are : "+ totalMarks +"<br>");
// document.write("Marks obtained : "+ obtainedMarks +"<br>");
// document.write("Percentage :"+ answ);

//==========Q9==================================
// let dollar = +prompt("How many dollars you want to convert ");
// let riyal = +prompt("How many riyals you want to convert");
// let convertAmount =(dollar*104)+(riyal *28);
// document.write("<h1>Currency in PKR</h1>"+"<br>");
// document.write("Total currency in PKR "+convertAmount);

//===============Q10============================
// let num =+prompt("Eter number")
// let add = 5;
// let mul =10 ;
// let div = 2 ;
// let answ =((num + 5) *10 /2 );
// document.write(answ);

//===========================Q 11=================

// let currYear = +prompt("enter current year");
// let birthYear = +prompt("enter birth year");
// let realAge = (currYear - birthYear);
// document.write("<h1>Age Calculator</h1>");
// document.write("current year : " + currYear +"<br>");
// document.write("birth year : "+ birthYear+"<br>");
// document.write("your age is : "+realAge);



//=============Q 12=====================

// let circle = 20;
// let circumference = 12.56799999999999;
// let area = 1256.8;
// document.write("Radius of circle "+circle+ "<br> ");
// document.write("The circumference is : " + circumference+ "<br> ");
// document.write("The area is :"+ area);



//========================Q13=====================
// let favSnack = prompt("enter your fav snacks");
// let currAge = + prompt("enter your current age");
// let estAge = +prompt("enter your estimate age") ;
// let eatPerDay = +prompt("enter how much you eat per day") ;
// let qty =0 ;
// let accuValue =( estAge-currAge )*365;
// for (i = 1; i <=accuValue;i++ ){
//   qty = qty + eatPerDay;

// }
// document.write("your fav snack : "+favSnack+ " <br>");
//  document.write("your currAge : "+currAge+ " <br>");
//  document.write("your estimated max age : "+estAge + " <br>");
//  document.write("Amount of snack per day :"+ eatPerDay+ " <br>");
// document.write("you will need "+ qty+"to last you untill the ripe old age of"+estAge);
                 

//=============ASSIGNMENT 6-9 START ================
//=============Q1================
// let a =10;
// document.write("<h1>Result:</h1>")
// document.write("The value of a is "+ a + "<hr>");
// ++a ;
// document.write("The value of ++a is :" +a +"<br>");
// document.write("Now the value of a is :" +a +"<br>"+"<br>");

// document.write("The value of a++ is : 11 " +"<br>");
// a++;
// document.write("Now the value of a is :"+a +"<br>"+"<br>");
// document.write("The value of --a is : 11" +"<br>" );
// --a;
// document.write("Now the value of a is: "+a +"<br>" +"<br>");
// document.write("The value of a-- is 11 : "+"<br>");
// a--;
// document.write("Now the value of a is :"+a);

//==============Q2===================
// let a = 2 ;
// let b = 1 ;
// let result  ;
// let result2 ;
// let result3 = --a - --b + ++b + b--
// document.write(result3);
// document.write("<h1>Explain the output at each stage:</h1>");
// result = --a - --b;
// document.write(result + "<br>");
// result2= ++b + b--;
// document.write(result2 + "<br>");
// document.write(result3 + "<br>");
 
//=======Q3=========================

// let uName = prompt("what is your name");
// alert("Hello "+uName+ " Nice to meet you");

//================Q 4====================


// let table =+prompt("enter your fav table");
// for(i = 1 ;i <= 10; i++){
// console.log(table + " x "+ i + " = " +table*i );
// }
//=============Q 5 ====================
// let sub1 =prompt("enter the name of subject one:");
// let sub2 =prompt("enter the name of subject two:");
// let sub3 =prompt("enter the name of subject three:");
// let totalMarks = 100;
// let obtMarks1 =+prompt("enter your obtained marks "+ sub1 + ":");
// let obtMarks2 =+prompt("enter your obtained marks "+ sub2 +":");
// let obtMarks3 =+prompt("enter your obtained marks "+ sub3 +":");
// let totalObtMarks = obtMarks1 +obtMarks2 +obtMarks3;
// let per = (totalObtMarks /(totalMarks*3))*100;
// document.write("<table>");
//      document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + sub1 + "</td><td>" + totalMarks + "</td><td>" + obtMarks1 + "</td></tr>");
// document.write("<tr><td>" + sub2 + "</td><td>" + totalMarks + "</td><td>" + obtMarks2 + "</td></tr>");
// document.write("<tr><td>" + sub3 + "</td><td>" + totalMarks + "</td><td>" + obtMarks3 + "</td></tr>");
// document.write("<tr><td><strong>Total</strong></td><td><strong>" + totalMarks * 3 + "</strong></td><td><strong>" + totalObtMarks + "</strong></td></tr>");
// document.write("<tr><td><strong>Percentage</strong></td><td><strong>" + per + "%</strong></td><td></td></tr>");
// document.write("</table>");

   //=========== ch 9-10 user input and coditional statement=============

   //==============Q1===============
//    let city = prompt("enter your city name");//string  ko inv coma me likhna hy
//    if(city === "karachi"){
//     alert("Welcome to city of light");
//    }

//============Q2================
// let male=prompt("enter your gender");
// if (male==="male"){
// alert("Good Morning Sir")
// }
// let female =prompt("enter your gender");
// if(female ==="female"){
//     alert(" Good Morning Ma’am")
//  }

//==================Q3===================
// let color1 =prompt("enter any traffic signal color");
// if(color1==="red"){
//     alert("Must stop");
// }
// let color2 =prompt("enter any traffic signal color");
// if(color2==="yellow"){
//     alert("Ready to Move");
// }
// let color3 =prompt("enter any traffic signal color");
// if(color3==="green"){
//     alert("Move Now");
// }
//=======Q4==================
// let remFuel = +prompt("Enter the remaining fuel in your car in litres:");
// if (remFuel <= 0.25) {
//     alert("Please refill the fuel in your car!");
// }
//=============Q5==============
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }

// if (c === 13){
//     alert("condition 2 is true");
//     }
//     if (++c < 14){
//     alert("condition 3 is true");
//     }
//     if(c === 14){
//     alert("condition 4 is true");
//     }

    
//     var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

//================Q6==================

// let subject1Marks = +prompt("Enter marks obtained in subject 1:");
// let subject2Marks = +prompt("Enter marks obtained in subject 2:");
// let subject3Marks = +prompt("Enter marks obtained in subject 3:");
// let totalMarks = +prompt("Enter total marks:");

// let totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
// let percentage = (totalObtainedMarks / totalMarks) * 100;

// document.write("Percentage: " + percentage.toFixed(2) + "%<br>");

// if (percentage >= 90) {
//     document.write("Grade: A+");
// } else if (percentage >= 80) {
//     document.write("Grade: A");
// } else if (percentage >= 70) {
//     document.write("Grade: B");
// } else if (percentage >= 60) {
//     document.write("Grade: C");
// } else if (percentage >= 50) {
//     document.write("Grade: D");
// } else {
//     document.write("Grade: Fail");
// }
//======================Q7===========
// let secretNumber = Math.floor(Math.random() * 10) + 1;

// let userGuess = +prompt("Guess the secret number (between 1 and 10):");

// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer.");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     alert("Close enough to the correct answer.");
// } else {
//     alert("Sorry, the secret number was " + secretNumber + ".");
// }
//===================Q8===================

// let number = parseInt(prompt("Enter a number:"));

// if (number % 3 === 0) {
//     alert(number + " is divisible by 3.");
// } else {
//     alert(number + " is not divisible by 3.");
// }
//=============Q9============

// let number = +prompt("Enter a number:");

// if (number % 2 === 0) {
//     alert(number + " is an even number.");
// } else {
//     alert(number + " is an odd number.");
// }


//========Q10====================

// let temperature = +prompt("Enter the temperature in Celsius:");
// if(temperature <=60){
// if (temperature >= 40) {
//     alert("It is too hot outside.");
// } else if (temperature >= 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature >= 20) {
//     alert("Today’s Weather is cool.");
// } else {
//     alert("OMG! Today’s weather is so Cool.");
// }
// }

//================Q11===============

// let num1 = +prompt("Enter the first number:");

// let num2 = +prompt("Enter the second number:");

// let operator = prompt("Enter the operation (+, -, *, /, %):");

// let result;

// if (operator === "+") {
//     result = num1 + num2;
// } else if (operator === "-") {
//     result = num1 - num2;
// } else if (operator === "*") {
//     result = num1 * num2;
// } else if (operator === "/") {
//     result = num1 / num2;
// } else if (operator === "%") {
//     result = num1 % num2;
// } else {
//     alert("Invalid operator. Please enter a valid operator.");
// }
// alert("The result of " + num1 + " " + operator + " " + num2 + " is " + result + ".");


//===============ch 12 -13 if else testing statement================

//===========Q1=============
// let char = prompt("Enter a character:");

// let charCode = char.charCodeAt(0);

// if (charCode >= 48 && charCode <= 57) {
//     alert(char + " is a number.");
// }
// else if (charCode >= 65 && charCode <= 90) {
//     alert(char + " is an uppercase letter.");
// }
// else if (charCode >= 97 && charCode <= 122) {
//     alert(char + " is a lowercase letter.");
// }
// else {
//     alert("Invalid input. Please enter a valid character.");
// }
//===============Q2==============
let num1 = parseInt(prompt("Enter the first integer:"));

let num2 = parseInt(prompt("Enter the second integer:"));

if (num1 > num2) {
    alert(num1 + " is larger than " + num2 + ".");
}
else if (num2 > num1) {
    alert(num2 + " is larger than " + num1 + ".");
}
else {
    alert(num1 + " and " + num2 + " are equal.");
}
//=============Q3============
// let num = parseFloat(prompt("Enter a number:"));

// if (num > 0) {
//     alert(num + " is a positive number.");
// }
// else if (num < 0) {
//     alert(num + " is a negative number.");
// }
// else {
//     alert(num + " is zero.");
//}

//==============Q4============
// let char = prompt("Enter a character:");

// char = char.toLowerCase();

// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     alert("The character " + char + " is a vowel.");
// } else {
//     alert("The character " + char + " is not a vowel.");
// }
//===========Q5==============

// const correctPassword = "myPassword";

// let userPassword = prompt("Enter your password:");

// if (userPassword === "") {
//     alert("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password.");
// } else {
//     alert("Incorrect password.");
// }


//============Q6================
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

//======================Q7=============

var time24 = prompt("Enter time in 24-hour format (e.g. 1900 for 7pm):");

var time = Number(time24);

if (isNaN(time) || time < 0 || time >= 2400) {
  console.log("Invalid input!");
} else {
  var hour = Math.floor(time / 100);
  var minute = time % 100;
  var ampm = "";
  if (hour >= 12) {
    ampm = "pm";
    hour -= 12;
  } else {
    ampm = "am";
  }
  if (hour === 0) {
    hour = 12;
  }

  console.log("The time is " + hour + ":" + minute.toString().padStart(2, "0") + ampm + ".");
  if (hour < 6) {
    console.log("Good night!");
  } else if (hour < 12) {
    console.log("Good morning!");
  } else if (hour < 18) {
    console.log("Good afternoon!");
  } else {
    console.log("Good evening!");
  }
}


//==============ch12-13 ===complete============