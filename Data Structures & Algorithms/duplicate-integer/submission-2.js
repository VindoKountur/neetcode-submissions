class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    
    hasDuplicate(nums) {
        const hashMap = new Set()
        for (let i = 0; i < nums.length; i++) {
            if (hashMap.has(nums[i])) return true; 
            hashMap.add(nums[i], true);
        }
        return false
    }
}
