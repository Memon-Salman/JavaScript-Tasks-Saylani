//          JS ASSIGNMENTS (Saylani)
// Chapter # 1

// Task # 1
// alert("Hello Js");

// Task # 2
// alert("Error! Please enter a valid password");

// Task # 3
// alert("Welcome to JS Land \n Happy Coding");

// Task # 4
// alert("Welcome to JS Land");
// alert("Happy Coding");

// Task # 5
// console.log("Hello , I can run JS through my Web Browser's console");

// Chapter # 2

// Task # 1
// var username;

// Task # 2
// var myName = "Salman Memon";

// Task # 3
// var message;
// message = "Hello World";
// alert(message);

// Task # 4
// var studentName = "John Doe";
// var studentAge = 17;
// var studentEdu = "Certified Mobile Application Development";

// alert(studentName);
// alert(studentAge + " years old");
// alert(studentEdu);

// Task # 5
// var pizza = "PIZZA" + "\n" + "PIZZ" + "\n" + "PIZ" + "\n" + "PI" + "\n" + "P";
// alert(pizza);

// Task # 6
// var message = "My email address is";
// var email = "example@example.com";
// alert(message + " " + email);

// Task # 7
// var book = "A Smarter way to learn JavaScript";
// alert("I am trying to learn JS from the book "+ book);

// Task # 8
// document.write("Yah! I can write HTML content through JavaScript");

// Task # 9
//   var border = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
//  alert(border);
//  document.write(border);

// Chapter # 3

// Task # 1

// var age = 21;
// alert(age);

// Task # 2

// var vTimes = 14;
// alert("You Have visited this site " +vTimes+ " times" );

// Task # 3

// var birthYear = 1998;
// document.write("My birth Year is " +birthYear + "<br>");
// document.write("Data Type of my declared virable is number");

// Task # 4

// var visitorName = prompt("Enter your Name:");
// var productTitle = prompt("Enter product Title:");
// var quantity = parseInt(prompt("How many "+productTitle+" You wants:"));

// document.write(visitorName + " ordered " + quantity +" "+productTitle+"(s)"+" on XYZ Clothing Store");

// Chapter # 4

// Task # 1

// var var_1, var_2, var_3;

// Task # 2

// var var_1; legal
// var myVariable; legal
// var var$; legal
// var var_1_a; legal

// var 1var; illagal
// var var+1; illagal
// var var 1; illagal
// var var-1; illagal
// var +Var; 

// Task # 3

// document.write("<h1> Rules for naming JS variables </h1> <br>");
// document.write("Variable names can only contain, number, $ and '_' for example: $m_1stVariable"+"<br>");
// document.write("Variables must begin with a '$' or '_' For example: $name, _name"+"<br>");
// document.write("Variable names are case Sensitive"+"<br>");
// document.write("Variable names should not be JS Keywords"+"<br>");

// Chapter # 5

// Task # 1

// var num_1 = parseInt(prompt("Enter value first:"));
// var num_2 = parseInt(prompt("Enter value Second:"));
// var result = num_1 + num_2;
// document.write("Sum of "+num_1+" and "+num_2+" is "+result);

// Task # 2
// var num_1 = parseInt(prompt("Enter value first:"));
// var num_2 = parseInt(prompt("Enter value Second:"));
// var result = num_1 - num_2;
// document.write("Subtration of "+num_1+" and "+num_2+" is "+result);

// var num_1 = parseInt(prompt("Enter value first:"));
// var num_2 = parseInt(prompt("Enter value Second:"));
// var result = num_1 * num_2;
// document.write("Multiplication of "+num_1+" and "+num_2+" is "+result);

// var num_1 = parseInt(prompt("Enter value first:"));
// var num_2 = parseInt(prompt("Enter value Second:"));
// var result = num_1 / num_2;
// document.write("Division of "+num_1+" and "+num_2+" is "+result);

// var num_1 = parseInt(prompt("Enter value first:"));
// var num_2 = parseInt(prompt("Enter value Second:"));
// var result = num_1 % num_2;
// document.write("Modulus of "+num_1+" and "+num_2+" is "+result);

// Task # 3

// var val;    // value of val is undefined
// console.log(val);
// val = 20;   // Initialization
// console.log(val);
// val++;      // Increment
// console.log(val);
// val = val + 7; // add 7 
// console.log(val);
// val--;  // Decrement 
// console.log(val);
// val = val % 3; // Modulus operator which gives output Remainder

// Task # 4

// var ticketPrice = 600;
// var costTicket = parseInt(prompt("Enter buying ticket"));
// document.write("Total cost to buy "+costTicket+" tickets to a movie is"+(costTicket * ticketPrice));

// Task # 5

