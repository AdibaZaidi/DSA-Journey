// Best Time to Buy and Sell Stock
// --------------------------------------------
// Problem:
// Given an array arr[] of size n, where arr[i] is the stock price on the ith day,
// determine the maximum profit achievable by buying and selling the stock at most once.
// You must buy before selling. If no profit is possible, return 0.
//
// Approach:
// - Track the minimum stock price seen so far.
// - For each day, calculate the profit if selling today (arr[i] - minPrice).
// - Update maxProfit if this profit is greater.
// - Time: O(n), Space: O(1)
//
// Example:
// Input: [10, 7, 5, 8, 11, 9]
// Output: 6  (Buy at 5, Sell at 11)

class Solution {
    stockBuySell(arr, n) {
        let buy = arr[0];       // minimum price so far
        let maxProfit = 0;      // maximum profit so far

        for (let i = 1; i < n; i++) {
            if (arr[i] < buy) {
                buy = arr[i]; // found cheaper price to buy
            } else {
                maxProfit = Math.max(maxProfit, arr[i] - buy); 
            }
        }
        return maxProfit;
    }
}

// --------------------
// Test Cases
// --------------------
const sol = new Solution();

console.log(sol.stockBuySell([10, 7, 5, 8, 11, 9], 6)); // 6
console.log(sol.stockBuySell([5, 4, 3, 2, 1], 5));      // 0
console.log(sol.stockBuySell([7, 1, 5, 3, 6, 4], 6));   // 5
console.log(sol.stockBuySell([2, 4, 1], 3));            // 2
