const names = require('./app-folder/app-names')
console.log(names.sayHI(names.firstName))
console.log(names.sayHI(names.secondName))
console.log(names.sayHI(names.thirdName))


//access os
const os = require('os')
//info about current user
const user = os.userInfo()
console.log(user)

console.log(`The System Uptime is ${os.uptime()} seconds.`)
