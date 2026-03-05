class Solution(object):
    def canAliceWin(self, nums):
        sum=0
        sum2=0
        for n in range(len(nums)):
            if nums[n]<10:
                sum+=nums[n]
            else:
                sum2+=nums[n]
        if sum==sum2:
            return False
        else :
            return True

        