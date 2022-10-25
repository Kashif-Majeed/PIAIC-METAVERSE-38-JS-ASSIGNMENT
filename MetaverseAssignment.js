// Q2. Personal Message: Store a person’s name in a variable, and print a message to that person.
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”


var name1 = "Eric";
console.log("Hello " + name1 + "," + " would you like to learn some Python today?");



// 3.    Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

var personName = "Zia Khan";
var namLower = personName.toLowerCase();
var namUpper = personName.toUpperCase();


console.log(namLower);
console.log(namUpper);


var username2 = "zIa kHaN";
const titleCase = (str) => {
    let toTitleCase = str
      .toLowerCase().split(" ")
      .map((letter) => {
        return `${letter.charAt(0).toUpperCase()}${letter.slice(1)}`;
      })
      .join(" ");
    return toTitleCase;
  };
  const checkTitleCase = titleCase(username2);
  console.log(checkTitleCase);


// 4.    Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
// Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”



console.log(`Quaid-e-Azam once said,"Muslims never afraid of hard / tough times."`);


// 5.   Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
// Then compose your message and store it in a new variable called message. Print your message.

var famousPerson = "Imran Khan";
var message = "Aap ne Ghabrana nahi hai!";

console.log(`${famousPerson} said, "${message}"`);




// 6.   Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. 
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.







// 7.   Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. 
// Be sure to enclose your operations in print statements to see the results.

// 8.   You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.

console.log(4 + 4);
console.log(9 - 1);
console.log(2 * 4);
console.log(16 / 2);




// 9.   Favorite Number: Store your favorite number in a variable. Then, using that variable, 
// create a message that reveals your favorite number. Print that message.

let favNum = 90;
let message1 = "My favorite Number is: " + favNum
console.log(message1);




// 10.   Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
// If you don’t have anything specific to write because your programs are too simple at this point, 
// just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.









//11.    Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.


let friendNames = ["Rashid", "Shahid", "Zubair", "Murtaza"];
friendNames.forEach(element => {
    console.log(element);
});

// 12.    Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same, but each message should be personalized with the person’s name.

let friendNames1 = ["Rashid", "Shahid", "Zubair", "Murtaza"];
friendNames1.forEach(element => {
  console.log(`${element}, What are you doing?`);
});


// 13.    Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples.
//  Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

var favTransports = ["Peagout", "Bentley", "Sonata", "Elantra", "Lexus"];

for (let i=0; i < favTransports.length; i++) {
  console.log(`I would like to own a ${favTransports[i]}`);
}



// 14.    Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//  Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.

let invitations = ["Asif", "Kashif", "Haris", "Akram", "Hamzah"];
invitations.forEach(val => {
console.log(`Dear Mr.${val}, You are invited for Dinner this Saturday at 10p.m`)
})




// 15.     Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

console.log(`${invitations[2]} is unable to attend the Dinner Party.`);

invitations.splice(2,1,"Daniyal");
console.log(invitations);

invitations.forEach(element => {
  console.log(`Dear ${element}, You are invited for Dinner this Saturday at 10p.m.`)
})


// 16.    More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program 
// informing people that you found a bigger dinner table.

invitations.forEach(element => {
  console.log(`Dear ${element}, Good News, We found a bigger dinner table!`);
})

// • Add one new guest to the beginning of your array.

invitations.unshift("Abdullah");


// • Add one new guest to the middle of your array. 

let newInvite = (invitations.length) / 2;
invitations.splice(newInvite,0,"Raheel");
console.log(invitations);

// • Use append() to add one new guest to the end of your list. 

invitations.push("Amjad");

console.log(invitations);

// • Print a new set of invitation messages, one for each person in your list.

invitations.forEach(element => {
  console.log(`Dear ${element}, You are invited for Dinner on Sunday at 10pm.`);
})

// 17.    Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16. 
// Add a new line that prints a message saying that you can invite only two people for dinner.

invitations.forEach(element => {
console.log(`Dear ${element}, Bad News, New Dinner Table won't arrive in time, so, we have space for 2 guests for dinner.`);
})

// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

console.log(invitations);
for (let i = invitations.length-1; i > 1; i--){
  console.log(`Dear ${invitations[i]}, I am so sorry that you are not invited for dinner.`);
  invitations.pop();
}



