var findLucky = function(arr) {
    let freq={}
    let ar=[-1]
    for (i=0;i<arr.length;i++){
        val=arr[i]
        if(freq[val]){
            freq[val]++
        }else{
            freq[val]=1
        }

    }
    for (let key in freq){
        if (key==freq[key]){
            ar.push(freq[key])
        }
    }
    return Math.max(...ar)
    
    
};