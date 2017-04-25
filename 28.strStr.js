/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
'use strict';
var strStr = function(haystack, needle) {
  if (haystack === undefined || haystack === null  || needle === undefined || needle === null ) {
    return -1;
  }
  var hlen = haystack.length, nlen = needle.length;

  if (hlen < nlen) {
    return -1;
  }

  if (hlen >= 0 && nlen === 0) {
  	return 0;
  }

  for (var i = 0; i < hlen; i++) {
    var j = 0;
    for (j = 0; j < nlen; j++) {
      if (haystack[i + j] != needle[j]) {
        break;
      } else {
        if (j === nlen - 1) {
          return i;
        }
      }
    }
  }
  return -1;
};
