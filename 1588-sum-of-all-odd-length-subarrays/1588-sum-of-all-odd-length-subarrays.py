class Solution(object):
    def sumOddLengthSubarrays(self, arr):
        total=0
        for i in range(len(arr)):
            sum=0
            for j in range(i,len(arr)):
                sum+=arr[j]
                if (j-i+1)%2!=0:
                    total+=sum
        return total


        