// document.write("Table of 4"+"<br>");
// document.write("4 x 1 = 4"+"<br>");
// document.write("4 x 2 = 8"+"<br>");
// document.write("4 x 3 = 12"+"<br>");
// document.write("4 x 4 = 16"+"<br>");
// document.write("4 x 5 = 20"+"<br>");
// document.write("4 x 6 = 24"+"<br>");
// document.write("4 x 7 = 28"+"<br>");
// document.write("4 x 8 = 32"+"<br>");
// document.write("4 x 9 = 36"+"<br>");
// document.write("4 x 10 = 40"+"<br>");

// Task # 6

// Convert Celsius to Fahrenheit
// var cel = 25;
// var fahr = (cel * 9/5) + 32;
// console.log(cel+"C is "+fahr+"F");

// Convert Fahrenheit to Celsius 
// fahr = 98;
// cel = (fahr - 32) * 5/9;
// console.log(fahr+"F is "+cel+"C");

// Task # 7

// var item_1 = 650;
// var item_2 = 100;
// var shoping_charge = 100;
// var total_cost = 0;

// console.log("Price of item 1 is "+item_1);
// console.log("Quantity of item 1 is 3");
// console.log("Price of item 2 is "+item_2);
// console.log("Quantity of item 2 is 7");
// console.log("Shopping Charges "+shoping_charge);
// total_cost = (item_1 * 3) + (item_2 * 7) + shoping_charge;
// console.log("Total cost of your order is "+total_cost);

// Task # 8

// var total_marks = 1100;
// var perc = 0;
// var obt_marks = parseInt(prompt("Enter obtained marks"));
// perc = (total_marks / obt_marks) * 100;
// console.log("Percentage "+perc);

// Task # 9
// var us_dolar_Pk = 104.80;
// var riyal_Pk = 28;
// var us_dolar = parseInt(prompt("Enter US dollars:"));
// var riyal = parseInt(prompt("Enter Saudi Riyal:"));
// var total = (us_dolar * us_dolar_Pk) + (riyal * riyal_Pk);

// console.log("Total Currency in PKR "+total);

// Task # 10

// var val = 10;
// var result = val + 5 * 10 / 2;
// console.log("Result of Math expression "+result);

// Task # 11

// var currentYear = 2020;
// var birthYear = parseInt(prompt("Enter Your Birth Year:"));
// var age = currentYear - birthYear;
// console.log("Your Age is "+age);

// Task # 12

// const PI = 3.142;
// var radius = parseInt(prompt("Radius of Circle:"));
// var circumference = 2*PI*radius;
// var area = PI * radius ** 2;
// console.log("Circumference of a circle "+ circumference);
// console.log("Area of a circle "+ area);

// Task # 13

// var favSnack = prompt("Enter your Favourite Snack:");
// var age = parseInt(prompt("Enter your age:"));
// var snackAmount = parseInt(prompt("Amount of snacks per Day:"));
// var maxAge = 65;
// var result = (maxAge - age) * snackAmount;
// console.log("You will need "+result+" "+favSnack+" to last you until the ripe old age of "+maxAge);

// Chapter 6-9

// Task # 1
// var num = 10;
// console.log("The value of num is:"+num);
// ++num;
// console.log("The of ++num is:"+num);
// console.log("Now the value of num is:"+num);
// console.log("The of num++ is:"+num);
// num++;
// console.log("Now the value of num is:"+num);
// --num;
// console.log("The of --num is:"+num);
// console.log("Now the value of num is:"+num);
// console.log("The of num-- is:"+num);
// num--;
// console.log("Now the value of num is:"+num);

// Task # 2
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// console.log("result is:"+result);

// Task # 3

// var username = prompt("Enter user name:");
// console.log("Hello "+username);

// Task # 4


// Task # 5
// var sub_1 = prompt("Enter subject 1:");
// var sub_2 = prompt("Enter subject 2:");
// var sub_3 = prompt("Enter subject 3:");
// var totalMarks = 100;
// var subMark1 = parseInt(prompt("Enter subject 1 Marks:"));
// var subMark2 = parseInt(prompt("Enter subject 2 Marks:"));
// var subMark3 = parseInt(prompt("Enter subject 3 Marks:"));
// var allMarks = totalMarks*3;
// var allSubMarks = subMark1+subMark2+subMark3;
// var perc = (allSubMarks/allMarks)*100;
// console.log(sub_1+" "+subMark1);
// console.log(sub_2+" "+subMark2);
// console.log(sub_3+" "+subMark3);
// console.log("Total Marks:"+allMarks);
// console.log("obtained Total Marks:"+allSubMarks);
// console.log("Percentage:"+perc+"%");

// Chapter # 9 - 11

// Task # 1

// var city = prompt("Enter city name:");
// if(city === "karachi"){
//     alert("Welcome to city of Lights");
// }

// Task # 2

// var gender = prompt("Enter your Gender");
// if(gender === "male"){
//     alert("Welcome to Sir");
// }
// else{
//     alert("Welcome to Ma'am");
// }