// • Print a message to each of the two people still on your list, letting them know they’re still invited.

console.log(invitations);
invitations.forEach(element => {
console.log(`Dear ${element}, You are still invited for Dinner!`)

})


// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.


invitations.pop();
console.log(invitations);
invitations.pop();
console.log(invitations);




// 18.    Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

let locations = ["Paris", "Bermuda Triangle", "Tokyo", "Switzerland",  "Los Vegas"];

// • Print your array in its original order.

console.log(locations);
let locations01 = [...locations]

// • Print your array in alphabetical order without modifying the actual list.



function locSort(){
 let locations1 = locations.sort()
  console.log(locations1);
}
locSort()




// • Show that your array is still in its original order by printing it.
console.log(locations01);

// • Print your array in reverse alphabetical order without changing the order of the original list.
let locations2 = locations.reverse()
console.log(locations2);


// • Show that your array is still in its original order by printing it again.
console.log(locations01);

// • Reverse the order of your list. Print the array to show that its order has changed.
let locations3 = locations.reverse()
console.log(locations3);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
let locations4 = locations.reverse();
console.log(locations4);


// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

let locations5 = locations.sort();
console.log(locations5);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let locations6 = locations.reverse();
console.log(locations6);



// 19.    Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.





// 20.    Think of something you could store in a array. 
// For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
// Write a program that creates a list containing these items.

let countries = ["Pakistan", "India", "Afghanistan", "Sri Lanka", "Hong Kong"];
let languages = ["Urdu", "Hindi","Pashto", "Tamil", "Hanke"];

console.log(countries);
console.log(languages);


// 21.    They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.

let person = {
  firstName1: "Asif",
  lastName1: "Ashiq Ali",
  age1:   40,
  city1: "Islamabad",
}

console.log(person);


// 22.    Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
// Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.







// 23.     Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction 
// for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


// 5 true tests
let user1 = "Asim";

// 1.
if (user1 === "Asim") {
  console.log ("true");
}

// 2.
if (21 > 12){
  console.log("true");
}

// 3.
let x = 89
let y = 69

if (x > y){
  console.log("true");
}

// 4.
let z = x + y

if(z == 158) {
  console.log ("true");
}

// 5.
if(x !== y){
  console.log("true");
}

// 5 false tests:

// 1.
if (x === y){
  console.log("true");
}
else {
  console.log("false");
}

// 2.

if(z < 150) {
  console.log("true");
}
else {
  console.log("false");
}

// 3.

if (x < y) {
  console.log("true");
}
else {
  console.log("false");
}

// 4.

if(y > x) {
  console.log("true");
}
else {
  console.log("false");
}

// 5.

if (user1 !== "Asim"){
  console.log("true");
}
else {
  console.log("false");
}



// 24.     More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, 
// write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings


// Equality tests

var name1 = "Abu zar";

if(name1 === "Abu zar") {
  console.log ("He is a Good boy!");
}

if(name1 === "Abu Bakr") {
  console.log ("He is a Good boy!");
}
else {
  console.log ("He is nice boy too!");
}

// Inequality tests

if (name1 !== "Juma Khan") {
  console.log("We want Juma Khan!");
}

// • Tests using the lower case function

var name2 = name1.toLowerCase();
if (name2 === "abu zar") {
  console.log("abu zar in small letters");
}

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to

let num = 20;
let num1 = 50;

if (num === 20) {
  console.log("The number is: " + num);
}

if (num !== 20) {
  console.log ("That's wrong number!");
} 
else {
  console.log("That's correct number!");
}

// greater than and less than

if (num1 > num) {
  console.log ("Khush Raho!");
}

if (num1 < num) {
  console.log("theek hai!")
}
else {
  console.log("Yeh ho nahi sakta!");
}

// greater than or equal to

if (num1 >= num) {
  console.log("Sahih ja rahe ho!");
}

// less than or equal to


if (num <= num1) {
  console.log("Ok hai!");
}
else {
  console.log("No way!");
}

// • Tests using "and" and "or" operators

if (num > 10 && num1 <= 50) {
  console.log("Tremedous job!");
}

if (num < 20 || num1 > 20) {
  console.log ("I like your approach!");
}



// • Test whether an item is in a array

  let arr1 = ["1", "2", "3", "4"];
