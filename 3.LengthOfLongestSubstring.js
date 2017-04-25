/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s === null || s.length === 0) {
    return 0;
  }

  var max = 0,
    j = 0;
  var obj = []; //map for hash table

  for (j = 0; j < s.length; j++) {
    // if (obj.indexOf(s[j]) < 0) {
    //   obj.push(s[j]);
    // } else {
    //   max = Math.max(obj.length, max);
    //   obj = obj.slice(obj.indexOf(s[j]) + 1);
    //   obj.push(s[j]);
    // }

    if(obj.indexOf(s[j]) > 0) {
    	
    }
  }
  return Math.max(obj.length, max);
};
