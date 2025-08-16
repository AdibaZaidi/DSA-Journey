/**
 * Problem: Reverse an Array 
 * You are given an array of integers arr[]. You have to reverse the given array in-place.
 * 
 * Examples:
 * Input:  arr = [1, 4, 3, 2, 6, 5]
 * Output: [5, 6, 2, 3, 4, 1]
 * Input:  arr = [1]
 * Output: [1]
 * 
 * Explanation:
 * The first element goes to the last position, the second element goes to the 
 * second-last position, and so on.
 * 
 * Constraints:
 * 1 ≤ arr.length ≤ 10^5
 * 0 ≤ arr[i] ≤ 10^5
 */

class Solution {
    reverseArray(arr) {
        let start = 0;
        let end = arr.length - 1;

        // Swap elements until pointers meet
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}

// Example usage
const solution = new Solution();

let arr1 = [1, 4, 3, 2, 6, 5];
solution.reverseArray(arr1);
console.log(arr1); // Output: [5, 6, 2, 3, 4, 1]

let arr2 = [1];
solution.reverseArray(arr2);
console.log(arr3); // Output: [1]
