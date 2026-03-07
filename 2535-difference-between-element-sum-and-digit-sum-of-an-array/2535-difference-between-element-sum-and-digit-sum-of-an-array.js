/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum1=nums.reduce((a,b)=>a+b,0)
    let sum2=nums.join('').split('').reduce((a,b)=>a+Number(b),0)
    return Math.abs(sum1-sum2)
};