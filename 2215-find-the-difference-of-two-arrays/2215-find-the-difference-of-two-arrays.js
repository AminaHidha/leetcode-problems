/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let result1=[]
    let unique=new Set([...nums1])
    let unique2=new Set([...nums2])
    let result2=[]
    
    for (i of unique){
        if (!unique2.has (i)){
            result1.push(i)
        }
    }
    for(j of unique2){
        if(!unique.has(j)){
            result2.push(j)
        }
    }
    return [result1,result2]

};