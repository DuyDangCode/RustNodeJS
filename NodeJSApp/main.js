const ffi = require('ffi-napi')

const lib = ffi.Library('../rust/target/release/libnode_math.dylib', {
  fibonacci: ['int', ['int']]
})
const res = lib.fibonacci(10)
console.log(res)
