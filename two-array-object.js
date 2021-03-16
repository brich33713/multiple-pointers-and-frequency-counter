// add whatever parameters you deem necessary
function twoArrayObject(arr1,arr2) {
    let start = 0;
    let obj = {}
    while(start < arr1.length){
        obj[arr1[start]] = (arr2[start]) ? arr2[start] : null
        start++
    }
    return obj
}
