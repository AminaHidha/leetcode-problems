/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let alphabets="thequickbrownfoxjumpsoverthelazydog"
    for(letters of alphabets){
        if(!sentence.includes(letters)){
            return false;
        }
    }
    return true
};