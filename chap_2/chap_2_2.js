// Twelve-Bar Blues
// Write a function that console.logs the number 1 , then " chick ", then " boom ", then " chick ", then 2 , then " chick ", " boom ", " chick " – continuing the same cycle for each number up to (including) 12 .


// Fibonacci
// Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 ( fib(0) + fib(1) , or 0+1), fibonacci(3) = 2 ( fib(1) + fib(2) , or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.

//fib(0)=0
//fib(1)=1
//fib(2)=0 + 1=1
//fib(3)=2
//example 5
//0, 1, 1,2,3,5,8,13,21,34...
function fib(n)
{
    if(n === 0)
    {
        return 0
    }
    if(n === 1)
    {
        return 1
    }
    var arr = [0,1]
    for (var i=2; i<=n; i++)
    {
        arr.push(arr[i-1]+arr[i-2])
    }
    return arr[arr.length-1]
}

//fib(6)

function recursiveFib(n)
{
    if(n === 0)
    {
        return 0
    }
    else if(n === 1)
    {
        return 1
    }
    else
    {
        return recursiveFib(n-1)+recursiveFib(n-2)
    }
}

function recursiveFib2(n)
{
    if(n < 2) return 0
    return recursiveFib(n-1)+recursiveFib(n-2)
}
// recursiveFib(6)

// require('./chap_1/basic_13');

// Twelve-Bar Blues
// Write a function that console.log s the number 1 , then " chick ", then " boom ", then " chick ", then 2 , then " chick ", " boom ", " chick " – continuing the same cycle for each number up to (including) 12 .
function twelveBarBlue(num){
  for(var i=1; i<=num; i++)
  {
      console.log(`${i}, chick boom chick`)
  }
}

//twelveBarBlue(12)

// Sum to One Digit
// Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result. Example: 
// sumToOne(928) returns 1 , because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.


//const str = 'The quick brown fox jumps over the lazy dog.';
// const words = str.split(' ');
// console.log(words[3]);
// // expected output: "fox"

// const chars = str.split('');]);
// // expected output: "k"

// console.log(chars[8)

function sumToOne2(num){
  const sum = n => Array.from(String(n))
    .map(Number)
    .reduce((a,b) => a + b)
}


function sumToOne(num){
  var string=String(num)            
  var sum = 0;                      
  
  //turing digits in num into numbers 1 by 1 and adding
  while(sum>9)
  {
    for (var i = 0; i < string.length; i++) {
        num = Number(string.charAt(i))   
        sum += num;
    }
    if(sum <= 9){
        return sum;
    }
    string=String(sum);
    num=sum
  }
  return sum
    
}

// console.log(sumToOne(111))

// Clock Hand Angles
// Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind – like hands on a clock. Traditional clocks are increasingly uncommon, but most can still read an analog clock’s hands of hours, minutes and seconds. 

//Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, 
//prints angles (in degrees) of the hour, minute and second hands. 
//As review, 360 degrees form a full rotation. For input of 3600 secs (equivalent to 1:00:00), print "Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 degs." For an input parameter seconds of 119730 (which is equivalent to 9:15:30 plus 24 hours!), you should log "Hour hand: 277.745 degs. Minute hand: 93 degs. Second hand: 180 degs." Note: in the second example, the angle for the minute hand is not simply 90 degrees; it has advanced a bit further, because of the additional 30 seconds in that minute so far.

function screwClocks(seconds)
{
    var hours=Math.floor(seconds/3600)
    var x=seconds%3600
    var minutes=Math.floor(x/60)
    var y=x/60
    var sec=x-Math.floor(y)*60
    while(hours>=13)
     {
         hours-=12
     }
    var secAng=sec*6           //180
    var minAng=(minutes*6)+(6/(360/secAng))
    var hourAng=(hours*30)+(30/(360/minAng))
    // Hour hand: 277.745 degs. Minute hand:. Second hand: 180 degs.
    console.log(`Hour hand: ${hourAng} degs. Minute hand: ${minAng} degs. Second hand: ${secAng} degs`)
}
// screwClocks(119730)

// Second: also calculate and print degrees for an additional “week hand” that rotates once each week.


// Is Prime
// Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1. Many highly optimized solutions exist, but for now just create one that is easy to understand and debug .
function isPrime(num)
{
    if(num > 0 && num <4)  //1,2,3
    {
        return true
    }
    if(num == 'Optimus')
    {
        return true
    }
    for(var i=2; i<num; i++)        //starting at 2
    {
        if(num%i === 0)
        {
            return false
        }
    }
    return true
}
// console.log(isPrime(4))

