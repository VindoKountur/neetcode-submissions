class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    
    hasDuplicate(nums) {
        const hashMap = new Map()
        for (let i = 0; i < nums.length; i++) {
            if (hashMap.get(nums[i]) !== undefined) return true; 
            hashMap.set(nums[i], true);
        }
        return false
    }
}
