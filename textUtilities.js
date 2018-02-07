
var expect = require('chai').expect;  //imports the expect method from the Chai library...
/* 
  also using the expect method in chai and assigning it to a variable "expect"
  "var expect = require('chai').expect;" replaces the two lines below...
      var chai = require('chai');
      var expect = chai.expect;
*/


//Use TDD to write code testing a movie title to confirm it is formatted in the proper Title Case.

function titleCase (title) {

  
  //capitalize the first word of a string, add another string
  return title[0].toUpperCase() + title.substring(1);
}


// Chai Tests using expect method

expect(titleCase("gone with the wind")).to.be.a("string");
expect(titleCase("a")).to.equal("A");
expect(titleCase("vertigo")).to.equal("Vertigo");





expect(titleCase("gone with the wind")).to.equal("Gone with the Wind");


