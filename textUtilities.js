
var expect = require('chai').expect;  //imports the expect method from the Chai library...
/* 
  also using the expect method in chai and assigning it to a variable "expect"
  "var expect = require('chai').expect;" replaces the two lines below...
      var chai = require('chai');
      var expect = chai.expect;
*/

// Create an outline for the code using Chai tests and expect
//expect(true).to.be.false; //gives an error, refactor to expect(true).to.be.true;

function titleCase (title) {

  var 
  //capitalize the first word of a string, add another string
  return title[0].toUpperCase() + title.substring(1);
}


//Write the a test first, then the function
//Break tests down so they test smaller parts

expect(titleCase("gone with the wind")).to.be.a("string");
expect(titleCase("a")).to.equal("A");
expect(titleCase("vertigo")).to.equal("Vertigo");





expect(titleCase("gone with the wind")).to.equal("Gone with the Wind");


