/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let freq={}
    for(i=0;i<nums.length;i++){
        value=nums[i]
        if(freq[value]){
            freq[value]++
        }else{
            freq[value]=1
        }
    }
    return nums.sort((a,b)=>freq[a]-freq[b] || b-a)    
};
