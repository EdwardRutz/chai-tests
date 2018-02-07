
/* 
  using the expect method in chai and assigning it to a variable "expect"
  "var expect = require('chai').expect;" replaces the two lines below...
      var chai = require('chai');
      var expect = chai.expect;
*/

//The most efficient way to import Chai’s expect method into a file is: var expect = require('chai').expect;
var expect = require('chai').expect;  //imports the expect method from the Chai library...

//Use TDD to write code testing a movie title to confirm it is formatted in the proper Title Case.
// Loop through titleCase words, do function then store them in titleCasedWords
function titleCase (title) {
  var words = title.split(" ");  //splits the title up at the spaces
  var titleCasedWords = words.map(function (word) {
    //capitalize the first word of a string, add another string
    return word[0].toUpperCase() + word.substring(1);
      });

    return titleCasedWords.join(" ");    //make an array to re-join the words with a space
 }



/*************** TESTS ********************/
//Chai Tests using the BDD style with the expect method
//Chain together natural language assertions
//Assertions are listed from simplest to most extensive
//Break the title/string into several peices and create a test for each word in the title

expect(titleCase("the great mouse detective")).to.be.a("string");
expect(titleCase("a")).to.equal("A");
expect(titleCase("vertigo")).to.equal("Vertigo");

expect(titleCase("the great mouse detective")).to.equal("The Great Mouse Detective");


