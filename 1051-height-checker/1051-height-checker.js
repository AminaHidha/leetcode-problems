var heightChecker = function(heights) {
    let count=0
    let sorted=heights.toSorted((a,b)=>a-b)
   
    for(i=0;i<heights.length;i++){
        if(heights[i]!==sorted[i]){
            count++
        }
    }
    return count
    
};