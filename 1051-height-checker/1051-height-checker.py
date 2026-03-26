class Solution(object):
    def heightChecker(self, heights):
       sort=sorted(heights)
       count=0
       for height in range(len(heights)):
        if heights[height] !=sort[height]:
            count+=1
       return count


        