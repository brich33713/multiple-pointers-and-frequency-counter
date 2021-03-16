// add whatever parameters you deem necessary
// isSubsequence('hello', 'hello world')

function isSubsequence(str1,str2) {
    str1 = str1.split('')
    str2 = str2.split('')
    let i = 0
    while(i < str1.length && str2.length){
        if(str1[i] === str2[0]) i++
        str2.shift()
        
    } 

    if(i === str1.length) return true
    return false
}