// Task # 3

// var color = prompt("Enter Road Signal Color:");
// if(color === 'red'){
//     alert("Must Stop");
// }
// else if(color === 'yellow'){
//     alert("Ready to Move");
// }
// else if(color === 'green'){
//     alert("Move Now");
// }
// else{
//     alert("Incorrect color");
// }

// Task # 4

// var fuel = Number(prompt("Enter your fuel in the car:"));
// if(fuel <= 0.25){
//     alert("Please refill the Fuel in your car");
// }
// else{
//     alert("Your fuel is enogh");
// }

// Task # 5

// var obt_marks = parseInt(prompt("Enter your obtained Marks out of 300"));
// var total_marks = 300;
// var perc = (obt_marks/total_marks)*100;
// if(perc >= 80 && perc <= 100){
//     console.log("Total Marks:"+total_marks);
//     console.log("Obtained Marks:"+obt_marks);
//     console.log("Percentage:"+perc);
//     console.log("Grade: A+");
//     console.log("Remarks: Excellent")

// }
// else if(perc >= 70 && perc <= 80){
//     console.log("Total Marks:"+total_marks);
//     console.log("Obtained Marks:"+obt_marks);
//     console.log("Percentage:"+perc);
//     console.log("Grade: A");
//     console.log("Remarks: Good")

// }
// else if(perc >= 60 && perc <= 70){
//     console.log("Total Marks:"+total_marks);
//     console.log("Obtained Marks:"+obt_marks);
//     console.log("Percentage:"+perc);
//     console.log("Grade: B");
//     console.log("Remarks: You need to Improve")
// }
// else if(perc < 60 && perc >= 0){
//     console.log("Total Marks:"+total_marks);
//     console.log("Obtained Marks:"+obt_marks);
//     console.log("Percentage:"+perc);
//     console.log("Fail");
//     console.log("Remarks: Sorry");
// }
// else {
//     alert("Incorrect Marks")
// }

// Task # 6
// var secret_num = 6;
// var guess_num = parseInt(prompt("Guess the Secret Number:"));
// if(secret_num === guess_num){
//     alert("Bingo! Correct Answer");
// }
// else if(guess_num === secret_num+1 || guess_num === secret_num-1){
//     alert("Close enough to the correct answer");
// }
// else{
//     alert("Try Again");
// }

// Task # 7
// var num = parseInt(prompt("Check number is divisible by 3"));
// if(num%3 === 0){
//     alert("Complete divisible by 3");
// }
// else{
//     alert("Not divisble by 3 (Remainder):"+num%3);
// }

// Task # 8 
// var num = parseInt(prompt("Number check even or Odd"));
// if(num%2 === 0){
//     alert("Even")
// }
// else{
//     alert("Odd");
// }

// Task # 9
// var temp = Number(prompt("Enter Temperature of your area"));
// if(temp > 40 && temp < 55){
//     alert("It is too hot outside");
// }
// else if(temp > 30 && temp < 40){
//     alert("The Weather today is Normal");
// }
// else if(temp > 20 && temp < 30){
//     alert("Today's Weather is Cool");
// }
// else if(temp > 10 && temp < 20){
//     alert("OMG! Today's Weather is so Cool");
// }
// else{
//     alert("Enter correct Temperature")
// }

// Task # 10

// var val_1 = Number(prompt("Enter Value 1st:"));
// var operator = prompt("Enter Operator");
// var val_2 = Number(prompt("Enter Value 2nd:"));
// if(operator === '+'){
//     alert("Answer: "+(val_1+val_2))
// }
// else if(operator === '-'){
//     alert("Answer: "+(val_1-val_2));
// }
// else if(operator === '*'){
//     alert("Answer: "+(val_1*val_2));
// }
// else if(operator === '/'){
//     alert("Answer: "+(val_1/val_2));
// }
// else if(operator === '%'){
//     alert("Remainder: "+(val_1%val_2));
// }
// else{
//     alert("Incorrect Operator");
// }

// Chapter # 12 - 13

// Task # 1
// var char = prompt("Enter characher");
// if(char.charCodeAt() >= 65 && char.charCodeAt() <= 90){
//     alert("Capital Letter")
// }
// else if(char.charCodeAt() >= 97 && char.charCodeAt() <= 122){
//     alert("Small Letter")
// }
// else if(char.charCodeAt() >= 48 && char.charCodeAt() <= 57){
//     alert("Number")
// }
// else {
//     alert("Other Char or symbol")
// }

// Task # 2

// var num_1 = parseInt(prompt("Enter 1st number:"))
// var num_2 = parseInt(prompt("Enter 2nd number:"));
// if(num_1 > num_2){
//     alert("Number 1st is greater");
// }
// else{
//     alert("Number 2nd is greater")
// }

