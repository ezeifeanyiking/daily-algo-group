// Solution 1 - Using a for loop
function titleCase(str) {
  const eachWordArray = str.split(" ");

  for (let i = 0; i < eachWordArray.length; i++) {
    eachWordArray[i] =
      eachWordArray[i][0].toUpperCase() + eachWordArray[i].slice(1);
  }

  return eachWordArray.join(" ");
}

console.log(titleCase("hello world")); //.toBe('Hello World');
console.log(titleCase("javascript programming")); //.toBe('Javascript Programming');
console.log(titleCase("openai chatbot")); //.toBe('Openai Chatbot');

module.exports = titleCase;
