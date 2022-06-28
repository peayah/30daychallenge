const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }
    //find js in DOM > Break on > attribute modification

    // Regular
    console.log ("hello world\n")

    // Interpolated
    console.log("hello %s", "world")

    // Styled
    console.log("%chello world","font-size: 50px; background: red" )

// warning!
    console.warn("hello world")

    // Error :|
    console.error("hello world")

    // Info
    console.info("hello world")

    // Testing
    console.assert( 1===2, "wrong")

    // clearing
    // console.clear()

    // Viewing DOM Elements
    // console.log(div)

    // dom elements methods
    // console.dir(div)

    // Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`)
  console.log(`Dog name: ${dog.name}`)
  console.log(`Age: ${dog.age}`)
  console.log(`That is ${dog.age * 7} dog years`)
  console.groupEnd(`${dog.name}`)
})

dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`)
  console.log(`Dog name: ${dog.name}`)
  console.log(`Age: ${dog.age}`)
  console.log(`That is ${dog.age * 7} dog years`)
  console.groupEnd(`${dog.name}`)
})
    // counting
  console.count("pia")
  console.count("pia")
  console.count("pia")
  console.count("pia")
  console.count("pia")
  console.count("pia")
  console.count("pia")
  console.count("pia")
  console.count("pia")

  // timing
  console.time("fetching data")
  console.log("hello world")
  console.timeEnd("fetching data")
