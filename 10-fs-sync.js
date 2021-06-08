
// pulling just the specific methods
const {readFileSync, writeFileSync} = require('fs')

console.log('start');
// reading files
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
//console.log(first, second);

// appending: pass flag: a as an argument
writeFileSync('./content/subfolder/result-sync.txt', `this is the result: ${first}, ${second}.`, {flag: 'a'})

console.log('done with the task');
console.log('starting with next task');