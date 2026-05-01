/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let result=[]
    for(let i of nums){
        for(let j of i.toString()){
            result.push(Number(j))
        }
    }
    return result
};