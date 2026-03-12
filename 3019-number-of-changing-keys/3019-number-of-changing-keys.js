/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let letters=s.toLowerCase().split('')
    let count=0
    for(let i=0;i<letters.length;i++){
        if(letters[i]!==letters[i+1]){
            count++
        }
    }
    return count-1
};