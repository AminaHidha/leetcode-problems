/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count=0
    for(i=0;i<words.length;i++){
        let isValid=true;
        for(j=0;j<words[i].length;j++){
            if(!allowed.includes(words[i][j])){
                isValid=false
                break;
            }
        }if(isValid){
            count++
        }
        
    }
    return count
    
};