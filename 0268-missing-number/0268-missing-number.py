class Solution(object):
    def missingNumber(self, nums):
        x=len(nums)
        for n in range(x+1):
            if n not in nums:
                return n
        