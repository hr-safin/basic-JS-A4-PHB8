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

console.log(findAddress(
    {street: 10,
    house: "15A",
    society: "Earth Perfect"
    }
))
console.log(findAddress(
    {street: 10,
    society: "Earth Perfect"
    }
))
console.log(findAddress(
    {street: 10,
    
    }
))
console.log(findAddress(
    "string"
))
console.log(findAddress({
    safin : "hasibur"
}
    
))