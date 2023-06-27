# Coffee challenge

To run enter "node index.js" in the terminal of the coffee-challenge directory. 

## Chat GPT

After initially writing code so that I could parse the json files and output the desired array of user objects, I prompted Chat GPT to help me refactor my code for reusability, readability and performance. After generating several prompts I was reminded of the following. 

- Chat GPT makes mistakes. One of its first recommendations was to import something twice. It caused a crash and an error message that I quickly resolved. 
- The advantages of node is that it is non-blocking. It is therefore faster to wrap fs.readFile in a Promise to handle file reading asynchronously.
- I can use readFile instead of readFileSync. I don't need the json files read synchronously.
- .find() is better than .filter() in the getDrinkPrice function because I only need the first matching value.
- Any function dependencies should be included as arguments. This makes functions more versatile and bug proof.
