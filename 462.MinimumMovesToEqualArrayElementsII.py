# Given a non-empty integer array, find the minimum number of moves required to make all array elements equal, where a move is incrementing a selected element by 1 or decrementing a selected element by 1.

# You may assume the array's length is at most 10,000.

# Example:

# Input:
# [1,2,3]

# Output:
# 2

# Explanation:
# Only two moves are needed (remember each move increments or decrements one element):

# [1,2,3]  =>  [2,2,3]  =>  [2,2,2]
# Solution idea: the elements in the middle is the one that each element's distance sum is the smallest one.
import math


class Solution(object):
    def minMoves2(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        length = len(nums)
        nums = sorted(nums)
        mid = nums[0]

        if length % 2 == 1:
            idx = int(math.floor(length / 2))
            mid = nums[idx]
        else:
            idx = int(math.floor(length / 2) - 1)
            mid = nums[idx]

        sum = 0
        for i in nums:
            sum += abs(i - mid)
        return sum


if __name__ == '__main__':
    sol = Solution()
    moves = sol.minMoves2([1, 2, 3])
    print(f"Only {moves} moves are needed")