console.log(typeof arr1);

  function checkArray1(value) {
    let result = Array.isArray(value);
    console.log(result);
  }
  checkArray1(arr1);


// • Test whether an item is not in a array


let number1 = 25;
  
  console.log(typeof number1);

  function checkArray(arr) {
    let result = Array.isArray(arr);
    console.log(result);
  }
  checkArray(number1)
  

// 25.     Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

let alienColor = "Green";
if (alienColor === "Green"){
  console.log("You have earned 5 points!");
}


if (alienColor === "Hara"){
  console.log("You have earned 50 points");
}


// 26.     Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

let alienColor1 = "Blue"

if (alienColor1 === "Green"){
  console.log("You have earned 5 points!")
}
else {
  console.log("You have earned 10 points!")
}



// 27.     Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alienColor2 = "Red";

if (alienColor2 === "Green"){
  console.log("You have earned 5 points!");
}
else if (alienColor2 ==="Yellow") {
  console.log("You have earned 10 points!");
}
else if (alienColor2 === "Red") {
  console.log("You have earnedd 15 points!"); 
}


switch (alienColor2) {
  case "Green":
    console.log("You have earned 5 scores");
  break;
  case "Yellow":
    console.log("You have earned 10 scores");
  break;
  case "Red":
    console.log("You have earned 15 scores");
  break;
  default:
    console.log("Wrong Input!");
}




// 28.     Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.


let Inputage = 45;

if (Inputage < 2){
 console.log("The Person is a Baby!");
}
else if (Inputage >= 2 && Inputage < 4) {
  console.log("The Person is a Toddler!");
}
else if (Inputage >= 4 && Inputage < 13) {
  console.log("The Person is a Kid!");
}
else if (Inputage >= 13 && Inputage < 20) {
  console.log("The Person is a Teenager!");
}
else if (Inputage >= 20 && Inputage < 65) {
  console.log("The Person is a Adult!");
}
else if (Inputage >= 65) {
  console.log("The Person is a Elder!");
}





// 29.     Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements
//  that check for certain fruits in your array.

let favFruits = ["Bananas", "Apricots", "Grapes", "Pine Apples", "Mangoes"];
let findFruits = favFruits.includes("Custard Apples");
if (findFruits === true){
  console.log("That's the fruit I want!");
}
else {
  console.log("Where I can find Custard Apples?");
}

let findFruits1 = favFruits.includes("Grapes");
console.log(findFruits1);
if (findFruits1 === true){
  console.log("That's the fruit I want!");
}
else {
  console.log("Where I find Apples?");
}

// • Make a array of your three favorite fruits and call it favorite_fruits.

let favoriteFruits = ["Kela", "Angoor", "Aam"];
console.log(favoriteFruits);

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// for (let i = 0; i < favoriteFruits.length; i++)
// if (favoriteFruits ==="Bananas"){
//   console.log(`I really like Bananas`)
// }
// else if (favoriteFruits ==="Kela") {
//   console.log(`I really like Kela`)
// }
// else if (favoriteFruits === "")



// 30.       Hello Admin: Make a array of five or more usernames, including the name 'admin'.
//  Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, 
//  and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


let userNames = ["Admin", "user1", "user2", "user3", "user4", "user5"];
for (let i=0; i < userNames.length; i++){
if (userNames[i] === "Admin") {
  console.log ("Hello Admin, would you like to see a status report?");
}
else {
  console.log (`Dear ${userNames[i]}, thank you for logging in again`);
}
}

let usernames1 = [...userNames]






// 31.     No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

 userNames = [];

if (userNames.length === 0){
  console.log("We need to find some users!");
}






// 32.     Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. 
// If it has, print a message that the person will need to enter a new username. 
// If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let CurrentUsers = ["Asim", "Amir", "Akram", "Amber", "Asma", "Adnan"];

let NewUsers = ["Ambereen", "Angelina", "Akram", "Anasha", "Asim", "Atif"];
 
for (let i=0; i<CurrentUsers.length; i++){
  if(NewUsers.includes(CurrentUsers[i]) ) {
    console.log("User is Already Assigned!");
  }
  else {
    console.log("User is available!");
  }
}
  

