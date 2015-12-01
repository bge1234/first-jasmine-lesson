module.exports = {
  testFunc: function() {
    return "world hello";
  },

  findMin: function(person1, person2) {
    if(person1.age < person2.age)
      return person1.name;
    else
      return person2.name;
  }
}
