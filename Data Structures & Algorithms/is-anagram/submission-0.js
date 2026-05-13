class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let frequency = {};

        for(const char of s) {
            frequency[char] = (frequency[char] || 0) + 1
        }

        for(const char of t) {
            if(!frequency[char]) return false

            frequency[char] -= 1;
        }

        return true;
    }
}