// 33.     Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
// Most ordinal numbers end in th, except 1[], 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let ordinal = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i=0; i<ordinal.length; i++) {
  if (ordinal[i]==1){
    console.log(`${ordinal[0]}st`);
  }
  else if(ordinal[i]==2){
    console.log(`${ordinal[1]}nd`);
  }
  else if(ordinal[i]==3){
    console.log(`${ordinal[2]}rd`);
  }
  else {
    console.log(`${ordinal[i]}th`);
  }
}


// 34.      Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
// and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
//  For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

let pizzas = ["supreme", "bbq chicken", "pepperoni"];

for (let i=0; i < pizzas.length; i++){
  console.log(pizzas[i]);
}

for (let i=0; i < pizzas.length; i++){
  console.log(`I like ${pizzas[i]} pizza!`);
}





// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
// The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
// such as I really love pizza!

console.log("I really love pizza!")
console.log("Extra topping of mushrooms and olives,")
console.log("gives additional tastes, YYYUUUUMMMMYYY!!!!!!")


// 35.    Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, 
// and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, 
// such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. 
// You could print a sentence such as Any of these animals would make a great pet!


let beast =["Lions", "Tigers", "Leopards"];

for (let i=0; i<beast.length; i++) {
  console.log(beast[i]);
}

for (let i=0; i<beast.length; i++) {
  console.log(`${beast[i]} are known as wild beast animals.`);
}
console.log("Some peoples would like to keep these beast as pet animals.")


// 36.    T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

let size1;

function makeShirt(para1, para2){
  if (para1 <= 10){
    size1 = "Small size"
     console.log(`${size1}! Your Shirt measurement is: ${para1} and ${para2}`);
    }
 else if (para1 > 11 && para1 <= 30) {
  size1 = "Medium Size"
  console.log(`${size1}! Your Shirt measurement is: ${para1} and ${para2}`)
 }
 else if (para1 > 31 && para1 <= 50) {
  size1 = "Large Size"
  console.log(`${size1}! Your Shirt measurement is: ${para1} and ${para2}`)
 }
 else if (para1 > 50) {
  size1 = "X-Large Size"
  console.log(`${size1}! Your Shirt measurement is: ${para1} and ${para2}`)
 }
}

makeShirt(40, "Full Sleeves with Front Pocket.")



// 37.     Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

if (size1 === "Large Size" || size1 ==="Medium Size") {
  console.log("Great size!");
}
else {
  console.log("Not Good Size!");
}





// 38.    Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. 
// Give the parameter for the country a default value. Call your function for three different cities, 
// at least one of which is not in the default country.



function describeCity(city){
  console.log(`${city} is in Pakistan.`);
}

describeCity("Hyderabad");
describeCity("Quetta");
describeCity("Peshawar");


// 39.     City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.


function cityCountry(para){
  console.log(`${para}, Pakistan`)
}
cityCountry("Lahore");

cityCountry("Islamabad");

cityCountry("Rawalpindi");


// 40.     Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
// Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing 
// the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//  Make at least one new function call that includes the number of tracks on an album.








// 41.     Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.

let magicians = ["samri", "aamri", "kaawri", "jaawri"];

function showMagician(){
magicians.forEach(element => {
 console.log(element) 
})
}

showMagician()


// 42.     Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
let magician2;
function makeGreat(){
 magician2 = magicians.map(element => "The Great " + element)
    console.log(magician2);
  }

makeGreat()

showMagician()



// 43.     Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great()
//  with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store it in a separate array. 
//  Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added 
//  to each magician’s name.

console.log(magician2);
let magician3 = Array.from(magician2);
console.log(magician3);

showMagician()

makeGreat()

console.log(magicians);

console.log(magician2);

console.log(magician3);






// 44.     Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.


let sandwich = ["Bread", "smashed chicken", "mayonise", "egg", "cucumber"]

function sandwiches(para){
  sandwich.push(para)
  console.log(sandwich)
}
sandwiches("ketchup");

sandwiches("onion");

sandwiches("cole slaw");


// 45.    Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name.
//  It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and 
// two other name-value pairs, such as a color or an optional feature.
// Print the Object thats returned to make sure all the information was stored correctly





const myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969,
  
};

function showProps(obj, objName) {
  let result = '';
  for (const i in obj) {
    // obj.hasOwn is used to exclude properties from the object's prototype chain and only show "own properties"
    if (Object.hasOwn(obj, i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(result);
}
showProps(myCar, 'myCar') 

