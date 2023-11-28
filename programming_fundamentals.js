// Section 1: Programming Fundamentals

// Common programming principles
    // Answer:
    // Write a ~1 sentence summary for each one
    // Which ones surprise you (if any)?
    // Which one is currently giving you the most struggle?

// DRY (Don't repeat yourself ) increase efficiency by avoiding repetition
// KISS (Keep it simple, stupid) - simplicity is better than complicating the code
// Avoid creating a YAGNI (You aren't going to need it) - cut the nonsense
// Do the simplest thing that could possibly work - create a code that's simple enough and works
// Don't make me think - write a code that even a child can understand it
// Write code for the maintainer - make it memorable
// Single responsibility principle - 
// Avoid premature optimization
// Separation of concerns

// Commenting Code
    // Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out.
    const f = l => {
        let es = 0, p = 0, c = 1, n = 0
        while (c <= l) {
          n = c + p;
          [c, p] = [n, c]
          es += (c % 2 === 0) ? c : 0
        }
        return es
      }
      
      console.log(f(55))
    
// Answer with comments:
    // In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?

    // If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?

    // Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?