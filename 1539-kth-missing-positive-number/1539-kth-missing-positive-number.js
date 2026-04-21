/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let i = 0;

    for (let num = 1; ; num++) {
        if (i < arr.length && arr[i] === num) {
            i++;
        } else {
            k--;
            if (k === 0) return num;
        }
    }
};
