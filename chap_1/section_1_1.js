/*Setting and Swapping
*/

// Set myNumber to 42
// Set myName to your name
// Swap myNumber into myName & vice versa.
let myName = "John";
let number = 42;
let temp = myName;
myName = number;
number = temp;

// console.log(`myName: ${myName}, number: ${number}`)


//Print -52 to 1066
let i = -1;
while(i <= 10){
    // console.log(i);
    i++;
}

//Print integers from -52 to 1066 using a FOR loop.
for(let i = -1; i <= 10; i++) {
    // console.log(i);
}


//Don’t Worry, Be Happy
//Create beCheerful() . Within it, console.log string "good morning!" Call it 98 times.

function beCheerful() {
    console.log("good morning");
}

for(let i = 0; i < 10; i++){
    // beCheerful()
}

function beCheerful2(count) {
  let i = 0
  while(i < count) {
    console.log("good morning")
    i++
  }
}

//Multiples of Three – but Not All
//Using FOR , print multiples of 3 from -300 to 0. Skip -3 and -6.
for(let i = -30; i < 0; i++){
    if( i % 3 == 0 && i != -3 && i != -6){
        // console.log(i);
    }
}


// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE .
let j = 500;
while(j <= 528){
    // console.log(j);
    j++;
}

// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order , log "How did you know?" , else log "Just another day...."
function birthday(month, day){
    if(month == 12 && day == 25){
        console.log("How did you know?");
    } else {
        console.log("Just another day...");
    }
}

function birthday2(month, day){
  const condition = month == 12 && day == 25
  const result = condition ? "How did you know?" : "Just another day..."
  console.log(result)
}

// birthday(10, 15);
// birthday(12, 25);

// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is .
function isLeapYear(year){
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
}

//console.log(isLeapYear(2015))

/*
Print and Count
Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
*/
function printAndCount(i=512, max=1000, mult=5){
    while(i < max){
      if(i % mult === 0){
        console.log(i)
      }
      i++;
    }
}

// printAndCount();

/*
Multiples of Six
Print multiples of 6 up to 60,000, using a WHILE .
*/

// printAndCount(6, 600, 6)

// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is .
function isLeapYear(year){
    // return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
    //divible by 4 it is
    //divisble by 100 it isnt
    //divisible by 400 it is
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
    {
      return true
    }
    return false

}
// console.log(isLeapYear(2001))

// /*
// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
// */
function printAndCount(i=512, max=1000, mult=5){
  // while(i < max){
  //   if(i % mult === 0){
  //     console.log(i)
  //   }
  //   i++;
  // }
  let sum=0
  for(i; i<max; i+=5)
  {
    console.log(i)
      sum++;
  }
  
console.log(sum);
}


// printAndCount()

/*
Multiples of Six
Print multiples of 6 up to 60,000, using a WHILE .
*/

function multiplesOfSix(min=0, max=600, inc=6){
  while(min < max){
      console.log(min)
      min += inc;
    }
    
}

// printAndCount(6, 600, 6)
// multiplesOfSix()

/*
Counting, the Dojo Way
Print integers 1 to 100. If divisible by 5, print "Coding" instead . If by 10, also print " Dojo" .
*/
function counting(min=1, max=100, mult=5){
  for(let i = min; i < max; i++){

    console.log(i % 10 === 0 ? 'Coding Dojo' : i % 5 === 0 ? ' Dojo' : i) 

    // if(i % 10 === 0){
    //   console.log("Coding");
    // } else if ( i % 5 === 0) {
    //   console.log("Coding Dojo");
    // } else {
    //   console.log(i)
    // }
  }
}

// counting()

/*
What Do You Know?
Your function will be given an input parameter incoming . Please console.log this value.
*/



/*
Whoa, That Sucker’s Huge…
Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
*/



// var person = prompt("Please enter your name");

// if (person != null) {
//   console.log("Hello " + person + "! How are you today?");
// }



// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order , log "How did you know?" , else log "Just another day...."

function birthday(month, day){
  const answer = prompt("Guess birthday (month/day)")
  const [ansMonth,ansDay] = answer.split('/').map(e => +e)
    if(ansMonth === month && ansDay === day){
        console.log("How did you know?");
    } else {
        console.log("Just another day...");
    }
}

// birthday(12,25)

// Balance Point

// Write a function that returns whether the given array has a balance point between indices, where one side’s sum is equal to the other’s. Example: [1,2,3,4,9,1] → true ( between indices 3&4 ), but [1,2,4,2,1] → false .

function hasBalancePoint(arr){
  // let sumA = 0
  // let sumB = 0
  // for(let i = 1; i < arr.length; i++) {
  //   let arrA = arr.slice(0, i)
  //   let arrB = arr.slice(i, arr.length)
  //   console.log(arrA, arrB)
  //   let sumA = arrA.reduce((a,b) => a + b)
  //   let sumB = arrB.reduce((a,b) => a + b)
  //   if (sumA === sumB) {
  //     return true
  //   }
  // }
  // return false
  
  let sumA=arr[0]; //first value in array
  let sumB=0; 
  for(let i=1; i<arr.length; i++)
  {
    sumB+=arr[i]
  }

  for(let i=1; i< arr.length-1; i++)
  {
    if(sumA === sumB)
    {
      return true
    }
    sumA+=arr[i] //add the next number to sumA
    sumB-=arr[i] //subtract the next number from sumB
  }
  return false;
}

hasBalancePoint([1,2,3,4,9,1])

function countdown(num){
    if(num == 0){
      return;
    }
    console.log(num)
    countdown(num-1)
}

/*
Based on earlier “Countdown by Fours”, given lowNum , highNum , mult , print multiples of mult from highNum down to lowNum , using a FOR . For (2,9,3) , print 963 (on successive lines).
*/
function flexCountdown(lowNum, highNum, mult)
{
  for(let i=highNum; i>lowNum; i-=mult)
  {
    console.log(i);
  }
}
//print 6,12,15 (which are all of the multiples of 3 between 5 and 17 , and excluding the value 9 ).
function finalCountdown(lowNum, highNum, mult, skip)
{
  var i=lowNum;
  while(i<highNum)
  {
    if(i !== skip && i % 3 === 0)
    {
      console.log(i);
    }
    i++;
  }
}
// finalCountdown(5,17,3,9)
// countdown(20)

// 2day i learned
// +  Unary operator, converts string num to type numbers
// Array.from() Converts Array-like structures type array
// chaining ternary operators to simulate else if
