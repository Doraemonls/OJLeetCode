/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
'use strict';

var twoSum = function(nums, target) {
  if (nums == null || nums == undefined || nums.length < 2) {
    return [];
  }

  var map = {},
    count = nums.length;
  for (var i = 0; i < count; i++) {
    var res = target - nums[i];

    if (map[res] == null || map[res] == undefined) {
      map[res] = [];
    }
    map[res].push(i);
  }

  for (i = 0; i < count; i++) {

    if (map[nums[i]] != null && map[nums[i]].length > 0) {
      var nextIndex = map[nums[i]][0];
      //current item can't be same as stored object)
      if (nextIndex != i) {
        return [i, nextIndex];
      }
    }
  }
  return [];
};
