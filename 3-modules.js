 // modules

 // commonJS, every file is module (by default)
 // modules: encapsulated code (only share minimum)

 const names = require('./4-names')
 const sayHi = require('./5-utils')
 const data = require('./6-alternative-name')
 console.log(data)
require('./7-mind-grenade') // all we need!! you don't have to assign it to a variable

 sayHi('Susan')
 sayHi(names.john)
 sayHi(names.peter)