// Threes and Fives
// Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both . Display the final sum in the console.
function threesFives(startNum, endNum){
  let sum = 0;
  for(let i = startNum; i <= endNum; i++){
    if(i % 5 === 0 || i % 3 === 0){
      sum+= i;
    }
  }
  console.log(sum)
}

// threesFives(1, 10)

// Second: Create betterThreesFives(start,end) that allows you to enter arbitrary start and end values for your range. Think of threesFives() as betterThreesFives(100,4000000).


// Generate Coin Change
// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents) . Accept a number of American cents, compute and print how to represent that amount with smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).
function coinChange(cents)
{
   var arr=[100,50,25,10,5]   //values of coins
   var results=[0,0,0,0,0,0]
   for(i in arr)
   {
       results[i]=Math.floor(cents/arr[i])
       cents-=arr[i]*results[i]
   }
    results[results.length-1]=cents
    
    return results 
}
// coinChange(94)
// Second: can you simplify/shorten your code?
// Example output, given (94) :
// 94 cents can be represented by:
// quarters:3
// dimes:1
// nickels:1
// pennies:4


// Third: add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less.


// Messy Math Mashup
// Create a function messyMath(num) that will return the following sum: add all integers from 0 up to the given num , except for the following special cases of our count value:
// If current count (not num ) is evenly divisible by 3, don’t add to sum ; skip to the
// nex t count ;
// Otherwise, if current count is evenly divisible by 7, include it twice in sum instead of once;
// Regardless of the above, if current count is exactly 1/3 of num , return -1 immediately.
// For example, if given num is 4 , return 7 . If given num is 8 , return 34 . If given num is 15 , return -1 .

function messyMath(num){
  let sum = 0;
  for(let i = 0; i <= num; i++){
    if(num % 3 === 0){
      return -1;
    }
    if(i % 3 === 0){

    } else if(i % 7 === 0){
      sum += i * 2;
    } else {
      sum += i;
    }
  } return sum;
}

function messyMath(num){
  let sum = 0;
  for(let i = 0; i <= num; i++){
    if(num % 3 === 0){
      return -1;
    }
    if(i % 7 === 0){
      sum += i * 2;
    } else if( i % 3 !== 0) {
      sum += i;
    }
  } return sum;
}



// messyMath(4)
// messyMath(8)
// messyMath(15)