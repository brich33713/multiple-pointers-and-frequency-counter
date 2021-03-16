// add whatever parameters you deem necessary
function constructNote(msg,ltrs) {
    let message = freqCounter(msg)
    let letters = freqCounter(ltrs)
    for(let letter of message.keys()){
        if(!letters.get(letter)) return false;
        if(letters.get(letter) < message.get(letter)) return false;
    }

    return true;
}


function freqCounter(str){
    let map = new Map()
    for(let letter of str){
        let valCount = map.get(letter) || 0
        map.set(letter,valCount+1)
    }

    return map
}