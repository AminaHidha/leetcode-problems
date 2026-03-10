/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(i=0;i<words.length;i++){
        word=words[i]
        reverse=word.split('').reverse().join('');
        if(word===reverse){
            return word
        }
    }
    return '';

};