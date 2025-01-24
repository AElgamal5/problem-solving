/**
 * 121. Best Time to Buy and Sell Stock
 * 
 * ---------------------------
 * link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

public class BestTimeToBuyAndSellStock {

    /**
     * description: using 2 pointers in my opinion but some ppl see it sliding window
     * 
     * time : O(n).
     * space : O(1).
     */
    public int maxProfit(int[] prices) {
        int maxProfit = 0;
        int l = 0;
        int r = 1;

        while (r < prices.length) {
            if (prices[r] > prices[l]) {
                maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
            } else {
                l = r;
            }
            r++;
        }

        return maxProfit;
    }

    public static void main(String[] args) {
        BestTimeToBuyAndSellStock bttbass = new BestTimeToBuyAndSellStock();

        System.out.println(bttbass.maxProfit(new int[] { 10, 1, 5, 6, 7, 1 }));
        System.out.println(bttbass.maxProfit(new int[] { 10, 8, 7, 5, 2 }));
        System.out.println(bttbass.maxProfit(new int[] { 5, 1, 5, 6, 7, 1, 10 }));
    }
}
