class Solution(object):
    def findMissingElements(self, nums):
       result=[]
       n=max(nums)
       m=min(nums)
       for i in range(m,n+1):
        if  i not in nums:
            result.append(i)
       return result
    

