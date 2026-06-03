class Solution(object):
   def uniqueOccurrences(self,arr):
    dictt = {}

    for a in arr:
        if a in dictt:
            dictt[a] += 1
        else:
            dictt[a] = 1

    counts = list(dictt.values())

    return len(counts) == len(set(counts))


        
