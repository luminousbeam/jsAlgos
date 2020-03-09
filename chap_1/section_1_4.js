// Only Keep the Last Few
// Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount. Given array arr and number X , remove all except the last X elements, and return arr (changed and shorter). Given ([2,4,6,8,10],3) , change the given array to [6,8,10] and return it.

function shorten(arr, num)
{
  // newArr= []
  // for(var i=num; i<arr.length; i++)
  // {
  //   newArr.push(arr[i])
  // }
  // return newArr
  return arr.slice(num)
}

//shorten([1,2,3,4,5],3)


// Math Help
// Cartman doesn’t really like math; he needs help. You are given two numbers – coefficients M and B in the equation Y = MX + B. Build a function to return the X-intercept (his older cousin Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero; Cartman just snorts in his general direction).
function mathHelp(m,b)
{
  return(`X= ${b/m}`)
}

// Poor Kenny
// Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day’s outcome.

//volcanoes 1/10
//tsunami 15/100
//earthquakes 1/5
//blizards 1/4
//meteors 3/10
function kennyDies()
{
 var today= [];
 var volcano=Math.floor(Math.random() * 10) //a number between 0-9 10% chance to get a 1
 if(volcano ===1)
 {
   today.push('Volcano')
 }
 
 var tsunami=Math.floor(Math.random() * 100) //15% chance 1-100 if we get any number from 1-15 that 
 if(tsunami < 15)
 {
   today.push('Tsunami')
 }

 var earthquake=Math.floor(Math.random() * 5)
 if(earthquake===1)
 {
   today.push('EarthQuake')
 }

 var blizzards=Math.floor(Math.random() * 4)
 if(blizzards===1)
 {
   today.push('Blizzard')
 }

 var meteors=Math.floor(Math.random() * 10)
 if(meteors < 3)
 {
   today.push('Meteors')
 }
  if(!today.length)
  {
    return 'Kenny Lives'
  }
  return today
}
//kennyDies()

// What Really Happened?
// Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday() . In this new function test for each disaster independently , instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none . Maybe Kenny will survive!

function kennyDies()
{
 var today= [];
 var volcano=Math.floor(Math.random() * 10) //a number between 0-9 10% chance to get a 1
 if(volcano ===1)
 {
   today.push('Volcano')
 }
 
 var tsunami=Math.floor(Math.random() * 100) //15% chance 1-100 if we get any number from 1-15 that 
 if(tsunami < 15)
 {
   today.push('Tsunami')
 }

 var earthquake=Math.floor(Math.random() * 5)
 if(earthquake===1)
 {
   today.push('EarthQuake')
 }

 var blizzards=Math.floor(Math.random() * 4)
 if(blizzards===1)
 {
   today.push('Blizzard')
 }

 var meteors=Math.floor(Math.random() * 10)
 if(meteors < 3)
 {
   today.push('Meteors')
 }
  if(!today.length)
  {
    return 'Kenny Lives'
  }
  return today
}
// Soaring IQ
// Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan, entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98 th day (the end of 14 full weeks). What is Bogdan’s final IQ?

function soaringIQ(iq)
{
    for(var i=.01; i<.98; i+=.01)
    {
        iq+=i
    }
    return iq
}
// soaringIQ(101);

// Letter Grade
// Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88 , you should log "Score: 88. Grade: B" . Given the score 61 , log the string "Score:
// 61. Grade: D" .
// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log('Sorry, we are out of ' + expr + '.');
// }

function letterGrade(score){
  switch(true){
    case score>=90:
      console.log(`Score: ${score}. Grade: A`)
      break;
    case score>=80:
      console.log(`Score: ${score}. Grade: B`)
      break;
    case score>=70:
      console.log(`Score: ${score}. Grade: C`)
      break;
    case score>=60:
      console.log(`Score: ${score}. Grade: D`)
      break;
    default:
      console.log(`Score: ${score}. Grade: F...Fail.`)
  }
}
// letterGrade(55)
// letterGrade(90)
// letterGrade(72)
// More Accurate Grades
// For an additional challenge, add ‘ - ’ signs to scores in the bottom two percent of A, B, C and D scores, and “ + ” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). Given 88 , console.log "Score: 88. Grade: B+" . Given 61 , log "Score: 61. Grade: D-" .
function letterGradeAdvanced(score){
  switch(true){
    case score>=90:
      console.log(`Score: ${score}. Grade: A`)
      break;
    case score>=88:
        console.log(`Score: ${score}. Grade: B+`)
      break;
    case score>=83:
      console.log(`Score: ${score}. Grade: B`)
      break;
    case score>=80:
      console.log(`Score: ${score}. Grade: B-`)
      break;
    case score>=78:
        console.log(`Score: ${score}. Grade: C+`)
      break;
    case score>=73:
      console.log(`Score: ${score}. Grade: C`)
      break;
    case score>=70:
      console.log(`Score: ${score}. Grade: C-`)
      break;
    case score>=68:
        console.log(`Score: ${score}. Grade: D+`)
      break;
    case score>=63:
      console.log(`Score: ${score}. Grade: D`)
      break;
    case score>=60:
      console.log(`Score: ${score}. Grade: D-`)
      break;
    default:
      console.log(`Score: ${score}. Grade: F...Fail.`)
  }
}
letterGradeAdvanced(88)
letterGradeAdvanced(72)
letterGradeAdvanced(65)
