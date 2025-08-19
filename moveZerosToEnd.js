/**
 * Move All Zeroes to End
 * You are given an array arr[] of non-negative integers.
 * Move all the zeros in the array to the right end while 
 * maintaining the relative order of the non-zero elements.
 * 
 * The operation must be performed in place, without using 
 * extra space for another array.
 * 
 * Example:
 * Input: arr = [1, 2, 0, 4, 3, 0, 5, 0]
 * Output: [1, 2, 4, 3, 5, 0, 0, 0]
 */

class Solution {
    pushZerosToEnd(arr) {
        let pos = 0;

        // Shift all non-zero elements forward
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                [arr[i], arr[pos]] = [arr[pos], arr[i]];
                pos++;
            }
        }

        // Fill the remaining positions with 0
        while (pos < arr.length) {
            arr[pos] = 0;
            pos++;
        }
    }
}

// Example usage
let arr = [1, 2, 0, 4, 3, 0, 5, 0];
let obj = new Solution();
obj.pushZerosToEnd(arr);

console.log(arr); // [1, 2, 4, 3, 5, 0, 0, 0]
