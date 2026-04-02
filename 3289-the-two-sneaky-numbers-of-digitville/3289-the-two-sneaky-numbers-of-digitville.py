class Solution(object):
    def getSneakyNumbers(self, nums):
        result=[]
        for i in range(len(nums)):
            for j in range(i+1,len(nums)):
                if nums[i]==nums[j] and  nums[i] not in result:
                    result.append(nums[i])
        return result
