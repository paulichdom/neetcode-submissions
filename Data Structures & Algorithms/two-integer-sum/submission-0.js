class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // O(n2) approach
        /* for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                const sum = nums[i] + nums[j];
                if (sum === target) {
                    return [i, j];
                }
            }
        } */
        // O(n) approach
        const seen = new Map()
        let complement = null;

        for (let i = 0; i < nums.length; i++) {
            complement = target - nums[i];

            if (seen.has(complement)) {
                return [seen.get(complement), i];
            }

            seen.set(nums[i], i)
        }
    }
}
