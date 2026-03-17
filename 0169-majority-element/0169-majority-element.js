var majorityElement = function(nums) {
    let count={}
    for(i=0;i<nums.length;i++){
        value=nums[i]
        if(count[value]){
            count[value]++
        }
        else{
            count[value]=1
        }

    }
    console.log(count);
    let maxcount=0
    result=null
    for (let key in count){
       if(count[key]>maxcount){
        maxcount=count[key]
        result=key
       }
    }
    return Number(result)
    
};
