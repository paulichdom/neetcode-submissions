class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        const firstStr = strs[0];
        for (let index = 0; index < firstStr.length; index++) {
            const charToMatch = firstStr.charAt(index);
            for (let nextIdx = 1; nextIdx < strs.length; nextIdx++) {
                const otherChar = strs[nextIdx][index];
                if (index === strs[nextIdx].length || charToMatch !== otherChar) {
                    return strs[0].substring(0, index);
                }
            }
        }
        return firstStr;
    }
}