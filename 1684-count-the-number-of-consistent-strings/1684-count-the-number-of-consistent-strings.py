class Solution(object):
    def countConsistentStrings(self, allowed, words):
        count=0
        for word in words:
            is_Valid=True
            for ch in word:
                if not ch in allowed:
                    is_Valid=False
                    break
            if is_Valid:
                count+=1
        return count
        