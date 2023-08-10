function sortMaker(arr){
    // array 2ta element thake array[0] and array[1]
    if(arr[0] < 0 || arr[1] < 0 ){
        return "Input Invalid"
    }
    else if(arr[0] === arr[1]){
        return "Equal"
    }
  else{
    let temp = arr[0]
    arr[0] = arr[1]
    arr[1] = temp
  }

  return arr


    

}

const arr = [1,2]
const arr1 = [1,-2]
const arr2 = [2,2]

console.log(sortMaker(arr))
console.log(sortMaker(arr1))
console.log(sortMaker(arr2))


// 

function canPay(changeArray, totalDue) {

    if(changeArray.length === 0){
        return "Provide a valid array"
    }

    // arr =[1,2,5]
    let sum = 0
    for(let i=0; i<changeArray.length; i++){
         sum = sum + changeArray[i]
    }

    if(sum >= totalDue){
        return true
    }

    else{
        return false
    }
}


console.log(canPay([0,5,5],10))