// Task # 3
// var num = parseInt(prompt("Enter number"));
// if(num > 0){
//     alert("Number is postive");
// }
// else if(num === 0){
//     alert("Number is Zero");
// }
// else{
//     alert("Number is negative")
// }

// Task # 4

// var char = prompt("Enter character:");
// if(char === 'a' || char === 'e'|| char === 'i' || char === 'o' || char === 'u'){
//     alert("vowel")
// }
// else if(char.length > 1){
//     alert("You enter String please enter 1 charater")
// }
// else {
//     alert("False")
// }

// Task # 5
// var pswd = 4422;
// var checkPswd = prompt("Enter Password:");
// console.log(checkPswd)
// if(pswd === checkPswd){
//     alert("Correct");
// }
// else{
//     alert("Incorrect");
// }

// Task # 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }

// Task # 7
// var time = parseInt(prompt("Enter Time in 24 hour Format","1900"));
// if(time >= 0000 && time < 1200){
//     alert("Good Morning")
// }
// else if(time >= 1200 && time < 1700){
//     alert("Good Afternoon");
// }
// else if(time >= 1700 && time < 2100){
//     alert("Good Evening");
// }
// else if(time >= 2100 && time <= 2359){
//     alert("Good Night");
// }
// else{
//     alert("Invalid")
// }

// Chapter # 14 - 16

// Task # 1

// var student = []    // empty array using JS literal notation to store student names

// Task # 2

// var student = new Array();  //  array using JS object notation to store student

// Task # 3
// var strArr = ['Karachi','Hyderabad','Sukkur'];  // String Array

// Task # 4
// var numArr = [1,2,4,6];   // Number Array

// Task # 5
// var boolArr = [true,false];  // Boolean Array

// Task # 6
// var mixArr = ['Karachi',3,true,[]];   // Mix Array

// Task # 7
// var eduPk = ['SSC','HSC','BCS','BS','BCOM','MS','M.Phil','PhD'];
// console.log(eduPk)

// Task # 8
// var std = ['Micheal','John','Tony'];
// var scr = [];
// var perc = [];
// var total_marks = 500;
// for(var get = 0;)
// scr[scr.length] = parseInt(prompt("Enter score "+std[0]));
// scr[scr.length] = parseInt(prompt("Enter score"+std[1]));
// scr[scr.length] = parseInt(prompt("Enter score"+std[2]));
// perc[perc.length] = (scr[0] / total_marks) * 100;
// perc[perc.length] = (scr[1] / total_marks) * 100;
// perc[perc.length] = (scr[2] / total_marks) * 100;
// for(var i = 0; i<perc.length;i++)
//     console.log(perc[i])

// Task # 9
// var colorArr = ['red','green','blue'];
// console.log(colorArr)
// var addColor = prompt("Which color want to add in the beginning");
// colorArr.unshift(addColor);
// console.log(colorArr);
// addColor = prompt("Which color want to add in the end:");
// colorArr.push(addColor);
// console.log(colorArr);
// colorArr.unshift(prompt("add two color more, Enter 1st:"),prompt("enter 2nd color"));
// console.log(colorArr);
// colorArr.shift();
// console.log("deleted 1st color:");
// console.log(colorArr);
// colorArr.pop();
// console.log("deleted last color");
// console.log(colorArr);
// var indexColor = parseInt(prompt("Enter index where you want to add new color:"));
// addColor = prompt("Enter color:")
// colorArr.splice(indexColor,0,addColor);
// console.log(colorArr);
// indexColor = parseInt(prompt("enter the index where you want to delete color:"));
// var valueColor = parseInt(prompt("How many want to delete color/s"));
// colorArr.splice(indexColor,valueColor);
// console.log(colorArr)

// Task # 10
// var studentScore = [230,210,190,250,150,286];
// console.log("Student's Score: "+studentScore);
// studentScore.sort();
// console.log("Order by Student's Score: "+studentScore);

// Task # 11
// var cities = ["karach","Islamabad","Sukkur","Hyderabad","Larkana"];
// console.log(cities);
// var seletedCites = cities.slice(2,4);
// console.log("Selected Cities: "+seletedCites);

// Task # 12
// var arr =  ['This','is','my','cat'];
// console.log(arr)
// var stringArr = arr.join()
// console.log(stringArr);

// Task # 13 
// FIFO   (First In First Out)   using Array Shift Method
// var arr = ["Keyboard","mouse","printer","monitor"];
// var outArr = arr.shift();
// console.log(outArr);
// outArr = arr.shift();
// console.log(outArr);
// outArr = arr.shift();
// console.log(outArr);
// outArr = arr.shift();
// console.log(outArr);

// Task # 14
// LIFO (Last In First Out) Using Array pop Method
// var arr = ["Keyboard","mouse","printer","monitor"];
// var outArr = arr.pop();
// console.log(outArr);
// outArr = arr.pop();
// console.log(outArr);
// outArr = arr.pop();
// console.log(outArr);
// outArr = arr.pop();
// console.log(outArr);

