/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s === null || s.length <= 1) {
    return s;
  }

  var idx, i = 0;

  var maxPali = {
    idx: -1,
    length: -1
  };

  for (i = 0; i < s.length; i++) {
    var pali = getPalindrome(s, i);
    if (pali.length > maxPali.length) {
      maxPali = pali;
    }
  }

  if(maxPali.length === -1) {
    return s[0];
  }else {
    return s.slice(maxPali.idx, maxPali.idx + maxPali.length);   
  }
 
};

var getPalindrome = function(s, i) {

  var evenPali = getEvenPali(s, i);
  var oddPali = getOddPali(s, i);

  return evenPali.length >= oddPali.length ? evenPali : oddPali;
}

var getEvenPali = function(s, i) {
  var obj = {
    length: -1,
    idx: -1
  };

  for (var j = 1; (i + 1 - j) >= 0 && (i + j) < s.length; j++) {
    if (s[i + 1 - j] == s[i + j]) {
      obj.length = j * 2;
      obj.idx = i + 1 - j
    }else {
      break;
    }
  }

  return obj;
}

var getOddPali = function(s, i) {
  var obj = {
    length: -1,
    idx: -1
  };

  for (var j = 1; (i - j) >= 0 && (i + j) < s.length; j++) {
    if (s[i - j] == s[i + j]) {
      obj.length = j * 2 + 1;
      obj.idx = i - j;
    }else {
      break;
    }
  }

  return obj;
}
