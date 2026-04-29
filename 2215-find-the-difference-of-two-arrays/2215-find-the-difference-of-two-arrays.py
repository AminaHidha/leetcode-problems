class Solution(object):
    def findDifference(self, nums1, nums2):
        set1=set(nums1)
        set2=set(nums2)
        result1=[]
        result2=[]
        for i in set1:
            if i not in set2:
                result1.append(i)
        for j in set2:
            if j not in set1:
                result2.append(j)
        return [result1,result2]
            