var myFunctions = require('../libs/functions');

describe("#testFunc", function() {
  it("returns 'world hello'", function () {
    expect(myFunctions.testFunc()).toEqual("world hello")
  })
})

describe("#findMin", function () {
  it("given two people objects, returns the youngest person", function() {
    var person1 = {
      age: 30,
      name: "Howard"
    };
    var person2 = {
      age: 23,
      name: "Sara"
    };
    expect(myFunctions.findMin(person1, person2)).toEqual("Sara");
  })
  it("given two people objects, when both people are the same age,it returns 'They\'re the same age!!'", function() {
    var person1 = {
      age: 30,
      name: "Howard"
    };
    var person2 = {
      age: 30,
      name: "Sara"
    };
  expect(myFunctions.findMin(person1, person2)).toEqual("They're the same age!!")
  })
})
