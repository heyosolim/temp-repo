const os = require('os') // no ./ needed

// info about current user

const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`); // how long the cpu has been up without restart

// info about operating system
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);