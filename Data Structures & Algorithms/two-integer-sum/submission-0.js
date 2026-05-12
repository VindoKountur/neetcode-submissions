class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const track = new Map()
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i]
            if (track.has(diff)) {
                return [track.get(diff), i]
            } else {
                track.set(nums[i], i)
            }
        }
    }
}
