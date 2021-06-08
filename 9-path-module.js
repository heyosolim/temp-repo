const path = require('path')

// shows the path separator (which in my case is a forward slash)
console.log(path.sep);

// combines these directories into one path
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath);

// shows the basename which is the accessed file?? folder 
const base = path.basename(filePath)
console.log(base); 

// absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);

