/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let count=0;
    for(i=0;i<sentences.length;i++){
        x=sentences[i].split(' ')
        if(x.length>count){
            count=x.length
        }
    }
    return count;
};