// Chapter # 17 - 20

// Task # 1
// var arr = [[0,1,2,3],[1,0,6,2],[2,1,0,1]];
// console.log(arr.length)
// for(var i = 0; i < arr.length;i++){
//     for(var j=0;j<4;j++){
//         document.write(arr[i][j]);
//     }
//     document.write("<br>")

// }

// Task # 2
// for(var i = 1; i <=10;i++){
//     console.log(i)
// }

// Task # 3
// var tble = parseInt(prompt("Enter table:"));
// var tbleLength = parseInt(prompt("Enter length of Table:"));
// var result
// for(var i = 1; i <= tbleLength; i++){
//     result = tble * i;
//     console.log(i+" * "+tble+" = "+result)
// }

// Task # 4

// var fruit = ['Apple','Banna','Mango','Orange','Starwberry'];
// for(var i = 0; i<fruit.length;i++){
//     console.log("Element at indox "+i+" "+fruit[i]);
// }

// Task # 5
// 1 - 15 counting
// for(var i = 1; i <= 15; i++){
//     console.log(i);
// }
// Reverse Counting
// for(var i=15; i>=1;i--){
//     console.log(i)
// }
// Even Counting
// for(var i =0;i<=20; i+=2){
//     console.log(i)

// }
// Odd counting
// for(var i=1; i<=20;i+=2){
//     console.log(i)
// }
// Series counting
// for(var i=2;i<=20;i+=2){
//     console.log(i+"k")
// }

// Task # 6
// var arr = ['cake','apple pie','cookie','chips','patties'];
// var searchItem = prompt("Welcome to ABC Bakry. What do you want to order:");
// var found = true;
// for(var i= 0; i<arr.length;i++){
//     if(arr[i] === searchItem){
//         alert(searchItem+" is available at index "+i+" in our bakery");
//         found = false;
//     }
// }
// if(found){
//     alert("We are sorry. "+searchItem+" is not avaible in our bakery")
// }

// Task # 7
//  identify the largest number in the given array

// var arr = [23,43,53,34,55];
// var count = 0;
// for(var i = 0; i<arr.length;i++){
//     for(var j=0; j < arr.length; j++){
//         if(arr[i] > arr[j]){
//             count++;
//         }
//         if(count >= arr.length - 1){
//             console.log(arr[i]);
//         }
//     }
//     count = 0;
// }

// Task # 8
// identify the smallest number in the given array

// var arr = [23,54,32,56,16,24];
// var count = 0;
// for(var i = 0; i < arr.length; i++){
//     for(var j=0; j < arr.length; j++){
//         if(arr[i] < arr[j]){
//             count++;
//         }

//         if(count >= (arr.length-1)){
//             console.log(arr[i])
//         }
//     }
//     count = 0;
// }

// Task # 9

// var multipy = 5;
// var result = 0;
// for(var i = 1; i <= 20;i++){
//     result = multipy * i;
//     console.log(result)
// }

// Chapter # 21 - 25

// Task # 1

// var firstName = prompt("Enter first Name:");
// var lastName = prompt("Enter last Name");
// var fullName = firstName + lastName;
// alert(fullName);

// Task # 2
// var mblName = prompt("Enter your mobile name and model");
// var mblLength = mblName.length;
// console.log("My favorite phone is:"+mblName);
// console.log("lenght:"+mblLength);

// Task # 3
// var str = "Pakistani";
// console.log(str);
// console.log("index of 'n': "+str.indexOf('n'));

// Task # 4
// var str = "Hello World";
// console.log(str);
// console.log("Last index of 'l':"+str.lastIndexOf('l'))

// Task # 5
// var str = "Pakistani";
// console.log(str);
// console.log("Char at index 3:"+str.charAt(3));

// Task # 6

// var firstName = prompt("Enter first Name:");
// var lastName = prompt("Enter last Name");
// var fullName = firstName.concat(" "+lastName);
// alert(fullName);

// Task # 7

// var str = "Islamabad";
// console.log(str);
// var replcStr = str.replace("Islam","Hyder");
// console.log(replcStr)

// Task # 8

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var newStr = message.replace(/and/g,"&");
// console.log(message);
// console.log(newStr);

// Task # 9

// var str = "472";
// console.log(str+" "+typeof(str));
// var change = Number(str);
// console.log(change+" "+typeof(change))

// Task # 10

// var str = prompt("Enter string");
// console.log(str);
// console.log(str.toUpperCase());

// Task # 11
// var str = prompt("Enter string");
// console.log(str);
// var firstLetter = str.charAt(0);
// firstLetter = firstLetter.toUpperCase();
// var other = str.slice(1)
// var fullStr = firstLetter+other;
// console.log(fullStr);

// Task # 12

