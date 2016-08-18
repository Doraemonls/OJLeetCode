/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
'use strict';
var getHint = function(secret, guess) {
  var secArr = Array.from(secret);
  var gueArr = Array.from(guess);
  var numA = 0,
    numB = 0,
    i = 0;

  if (secArr.length === 0 || gueArr.length === 0) {
    return '0A0B';
  }

  for (; i < secArr.length; ) {
    if (secArr[i] == gueArr[i]) {
      numA++;
      secArr.splice(i, 1);
      gueArr.splice(i, 1);
    }else {
      i++;
    }
  }

  var map = {};
  //Generate a map
  for (i = 0; i < secArr.length; i++) {
    if (map[secArr[i]] === undefined || map[secArr[i]] === null) {
      map[secArr[i]] = 1;
    } else {
      map[secArr[i]]++;
    }
  }

  for (i = 0; i < gueArr.length; i++) {
    if (map[gueArr[i]] > 0) {
      numB++;
      map[gueArr[i]]--;
    }
  }

  return numA + 'A' + numB + 'B';
};
