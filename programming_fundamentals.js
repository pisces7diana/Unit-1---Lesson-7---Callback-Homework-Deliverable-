// Section 1: Programming Fundamentals

// Common programming principles
    // Answer:
    // Write a ~1 sentence summary for each one
    // Which ones surprise you (if any)?
    // Which one is currently giving you the most struggle?

// DRY (Don't repeat yourself ) - increase efficiency by avoiding repetition
// KISS (Keep it simple, stupid) - simplicity is better than complication
// Avoid creating a YAGNI (You aren't going to need it) - cut the nonsense
// Do the simplest thing that could possibly work - write a code that's simple and works
// Don't make me think - write a code that even a child can understand it
// Write code for the maintainer - make it memorable
// Single responsibility principle - each part of your code (like a class or a function) should be like a specialized tool. It should have one clear job or responsibility and do it without trying to handle too many things at once. 
// Avoid premature optimization - focus on making your code work correctly and be understandable rather than trying to make it run as fast as possible
// Separation of concerns - keeping different parts of your code focused on specific tasks

// Commenting Code
    // Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out.
    const f = l => { // Declare a constant function 'f' with a parameter 'l'.
        let es = 0, p = 0, c = 1, n = 0 // declare let variables: 'es' for even sum, 'p' for previous Fibonacci number, 'c' for current Fibonacci number, and 'n' for next Fibonacci number.
        while (c <= l) { // Execute the while loop 'c' is less than or equal to the parameter 'l'.
          n = c + p; // Calculate the next Fibonacci number by adding 'c'(urrent) and 'p'(revious) numbers
          [c, p] = [n, c] // Swap values of 'c' and 'p' using destructuring assignment so 'n' in [n,c] is assigned to 'c' in [c,p] and 'c' in [n,c] is assigned to 'p' in [c,p]
          es += (c % 2 === 0) ? c : 0 // Add 'c' to 'es' (even sum) if 'c' is an even number.
        }
        return es // Return the evenSum.
      }
      
      console.log(f(55)) // console.log the function 'f' with the argument of 55
    
// Answer with comments:
    // In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?

    // sumOfEvenFibonacci
    // add comments to explain what the code is doing for the maintainer

    // If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
    
    // f2

    // Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?

    // Yes, this semi-colon ncessary.