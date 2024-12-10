var sera = 'Será???'
console.log(sera)

console.log(global.local)

function teste() {
    var local = 123
    console.log(local)
}
teste()
var local = 234
console.log(local)