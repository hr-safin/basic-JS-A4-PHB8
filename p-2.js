

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

console.log(matchFinder("John Doe",10))
console.log(matchFinder("JavaScript","Code"))
console.log(matchFinder("JavaScript","ava"))
console.log(matchFinder("Peter Parker","Pen"))