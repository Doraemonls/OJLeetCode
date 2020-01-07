from math import sqrt


class Solution(object):
    def bulbSwitch(self, n):
        """
        :type n: int
        :rtype: int
        """
        return int(sqrt(n))




if __name__ =="__main__":
    solution = Solution()
    for i in range(60):
        final_count = solution.bulbSwitch(i)
        print(f"{i} light has {final_count} lights turned on")