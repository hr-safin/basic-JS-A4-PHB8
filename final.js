function cubeNumber(number) {

    if(typeof number !== "number"){
        return "please provide a number"
    }

    else{
        let cube = number ** 3
        return cube
    }
}


function matchFinder(string1, string2) {
    if(typeof string1 !== "string" || typeof string2 !=="string"){
        return "Please provide a string"
    }

    else if(string1.includes(string2) === true){
        return true
    }else{
        return false
    }
}

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


 function findAddress(obj) {

    if(typeof obj !=="object"){
        
        return "Please type a valid object"

    }else{

        const street = obj.street || "__"
        const house = obj.house || "__"
        const society = obj.society || "__"
   
        return street+"," + house+"," + society
    }

    
}


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