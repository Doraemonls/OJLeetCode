class Solution(object):
    def canWinNim(self, n):
        """
        :type n: int
        :rtype: bool
        """
        return n % 4 != 0 

    def canWinNim2(self, n):
        if(n<3):
            return True
        arr = [True, True, True]
        for i in range(3,n):
            arr.append(not (arr[i-3] and arr[i-2] and arr[i-1]))
        
        return arr[n-1]

if __name__ =='__main__':
    solution = Solution()
    for i in range(20):
        print(f"{i} can win: {solution.canWinNim2(i)}")