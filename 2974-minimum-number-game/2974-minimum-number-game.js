/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    n=nums.sort((x,y)=>x-y)
    let arr=[]
    for(i=0;i<nums.length;i+=2){
        arr.push(nums[i+1],nums[i])
       
    }
    return arr
};