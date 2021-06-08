// if we're servicing different people, it might be beneficial to use the async approach
// because this means that the read/write ops are not happening line by line
// the readFile op is offloaded right off the bat


// pulling just the specific methods
const {readFile, writeFile}  = require('fs')

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result

        writeFile('./content/result-async.txt', `this is the result: ${first} , ${second}.`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('done with writing task');
        })
    })
})

console.log('starting next task');