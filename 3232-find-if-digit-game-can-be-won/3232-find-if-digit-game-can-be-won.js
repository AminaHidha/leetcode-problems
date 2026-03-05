/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let sum=0
    let sum2=0
    for (i=0;i<nums.length;i++){
        if(nums[i]<10){
            sum+=nums[i]
        }else{
            sum2+=nums[i]
        }
    }
    if(sum==sum2){
        return false;
    }else{
        return true;
    }
};