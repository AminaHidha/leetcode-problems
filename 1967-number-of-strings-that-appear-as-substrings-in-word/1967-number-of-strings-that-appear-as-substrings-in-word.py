class Solution(object):
    def numOfStrings(self, patterns, word):
        count=0
        splitWord=list(word)
        for x in patterns:
            if x in splitWord or x in word:
                count+=1
        return count
        