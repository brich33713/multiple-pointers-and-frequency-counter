// add whatever parameters you deem necessary
function sameFrequency(num1,num2) {
    num1 = freqCounter(num1.toString())
    num2 = freqCounter(num2.toString())
    if(num1.size !== num2.size) return false
    for(let num of num1.keys()){
        if(!num2.get(num)) return false
        if(num2.get(num) !== num1.get(num)) return false
    }

    return true
}

function freqCounter(str){
    let map = new Map()
    for(let num of str){
        let valCount = map.get(num) || 0
        map.set(num,valCount+1)
    }

    return map
}