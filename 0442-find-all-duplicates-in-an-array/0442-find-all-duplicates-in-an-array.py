class Solution(object):
    def findDuplicates(self, nums):
        arr=[]
        obj={}
        for num in nums:
            if num in obj:
                obj[num]+=1
                if obj[num]==2:
                    arr.append(num)
            else:
                obj[num]=1
        return arr
        