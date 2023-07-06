# Coffee challenge

- Clone the project repository from GitHub.
- Navigate to the project directory using the terminal or command prompt.
- To run, enter `node index.js` in the terminal of the coffee-challenge directory. 

## Chat GPT

After initially writing code to parse the json files and output the desired array of user objects, I prompted Chat GPT to help refactor the code for reusability, readability and performance. After generating several prompts I was reminded of the following:

- CHAT GPT MAKES MISTAKES. One of its first recommendations was to import a dependency twice. It caused a crash and an error message that I quickly resolved. It is important when using Chat GPT to treat it as a tool not a replacement. 
- The advantages of node is that it is non-blocking. It is therefore faster to wrap `fs.readFile` in a Promise to handle file reading asynchronously while other code is executed.
- Use `readFile` instead of `readFileSync`. The json files don't need to be read synchronously.
- Replacing `.filter()` with `.find()` in the `getDrinkPrice` function is a small optimisation because the function only requires the first matching value.
- Any function dependencies should be included as arguments. This makes functions more versatile and easier to understand.
