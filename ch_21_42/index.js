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