
function cubeNumber(number) {

    if(typeof number !== "number"){
        return "please provide a number"
    }

    else{
        let cube = number ** 3
        return cube
    }
}

const number ="7"
const number1 = 3

console.log(cubeNumber(number))
console.log(cubeNumber(number1))
