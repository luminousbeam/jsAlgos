// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
function countdown(num)
{
  var arr = [];
  for(let i=num; i>=0; i--)
  {
    arr.push(i)
  }
  return arr
}
// console.log(countdown(10))

// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.

function printAndReturn(arr)
{
  console.log(arr[0]);
  return arr[1]
}

// printAndReturn([1,2]);

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false ).
function firstPlusLength(arr)
{
  return arr[0] + arr.length
}

// firstPlusLength([1,2,3,4])
// firstPlusLength(["hi", 3, 5, 6])

// Values Greater than Second
// For [1,3,5,7,9,13] , print values that are greater than its 2nd value. Return how many values this is.

function greaterThanSecond(arr)
{
  var count = 0;
  for(let i = 0; i < arr.length; i++)
  {
    if(arr[i] > arr[1])
    {
      console.log(arr[i])
      count ++;
    }
  }
  return count;
}

//greaterThanSecond([1,3,5,7,9,13])

// Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2 nd value. Print how many values this is. What will you do if the array is only one element long?

function gTS(arr)
{
  var newArr= [];
  for(let i=0; i<arr.length; i++)
  {
    if(arr[i]> arr[1])
    {
      newArr.push(arr[i])
    }
  }
  console.log(newArr.length)
  return newArr
}

//gTS([1,3,5,7,9,13])
// This Length, That Value
// Given two numbers, return array of length num1 with each value num2 . Print "Jinx!" if they are same.
function thisLengthThatValue(num1, num2)
{
var arr1= []
for(var i=0; i<num1; i++)
{
  arr1.push(num2)
  }
  if(num1 === num2)
  {
    console.log('Jinx!')
  }
  return arr1
}

//thisLengthThatValue(5,5)
// Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!" ; if value at [0] is less than array’s length, print "Too small!" ; otherwise print "Just right!" .
function fTFV(arr)
{
  if(arr[0] > arr.length)
  {
    console.log('Too Big')
  }
  else if(arr[0] < arr.length)
  {
    console.log('Too Small')
  }
  else
  {
    console.log('Just Right')
  }
}

//fTFV([4,2,3,4])
// Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32 .
//Divide by 5, then multiply by 9, then add 32
//(32°F − 32) × 5/9 = 0°C

function fahrenheitToCelsius(num)
{
  return (num-32)*5/9
}

//fahrenheitToCelsius(32)

// Celsius to Fahrenhei
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.


function celciusToFahrenheit(num)
{
  return (num/5)*9+32
}

//celciusToFahrenheit(0)

// (optional) Do Fahrenheit and Celsius values equate at a certain number? Scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.

function cool()
{
  var match=false
  var i=0
  while(!match)
  {
    console.log(i)
    if(fahrenheitToCelsius(i) === celciusToFahrenheit(i))
    {
      match == true
      console.log('They match at' + i);
    }
    i++;
  }
}
//cool()