<?php

/**
 * 202. Happy Number
 * ---------------------------
 * link: https://leetcode.com/problems/happy-number/description/
 */

class Solution
{

    //---------------------------------------------------------------//
    //------------------------1st trial------------------------------//
    //---------------------------------------------------------------//

    /**
     * description:
     * 1-create a function to sum square of digits
     * 2- create a hash table to store seen number to avoid loops
     *
     * time : O(n)
     * space : O(n)
     */
    public function isHappy(int $n): bool
    {
        $seen = [];

        while ($n != 1 && !($seen[$n] ?? false)) {
            $seen[$n] = true;
            $n = $this->sumOfSquareDigits($n);
        }

        return $n == 1;
    }

    private function sumOfSquareDigits(int $n): int
    {
        $sum = 0;

        while ($n > 0) {
            $digit = $n % 10;
            $digit *= $digit;

            $sum += $digit;

            $n = (int) ($n / 10);
        }

        return $sum;
    }

}

$sol = new Solution();

var_dump($sol->isHappy(19));
var_dump($sol->isHappy(2));