// Task # 13
// var username = prompt("enter username");
// if(username.match("@")){
//     alert("please enter a valid username")
// }
// else{
//     alert("corret")
// }

// Task # 14

// var bakery = ["cake","apple pie","cookie","chips","patties"];
// var order = prompt("Welcome to ABC Bakey. What do you want to order");
// var isfound = false;
// order = order.toLowerCase();
// for(var i = 0; i < bakery.length; i++){

//     if(bakery[i] === order){
//         alert(bakery[i]+" is available at index"+i+" in our Bakery");
//         isfound = true;
//         break;
//     }
// }
// if(!isfound){
//     alert("We are sorry."+order+" is not available.")
// }

// Task # 15


// Task # 16
// var str = "University of Karachi";
// console.log(str);
// str = str.split("");
// console.log(str)

// Task # 17
// var str = "pakistan";
// console.log(str);
// str = str.charAt(str.length -1)
// console.log(str)

// Task # 18
// var text = 'The quick brown fox jumps over the lazy dog';
// text = text.toLowerCase();
// var isfound = false
// var count = 0;
// for(var i = 0; i < text.length; i++){
//     if(text.slice(i,i + 3) === 'the'){
//         count++;
//         isfound = true;
//     }
// }
// if(isfound){

//     console.log("There are "+count+" occurrence(s) of word 'the'")
// }
// else{
//     console.log("not found word 'the'")
// }

// Chapter 26 - 30

// Task # 1

// var num = 3.4534;
// console.log("Number: "+num);
// console.log("Round off value: "+Math.round(num));
// console.log("Floor value: "+Math.floor(num));
// console.log("Ceil value: "+Math.ceil(num));

// Task # 2

// var num = -2.4345;
// console.log("Number: "+num);
// console.log("Round off value: "+Math.round(num));
// console.log("Floor value: "+Math.floor(num));
// console.log("Ceil value: "+Math.ceil(num));

// Task # 3


// Task # 4

// var dice = Math.random() * 6;
// dice = Math.ceil(dice)
// console.log("Random Dice Value:"+ dice)

// Task # 5

// var coin = Math.random() * 2;
// coin = Math.ceil(coin);
// if(coin === 1){
//     console.log("Heads Coin "+coin)
// }
// else{
//     console.log("Tails coin "+coin)
// }

// Task # 6

// var num = Math.random() * 100;
// num = Math.ceil(num);
// console.log("Random Number Between 1 to 100: "+num);

// Task # 8

// var secret_num = Math.random() * 10;
// secret_num = Math.ceil(secret_num);
// var guess_num = parseInt(prompt("Guess Secrect Number:"));
// if(guess_num === secret_num){
//     alert("Got it")
// }
// else if(guess_num > secret_num){
//     alert("Too high. Try again")
// }
// else if(guess_num < secret_num){
//     alert("Too Low. Try again")
// }
// else{
//     alert("Invalid")
// }

// Chapter 31 - 34

// Task # 1

// var currentDate = new Date();
// console.log(currentDate);

// Task # 2

// var currentMonth = new Date().getMonth()
// console.log(currentMonth)

// Task # 3

// var date = new Date()
// var day = date.toString()
// day = day.slice(0,3)
// console.log("Today is "+day)

// Task # 4

// var day = new Date().getDay();
// if(day === 5 || day === 6){
//     console.log("It's Fun Day")
// }
// else{
//     console.log("It's Working Day")
// }

// Task 5

// var date = new Date().getDate();
// if(date >=15 && date <= 30){
//     console.log("Last fifteen days of Month")
// }
// else{
//     console.log("First fifteen Days of Month")
// }

// Task # 6


// var date = new Date()
// var miliSec = date.getTime()
// var min = miliSec/(1000*60*60)
// console.log(`Current Date: ${date}`)
// console.log(`Mili Second Since Jan 1,1970: ${miliSec}`)
// console.log(`Minutes Since Jan 1,1970: ${min}`)

// Task # 7

// var hours = new Date().getHours()
// if(hours >= 12 && hours <= 24)
//     console.log("It's PM")
// else
//     console.log("It's AM")

// Task # 8

// Task # 9

// Task # 10

// var getDate = new Date(prompt("Enter Date","Jan 1, 1970"))
// var currentDate = new Date()
// var diff = currentDate.getTime() - getDate.getTime();
// var sec = diff/(1000*60)
// console.log(`On Refernce date ${getDate}`)
// console.log(`${sec} seconds had passed since ${getDate.getFullYear()}`)

// Task # 11

// var date = new Date()
// var lastHour = date.getHours() - 1;
// date.setHours(lastHour)
// console.log(date)

// Task # 12

// var date = new Date()
// var backYears = date.getFullYear() - 100;
// date.setFullYear(backYears)
// console.log(date)

// Task # 13

