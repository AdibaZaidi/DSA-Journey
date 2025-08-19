/**
 * Merge Without Extra Space
 * Given two sorted arrays a[] and b[] of size n and m respectively,
 * merge them in sorted order without using extra space.
 * Modify a[] to contain the first n elements
 * and modify b[] to contain the last m elements.
 * 
 * Example:
 * Input: a = [2, 4, 7, 10], b = [2, 3]
 * Output: a = [2, 2, 3, 4], b = [7, 10]
 */

class Solution {
    mergeArrays(a, b) {
        let i = a.length - 1;
        let j = 0;

        // Swap elements if needed
        while (i >= 0 && j < b.length) {
            if (a[i] > b[j]) {
                [a[i], b[j]] = [b[j], a[i]];
                i--;
                j++;
            } else {
                i--;
            }
        }

        // Sort both arrays to maintain order
        a.sort((x, y) => x - y);
        b.sort((x, y) => x - y);
    }
}

// Example usage
let a = [2, 4, 7, 10];
let b = [2, 3];

let obj = new Solution();
obj.mergeArrays(a, b);

console.log("a:", a); // [2, 2, 3, 4]
console.log("b:", b); // [7, 10]
