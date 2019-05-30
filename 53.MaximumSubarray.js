'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums == null || nums.length == 0){
        return NaN;
    }

    if(nums.length===1){
        return nums[0];
    }

    var sum = 0 , maxSum = nums[0];
    for(var i = 0; i< nums.length; i++) 
    {
        sum = Math.max(sum + nums[i],  nums[i]);
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
};


function maxArrayAnotherSolution(nums)
{
    var ans=0, maxnum = nums[0], sum, flag = 0;
    for(var i=0; i< nums.length; i++)
    {
        maxnum = Math.max(nums[i], maxnum);
        sum += nums[i];

        if(sum<0) 
        {
            sum = 0;
        }else
        {
            ans = Math.max(ans, sum);
            flag =1;
        }
    }
    return flag ==0 ? maxnum : ans;
}