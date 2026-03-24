/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let arr=[]
    let obj={}
    for(i=0;i<nums.length;i++){
        let num=nums[i]
        if(obj[num]){
            obj[num]++
            if(obj[num]==2){
                arr.push(num)
            }
        }else{
            obj[num]=1
        }
    }
    return arr
};