let o1 = {
  s: 'o1'
}
var o2 = {
  s: 'o2'
}

var s = 'window'

function nomal() {
  console.log(this.s)
}
nomal.call(o2)

function unnomal() {
  nomal()
}
unnomal.call(o1)

// console.log(o1)