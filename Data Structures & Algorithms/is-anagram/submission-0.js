class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();
        let res = true;
        if (s.length != t.length) return false;
        for (let i = 0; i < s.length; i++) {
            map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1)
            map.has(t[i]) ? map.set(t[i], map.get(t[i]) - 1) : map.set(t[i], -1)
        }
        
        map.values().forEach(v => {
            if (v !== 0) res = false;
        })
        return res;
    }
}
