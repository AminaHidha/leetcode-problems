/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let result=[]
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j] && !result.includes(nums[i])){
                result.push(nums[i])
            }
        }

    }
    return result
    
};