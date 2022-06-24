 // ## Array Cardio Day 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    // Array.prototype.every() // is everyone 19 or older?
    const nineteenOrUp = (element) => (2022 - element.year) > 18;

    console.log("should be true",  people.some(nineteenOrUp))
    console.log("should be false", people.every(nineteenOrUp))
    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    const found = comments.find(element => element.id = 823423)
    console.log("should be 823423", found)
    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    const deletedI = comments.findIndex(element => element = 823423)
    console.log(deletedI)
    console.log(comments)
    comments.splice(deletedI, 1);
    console.log(comments)
