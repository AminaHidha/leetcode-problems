class Solution(object):
    def findKthPositive(self, arr, k):
        j=k
        for i in range(1,10000):
            if i not in arr:
                j-=1
                if j==0:
                    return i
            