// var age = Number(prompt("ENter your age"));
// var date = new Date()
// date = date.getFullYear() - age;
// console.log(date)

// Task # 14

// let customerName = prompt("Enter Your name");
// let monthArr = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// let currentMonth = new Date().getMonth()
// let units = Number(prompt("Enter Units:")).toFixed(2)
// let chargesPerUnit = 16;
// let amountWithDue = units * chargesPerUnit;
// let surCharges = 350;
// let amountAfterDue = amountWithDue + surCharges

// console.log(`Customer Name: ${customerName}`)
// console.log(`Month: ${monthArr[currentMonth]}`)
// console.log(`Number of Units: ${units}`)
// console.log(`Charges Per Units: ${chargesPerUnit}`)
// console.log(`Net Amount Payable (With due date): ${amountWithDue}`)
// console.log(`Late Payment surcharges: ${surCharges}`)
// console.log(`Gross Amount payable(After due date): ${amountAfterDue}`)

// Chapter 35 - 38 (Functions)

// Task # 1

// function date(){
//     let date = new Date()
//     return date
// }

// var getDate = date()
// console.log(getDate)

// Task # 2

// function greet(fName,lName){
//     console.log(`Hello ${fName} ${lName}`)
// }
// var firstName = prompt("Enter your first Name")
// var lastName = prompt("Enter your Last Name")
// greet(firstName,lastName)

// Task # 3

// function sum(val1,val2){
//     return val1 + val2
// }

// let num1 = Number(prompt("Enter value 1st"))
// let num2 = Number(prompt("Enter value 2nd"))

// var getSum = sum(num1,num2)
// console.log("Sum is: "+getSum);


// Task # 4

// function cal(val1,val2,op){
//     let ans;
//     if(op === '+')
//         ans = val1 + val2
//     else if(op === '-')
//         ans = val1 - val2 
//     else if(op === '*')
//         ans = val1 * val2
//     else if(op === '/')
//         ans = val1 / val2
//     else if(op === '%')
//         ans = val1 % val2
//     else
//         alert("Error! Incorrect Operator")

//     return ans
// }

// let num1 = Number(prompt("Enter Value 1st"))
// let num2 = Number(prompt("Enter value 2nd"))
// let op = prompt("operation (+ - * / %)")

// var getAns = cal(num1,num2,op)
// console.log("Answer : "+getAns)

// Task # 5

// function square(sq){
//     console.log(`Square of ${sq}: ${sq**2}`)
// }
// square(Number(prompt("Enter number")))

// Task # 6

// let num = Number(prompt("Enter number"));
// let result = 1;

// function factorail(num){
//     for(var i=num; i>0; i--){
//         result = i*result;

//     }
//     return result;
// }

// let fac = factorail(num);

//  console.log(fac);

// Task # 7

// function counting(s,e){
//     for(let i=s;i<=e;i++){
//         console.log(i)
//     }
// }

// let start = Number(prompt("Start number"))
// let end = Number(prompt("End number"))

// counting(start,end)

// Task # 8

// function calcHypo(b,p){
//     let hypo = 0;
//     function calcSqu(){
//         hypo = (b**2) + (p**2)
//         return hypo
//     }
//     hypo = calcSqu() ** 2

//     return hypo;
// }

// var base = Number(prompt("Enter Base"))
// var perp = Number(prompt("Enter Perpendicular"))

// console.log(calcHypo(base,perp))

// Task # 9

// function area(width,height){
//     return width * height
// }

// let width = Number(prompt("Enter Width"))
// let height = Number(prompt("Enter Height"))

// var area1 = area(5,10);
// var area2 = area(width,height);

// console.log(area1)
// console.log(area2)

// Task # 10

// var str = prompt("Enter String");
// str = str.toLowerCase()
// console.log(str);
// var word=[] ;
// for (var i = str.length -1; i >= 0; i--) {
//     word += str[i] 
// }
// if(word === str){
//     console.log("Palindrome Word ==> ",word);
// }
// else{
//     console.log("Not Palindrome Word ==>",word);
// }

// Task # 11

// var input = prompt("Enter String");
// input = input.toLowerCase();
// function capitalize(){
//     let word = input.split(" ");
//     for(let i=0;i<word.length;i++){
//         word[i] = word[i][0].toUpperCase() +word[i].substr(1)
//     }
//     input = word.join(" ")
//     return input;
// }
// var getCapitalize = capitalize()
// console.log(getCapitalize);

// Task 12

// var str = "I am salman Memon Web Developer";
// str = str.split(" ");
// console.log(str);
// for(var i=0;i<str.length;i++){
//     console.log("sub str",str[i].substr(0).length);

// }

// Task # 13

// function letterCount(string,letter) {
//     let count = 0;
//     for(var i=0;i < string.length;i++){
//       if(str[i] === letter){
//         count++;
//       }
//     }
//     return count;
// }
// var str = prompt("Enter String");
// var le = prompt("Enter letter count occurrences");

