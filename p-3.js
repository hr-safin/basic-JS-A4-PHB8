function sortMaker(arr) {
   if(arr[0] <0 || arr[1]<1){
    return "Invalid Input"
   } 
   
   else if(arr[0] === arr[1]){
    return "equal"
   }

   else if(arr[0] < arr[1]){
     let temp = arr[0]
     arr[0] = arr[1]
     arr[1] = temp
   }

   return arr
  
}

console.log(sortMaker([1,2]))
console.log(sortMaker([2,2]))
console.log(sortMaker([2,3]))
console.log(sortMaker([2,-1]))
console.log(sortMaker([4,4]))
console.log(sortMaker([0,1]))