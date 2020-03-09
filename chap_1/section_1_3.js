// Biggie Size
// Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5] .

function makeItBig(arr)
{
  for(var i=0; i< arr.length; i++)
  {
    if(arr[i]>0)
    {
      arr[i]='big'
    }
  }
  return arr
}
// makeItBig([-1,3,5,-5])

// Print Low, Return High
// Create a function that takes array of numbers. The function should print the lowest value in the array, and return the highest value in the array.
function lowHigh(arr)
{
  var lowNum=arr[0]
  var highNum=arr[0]
  for(var i=1; i<arr.length; i++)
  {
    if(arr[i]<lowNum)
    {
      lowNum=arr[i]
    }
    if(arr[i]>highNum)
    {
      highNum=arr[i]
    }
  }
  console.log('Low num is ' + lowNum)
  return(highNum)
}
//lowHigh([1,2,3,4,5])

// Print One, Return Another
// Build a function that takes array of numbers. The function should print second-to-last value in the array, and return first odd value in the array.
function printReturn(arr)
{
  console.log(arr[arr.length-2])
  for(i in arr)
  {
    if(i % 2 == 1)
    {
      return i
    }
  }
}
//printReturn([1,2,3,4,5])

// Double Vision
// Given array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.
function double(arr)
{
  for(i in arr)
  {
    arr[i]=arr[i]*2
  }
  return arr
}
// double([2,4,6])

// Count Positives
// Given array of numbers, create function to replace last value with number of positive values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function countPositives(arr){
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      count ++;
    }
  }
  arr[arr.length - 1] = count;
  return arr;
}

// countPositives([-1,1,1,1])


// Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

function evensAndOdds(arr){
  //create two variables, one for evenCount, one for oddCount
  //iterate over the array, for loop
  //if we find an even number, add to evenCount
  //if we find an odd number, add to oddCount
  let evenCount=0
  let oddCount=0
  for(i in arr)
  {
    if(arr[i] % 2 ===0)
    {
      oddCount=0
      evenCount++
      if(evenCount===3)
      {
        console.log('Even more so')
        evenCount=0
      }
    }
    else
    {
      evenCount=0
      oddCount++
      if(oddCount===3)
      {
        console.log('Thats Odd')
        oddCount=0
      }
    }
  }

}
//evensAndOdds([1,2,1,1,1,2,2,2,1,1,1,1,1,1])

//Ternary ex:
// var age = 26;
// var beverage = (age >= 21) ? "Beer" : "Juice";
// console.log(beverage); // "Beer"

// Increment the Seconds
// Given arr , add 1 to odd elements ( [1] , [3] , etc.), console.log all values and return arr .
function incrementSeconds(array1)
{
  const incrementSeconds = array1.map(x => (x%2==1) ? x + 1 : x);
  console.log(incrementSeconds)
}
// incrementSeconds([1,2,3,4,5])

// Previous Lengths
// You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.
//['I', 'Like', 'Pizza']
//['I', 1, 4]
function previousSeconds(arr)
{
  for(var i=arr.length-1; i>0; i--)
  {
    arr[i]=arr[i-1].length
  }
  return arr
}
// previousSeconds(['I', 'Like', 'Pizza'])

// Add Seven to Most
// Build function that accepts array. Return a new array with all values except to the first , adding 7 to each. Do not alter the original array.
function sevenToMost(arr)
{
  var map= arr.map(x => x+7)
  map[0]-=7
  return map
  
}
//sevenToMost([1,1,1,1])

// Reverse Array
// Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3] .
function reverse(arr)
{
  var temp;
  var end=arr.length-1
  for(var i=0; i<arr.length/2; i++)
  {
    
    temp=arr[i];
    arr[i]=arr[end-i];
    arr[end-i]=temp;
  }
  return arr
}
//reverse([3,1,6,4,2])

// Outlook: Negative
// Given an array, create and return a new one containing all the values of the provided array, made negative ( not simply multiplied by -1 ). Given [1,-3,5] , return [-1,-3,-5].
//Math.abs ex:
// function pos_to_neg(num)
// {
// return -Math.abs(num);
// }
function negative(arr)
{
  const newArr =arr.map(x => -Math.abs(x))
  return newArr
}
// negative([1,-3,5])

// Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food" . If no array elements are "food" , then print "I'm hungry" once. ["food", "car", "dog", 3]
function alwaysHungry(arr){
  count = 0;
  for(i in arr){
    if(arr[i] === "food"){
      console.log("yummy");
      count ++;
    }
  }
  if(count === 0){
    console.log("I'm hungry");
  }
}

// alwaysHungry(["car", "dog", 3])

// Swap Toward the Center
// Given array, swap first and last, third and third-to-last, etc. Input [ true ,42,"Ada",2, "pizza" ] becomes [ "pizza" ,42,"Ada",2, true ] . Change [1,2,3,4,5,6] to [6 ,2, 4 , 3 ,5, 1].
function swap(arr)
{
  var temp;
  var end=arr.length-1;
  for(var i=0; i<arr.length/2; i+=2)
  {
    
    temp=arr[i];
    arr[i]=arr[end-i];
    arr[end-i]=temp;
  }
  return arr
}

// swap([ true ,42,"Ada",2, "pizza" ])
// swap([1,2,3,4,5,6])

// Scale the Array
// Given array arr and number num , multiply each arr value by num , and return the changed arr .
function scaleArr(arr, num){
  return arr.map(x => x * num)
}

//scaleArr([1,2,3,4], 2)