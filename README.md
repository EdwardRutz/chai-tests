# Javascript Testing with Chai

Using Chai for Javascript Test Driven Development.
- Use TDD to write code testing a movie title to confirm it is formatted in the proper Title Case.
- Chai is a BDD/TDD assertion library for node and the browser. It can pair with any javascript testing framework. <cite>[ChaiJS.com](http://chaijs.com/)</cite>  
- See the tutorial [Javascript Unit Testing](https://teamtreehouse.com/library/javascript-unit-testing)
- Writing tests with Chai's expect method
- Using TDD to first write a  test, then write the code.
- Building a test suite to test code
- See notes [javascript-unit-testing](https://github.com/EdwardRutz/javascript-notes/blob/master/javascript-unit-testing.md)

## Coding Process
- The goal is to create a function to evaluate a move title and make sure the words are capitalized
- First write a test to confirm the movie title is a string. Then write the code and check it with the test
- Then break the process down into small steps, check one letter, then check one word
- Write a test to check if the first letter in the word is capitalized
- Then write a function and a step to capitalize the a letter 
- Then the first letter of a word.
- Build logic for changing one word then put it into a loop:
  - Split each word in the string 
  - Rejoin each word back into the title
- <cite>Review info in [tutorial](https://teamtreehouse.com/library/javascript-unit-testing/introducing-unit-testing/greater-expectations)</cite>

---------------------------------------------

## Dependencies
- Node.js
- Chai

## Setup and Install
- Clone repo
- Install dependencies
- In terminal, move into the chai-tests directory and run tests on  textUtilities.js 
  
```js
node textUtilities.js
```
- Chai will show a waiting prompt if all tests pass or an error message



---------------------------------------------

<p align="center">
 <img src="chai-error.png"/>
     <br/>
     Chai throws an assertion error when the movie title is not in the proper title case.
</p>
<p align="center">
 <img src="chai-correct.png"/>
     <br/>
     Chai shows a waiting console prompt when tests are correct
</p>

---------------------------------------------

## References
- [TeamTreehouse: Javascript Unit Testing](https://teamtreehouse.com/library/javascript-unit-testing)
- [Google Testing Blog](https://testing.googleblog.com/)
- [Popular Tests Tools, Languages and Platforms](https://blog.testproject.io/2017/12/13/leading-test-automation-methods/)
- [ChaiJS.com](http://chaijs.com/)
- [Chai Installation Instructions](http://chaijs.com/guide/installation/)
- [Chai Assertion Styles](http://chaijs.com/guide/styles/)
- [Using Title Case](http://grammar-monster.com/lessons/capital_letters_title_case.htm)
- [Steven Anderson Blog: Writing Great Unit Tests](http://blog.stevensanderson.com/2009/08/24/writing-great-unit-tests-best-and-worst-practises/)
- [JavaScript String toUpperCase() Method](http://www.w3schools.com/jsref/jsref_touppercase.asp)
- [JavaScript String substring() Method](http://www.w3schools.com/jsref/jsref_substring.asp)
- [JavaScript String split() Method](http://www.w3schools.com/jsref/jsref_split.asp)
- [JavaScript Array join() Method](http://www.w3schools.com/jsref/jsref_join.asp)
- [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

