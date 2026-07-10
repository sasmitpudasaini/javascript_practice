let arr = [1,2,3,4,5,6]
let [one, , three, ...rest] = arr
console.log(one,three,rest)

// spread operator
let arr1 = [2,3,4]
let obj1 = {...arr1}

console.log(obj1)

function sum(n1,n2,n3){
    return n1+n2+n3
}
console.log(sum(...arr1))

const a = "the", b = "peak"
const c = [a , b]
console.log(String(c))