// console.log(letterCount(str,le)); 


// Chapter 38-42

// Task # 1

// function power(num,power){
//     let result = 1;
//     for(let i=1;i<power;i++){
//         result = num * result
//     }
//     return result
// }

// let num = Number(prompt("Enter number"))
// let p = Number(prompt("Enter Power"))

// console.log(power(num,p))

// Task # 2

// function leapYear(year){
//     return year%4===0 ? "leap Year" : "Not Leap Year"
// }

// let y = parseInt(prompt("Enter year "))

// console.log(leapYear(y))

// Task # 3

// function areaTriangle(a,b,c){
//     let s = (a+b+c) / 2
//     let area = s*(s - a)*(s - b)*(s - c)
//     alert("Area of Triangle ",area)
// }

// var a = Number(prompt("Enter length point A:"))
// var b = Number(prompt("Enter length point B:"))
// var c = Number(prompt("Enter length point C:"))

// areaTriangle(a,b,c)

// Task # 4

// function recvMarks(sub1,sub2,sub3){
//     let avg = 0;
//     let total = 300;
//     let obt_marks = 0;
//     let per = 0;
//     function avgFunc(){
//         avg = (sub1+sub2+sub3) / 3
//         console.log("avg",avg)

//     }
//     function perFunc(){
//         obt_marks = sub1+sub2+sub3;
//         per = (obt_marks / total) * 100;
//         console.log("per",per)
//     }
//     avgFunc()
//     perFunc()
// }

// let sub1 = Number(prompt("Enter subject 1st marks"))
// let sub2 = Number(prompt("Enter subject 2nd marks"))
// let sub3 = Number(prompt("Enter subject 3rd marks"))


// recvMarks(sub1,sub2,sub3)

// Task # 5

// var str = "I m salman";
// console.log(myIndexOf('s'))

// function myIndexOf(char){
//     for(var i=0;i<str.length;i++){
//         if(str[i] === char){
//             console.log(i)
//             break;
//         }
//     }
// }

// Task # 6

// var removeVowel = function(str){
//     var vowel = ['a', 'e', 'i', 'o', 'u'];
//     var count = 0;
//     var newstr = ""
//     for (var i = 0; i < str.length; i++) {
//         for(var j=0;j<vowel.length;j++){
//             if(str[i] === vowel[j]){
//                 count++;
//             }
//         }
//         if(count === 1){
//             str.replace("")
//         }
//         else{
//             newstr += str[i]
//         }
//         count = 0;
//     }
//     return newstr;
// }

// var str = "This is my sample";
// console.log(str)
// console.log("Remove Vowel==>",removeVowel(str));

// Task # 7

// var str = "Please read this application and give me gratuity";
// var found = 0, count = 0;
// for(var i=0;i<str.length;i++){
//     if(isVowel(str[i])){
//         found++
//     }
//     else{
//         found = 0;
//     }
//     if(found === 2){
//         console.log(str[i-1]+""+str[i]);
//         found =1;
//         count++;
//     }

// }
// console.log(str);
// console.log("Total occurance",count++);

// function isVowel(char){
//     switch(char){
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return 1;
//         default :
//             return 0;

//     }
// }

// Task # 8

// let getDistance = (distance) =>{
//     let result = 0;
//    function meter(){
//         result = distance * 1000;
//         console.log(`${result} meters`)
//    }
//    function feet(){
//        result = distance * 3280.84;
//        console.log(`${result} feet`)

//    }
//    function inches(){
//        result = distance * 39370.1
//        console.log(`${result} inches`)

//    }
//    function centimeter(){
//        result = distance * 100000;
//        console.log(`${result} centimeters`)

//    }
//    meter();
//    feet();
//    inches();
//    centimeter();
// }


// var cityFrom = prompt("Enter city from");
// var cityTo = prompt("Enter city designation");
// var designationDistance = Number(prompt("Designation city distance in Km"));
// getDistance(designationDistance)

// Task # 9

// let pay = Number(prompt("Enter your pay"));
// let hours = parseInt(prompt("Enter your working hours"))
// let overTime = 12;
// if(hours > 40){
//     hours -= 40;
//     overTime *= hours;
//     pay += overTime;
//     console.log(`Your overTime Working hours are ${hours} and total pay is ${pay}`)
// }
// else{
//     console.log("your pay is "+pay)
// }

// Task # 10

// function countNotes(cash) {
//     var hundreds = parseInt(cash / 100);
//     var fif = cash % 100;
//     var tens = fif - 50;
//     fif = parseInt(fif / 50);
//     tens = parseInt(tens / 10);

//     console.log(`You will have ${hundreds} hundred notes ${fif} notes ${tens} ten notes`);

// }

// var cash = parseInt(prompt("Enter your cash"));
// countNotes(cash)









