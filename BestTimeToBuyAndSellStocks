// Best Time to Buy and Sell Stock
// --------------------------------------------
// Problem:
// You are given an array prices where prices[i] is the stock price on the ith day.
// Find the maximum profit by choosing one day to buy and a later day to sell.
// If no profit is possible, return 0.
//
// Approach:
// - Keep track of the minimum price seen so far (minPrice).
// - At each step, calculate the profit if we sell today (prices[i] - minPrice).
// - Update maxProfit if this profit is higher.
// - If current price is less than minPrice, update minPrice.
// - Time: O(n), Space: O(1)
//
// Example:
// Input: [7,1,5,3,6,4]
// Output: 5  (Buy at 1, Sell at 6)

var maxProfit = function(prices) {
    let minPrice = prices[0]; // smallest price seen so far
    let maxProfit = 0;        // maximum profit possible

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]; // update min price
        } else {
            let profit = prices[i] - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit; // update max profit
            }
        }
    }
    return maxProfit;
};

// --------------------
// Test Cases
// --------------------
console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1]));   // 0
console.log(maxProfit([2,4,1]));       // 2
console.log(maxProfit([3,2,6,5,0,3])); // 4
