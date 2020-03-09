// helper function that creates range
function range(start, end) {
  return Array.from(Array(end+1).keys()).slice(start)
}

// Print 1-255
// print1To255()
// Print all the integers from 1 to 255.
function printNums(num){
  for(let i = 1; i <= num; i++){
    console.log(i)
  }
}

const printNumsES6 = (num) => {
  const range = range(1, num)
  range.forEach(number => console.log(number))
}

// printNums(255)

// Print Ints and Sum 0-255
// printIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far.
function printNumsAndSum(num){
  let sum = 0;
  for(let i = 1; i <= num; i++){
    sum += i;
    console.log(i);
    console.log(sum);
  }
}

const printNumsAndSumES6 = num => {
  const range = range(0, num)
  range.reduce((a,b) => {
    console.log(a+b)
    return a+b
  }, 0)
}

// printNumsAndSum(255)

// Print Max of Array
// printMaxOfArray(arr)
// Given an array, find and print its largest element.
function printMaxOfArray(arr) {
  let max = arr[0];
  for(let i = 1; i <= arr.length; i++){
     if(arr[i] > max){
       max = arr[i];
    }
  }
  console.log(max);
}

const printMaxOfArrayES6 = (arr) => {
  // ...[1,2,3] => 1, 2, 3
  // Math.max(...[1,2,3]) => Math.max(1,2,3)
  console.log(Math.max(...arr))
}

//printMaxOfArray([1,2,3,4,5])

// Return Odds Array 1-255
// returnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).
function returnOddsArray(num)
{
    var array= [];
    for(var i=1; i<=num; i+=2)
    {
        array.push(i)
    }
    return array;
}

const returnOddsArrayES6 = num => {
  const arr = range(1, num)
  console.log(arr.filter(n => n%2 !== 0)) // zero returns falsey
}

// returnOddsArray(255)

// Return Array Count Greater than Y
// returnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.
function returnArrayCountGreaterThanY(arr, y)
{
    var count=0;
    for(var i in arr)
    {
        if(arr[i]> y)
        {
            count++
            console.log(arr[i])
        }
    }
    return count
}

const returnArrayCountGreaterThanYES6 = (arr, y) => {
  const result = arr.filter(n => n > y).length
  console.log(result)
}

//returnArrayCountGreaterThanY([1,2,3,4,5,6,7,8,9,10], 5)

// Print Max, Min, Average Array Values
// printMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.
function maxMinAvg(arr)
{
    var min=arr[0];
    var max=arr[0];
    var sum=0;
    for(var i in arr)
    {
        if(arr[i] > max)
        {
            max=arr[i]
        }
        if(arr[i] < min)
        {
            min=arr[i]
        }
        sum+=arr[i]
    }
    var avg=sum/arr.length

    console.log(`Max is ${max}, Min is ${min}, Average is ${avg}`)
}

const maxMinAvgES6 = arr => {
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  const avg = arr.reduce((a,b) => a+b, 0) / arr.length

  console.log(max, min, avg)
}

//maxMinAvg([1,2,3,4,5,6,7,8,9,10])

// Swap String for Array Negative Values
// swapStringForArrayNegativeVals(arr ) Given an array of numbers, replace any negative values with the string 'Dojo' .
function swap(arr, newVal)
{
    for(i in arr)
    {
        if(arr[i]<0)
        {
            arr[i]=newVal;
        }
    }
    return arr
}

const swapES6 = (arr, newVal) => {
  const result = arr.map(n => n < 0 ? newVal : n)
  console.log(result)
}

//swap([1,2,3,-4,-5,-6,7,8,9,-10], 'Dojo')

// Print Odds 1-255
// printOdds1To255()
// Print all odd integers from 1 to 255.
function printOdds(num)
{
    for(var i=1; i< num; i+=2)
    {
        console.log(i)
    }
}

const printOddsES6 = num => {
  const odds = range(1, num).filter(n => n%2 !== 0)
  odds.forEach(n => console.log(n))
}

// printOdds(255)

// Print Array Values
// printArrayVals(arr)
// Iterate through a given array, printing each value.
function printArrVals(arr){
  for(let i = 0; i < arr.length; i++){
   console.log(arr[i])
  }
}

const printArrValsES6 = arr => {
  arr.forEach(value => console.log(value))
}

exports.printArrValsES6 = printArrValsES6
// printArrVals([5,3,6,8,7])

// printAverageOfArray(arr)
// Analyze an array’s values and print the average.
function printAvgOfArray(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  let avg = sum/arr.length
  console.log(avg)
}

const printAvgOfArrayES6 = arr => {
  const result = arr.reduce((a,b)=>a+b,0) / arr.length
  console.log(result)
}

// printAvgOfArray([2,2,2,2,2])

// Square Array Values
// squareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values.
function squareArrayVals(arr){
  return arr.map(i => i*=i)
}

const squareArrayValsES6 = arr => arr.map(i => i*=i)

// squareArrayVals([2,3,4,5])

// Zero Out Array Negative Numbers
// zeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero.

// swap([1,2,-3,-4,5], 0)

// Shift Array Values Left
// shiftArrayValsLeft(arr)
function shiftLeft(arr)
{
    for(var i=1; i<=arr.length; i++)
    {
        arr[i-1]=arr[i]
    }
    return arr
}

const shiftLeftES6 = arr => {
  // make copy of array to avoid mutation
  let arrCopy = [...arr]
  // shifts array left, returns first array element
  arrCopy.shift()
  console.log(arrCopy)
}

// shiftLeft([1,2,3,4,5])