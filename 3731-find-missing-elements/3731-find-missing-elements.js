/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let n=Math.max(...nums)
    let m=Math.min(...nums)
    let result=[]
    for(i=m;i<=n;i++){
        if(!nums.includes(i)){
            result.push(i)
        }
    }
    return result
};