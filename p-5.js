function canPay(changeArray, totalDue) {
  if(changeArray.length ===0){
    return "Please provide a valid array because its an empty array"
  }

    let sum =0
    for(let i=0; i<changeArray.length; i++){
        sum +=changeArray[i]
    }

  if(sum >= totalDue){
    return true
  }

  else{
    return false
  }

}

console.log(canPay([1,2,5],10))
console.log(canPay([0,5,5],10))
console.log(canPay([],10))