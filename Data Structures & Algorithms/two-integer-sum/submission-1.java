class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> track = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            var diff = target - nums[i];
            if (track.get(diff) != null) {
                return new int[]{track.get(diff), i};
            } else {
                track.put(nums[i], i);
            }
            
        }
        return new int[]{0, 1};
    }
}
