// 395. Longest Substring with At Least K Repeating Characters

const longestSubstring = (s, k) => {
  let map = new Map();
  for (char of s) {
    map.set(char, map.get(char) + 1 || 1);
  }
  for ([char, count] of map) {
    if (count < k) {
      let strArr = s.split(char);
      let result = 0;
      for (word of strArr) {
        result = Math.max(result, longestSubstring(word, k));
      }
      return result;
    }
  }
  return s.length;
};

console.log(longestSubstring('ababbc', 2));  //5
