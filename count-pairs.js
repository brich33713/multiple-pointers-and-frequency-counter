// add whatever parameters you deem necessary
// countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)

function countPairs(arr,target) {
    let count = 0;
    let left = 0
    let right = arr.length - 1;

    while(left < arr.length/2){
        if(1 <= right){
            if(arr[left] + arr[right] === target){
                count++;
                left++;
                right = arr.length - 1;
            } else {
                right--;
            }
        } else if(!right) {
            left++;
            right = arr.length - 1;
        }

    }

    return count
}
