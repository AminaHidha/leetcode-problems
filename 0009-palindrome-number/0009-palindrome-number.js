/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    let convert= x.toString();
    let reversed=convert.split("").reverse("").join("");
    return convert===reversed;

};
console.log(isPalindrome(121));