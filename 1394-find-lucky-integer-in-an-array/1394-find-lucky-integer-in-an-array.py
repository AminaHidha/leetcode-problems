class Solution(object):
    def findLucky(self, arr):
        freq={}
        ar=[-1]
        for i in range(len(arr)):
            val=arr[i]
            if val in freq:
                freq[val]+=1
            else:
                freq[val]=1
        for key in freq:
            if key==freq[key]:
                ar.append(freq[key])
        return max(ar)
        
        