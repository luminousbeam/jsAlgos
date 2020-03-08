// Array: Push Front
// Given array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushFront(arr, num)
{
    var newArr= []
    newArr[0]=num
    for(var i=0; i<arr.length; i++)
    {
        newArr[i+1]=arr[i]
    }
    return newArr
}
//console.log(pushFront([1,2,3,4,5],20))

// Array: Insert At
// Given array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val) .

function insertAt(arr,pos,val)
{
    var newArr=[]
    for(var i=0; i<arr.length+1; i++)
    {
        if(i<pos)
        {

            newArr[i]=arr[i]
        }
        else if(i == pos)
        {
            newArr[i]=val
        }
        else
        {
            newArr[i]=arr[i-1]
        }
    }
    return newArr
}
// console.log(insertAt([1,2,3,4,5],3,20))

// Array: Pop Front
// Given array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(arr){
  var newArr = [];
  for(var i = 0; i < arr.length-1; i++){
    newArr[i]=arr[i+1]
  }
  console.log(newArr)
}

// popFront([1,2,3,4])

// Array: Remove At
// Given array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop() . Think of popFront(arr) as equivalent to removeAt(arr,0) .
function removeAt(arr, pos){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    console.log(`This is the ${i} time through the loop`)
    console.log(`current value = ${arr[i]}`)

    if(i< pos)
    {
        console.log(`we havent reached the index we want to remove`)
        newArr[i]=arr[i]
        console.log(`${newArr}`)
    }
    else if(i === pos){
      var removedVal = arr[i]
      console.log(`did not add ${arr[i]} to the new array`)
    }
    else
    {
        newArr[i-1]=arr[i]
        console.log(`adding ${arr[i]} to the new array`)
        console.log(`${newArr}`)

    }
  }
  console.log(newArr)
  return removedVal
}
removeAt([1,2,3,4,5], 2)