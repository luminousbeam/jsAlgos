// Gaming Fun(damentals)

// It’s New Year’s Eve, so let’s play some dice games! It’ll be fun. What could go wrong? 1) Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive). 2) Second, create a function playFives(num) , which should call rollOne() multiple times – ‘ num ' times, in fact, where 'num' is input parameter to playFives(num) . Each time, it should print the value rollOne() returns, and if that return value is 5, also print “That’s good luck!” 3) Third, create a new function named playStatistics() , which should call rollOne() eight times (but not print anything after each call). After the last of these eight calls, it should print out the lowest and highest values that it received from rollOne , among those eight calls. 4) Fourth, make a copy of playStatistics and add code to make playStatistics2() , so that at the end (in addition to printing high/low rolls), it also prints the total sum of all eight rolls. 5) Fifth, copy playStatistics2 and add code to it to make playStatistics3(num) , so that it will roll as many times as you want, instead of always doing this eight times. 6) Finally, make a copy of playStatistics3 and change it to create playStatistics4(num) , so that at the end instead of the total sum, it prints the average roll.


// Statistics Until Doubles
// Here’s another game for our New Year’s Eve party. Implement a ’20-sided die’ that randomly returns integers between 1 and 20 inclusive. Roll these, tracking statistics until you get a value twice in a row. Display number of rolls , min , max , and average .


// Claire is Where?
// On New Year’s Eve, have fun but don’t forget your way home! For this challenge create four functions ( reset , moveBy , xLocation and yLocation ) to track the travels of Claire, a wanderer. Calling reset() moves Claire home to the origin (0,0) . The moveBy(xOffset,yOffset) function moves her by those amounts, in those directions. Finally, xLocation() and yLocation() return how far Claire is from home, in X and Y directions respectively. After the calls of reset() , moveBy(1,-2) , and moveBy(3,1) , subsequently calling xLocation() and yLocation() should return 4 and -1 .

// Second: create distFromHome() . Assuming she moves diagonally, return her distance from home.