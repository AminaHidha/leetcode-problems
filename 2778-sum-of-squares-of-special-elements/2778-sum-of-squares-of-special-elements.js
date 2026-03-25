var sumOfSquares = function(nums) {
    let sum=0
    let n=nums.length
    for(i=0;i<=n;i++){
        if(n%i===0){
            let value=nums[i-1]
            sum+=value*value
        }
    
    }
    return sum  
  
};