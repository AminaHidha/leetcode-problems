class Solution(object):
    def mostWordsFound(self, sentences):
        count=0
        for x in range(len(sentences)):
            a=sentences[x].split()
            if len(a)>count:
                count=len(a)
        return count
            


        