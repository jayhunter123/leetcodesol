/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    let longestPal = '';
    let dp = Array(n).fill(false).map(() => Array(n).fill(false));

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]);

            if (dp[i][j] && (j - i + 1) > longestPal.length) {
                longestPal = s.substring(i, j + 1);
            }
        }
    }

    return longestPal;
};
