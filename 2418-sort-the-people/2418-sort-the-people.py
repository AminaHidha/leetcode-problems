class Solution(object):
    def sortPeople(self, names, heights):
        arr = []
        
        for i in range(len(names)):
            arr.append([names[i], heights[i]])
        
        arr.sort(key=lambda x: x[1], reverse=True)
        
        result = []
        
        for i in range(len(arr)):
            result.append(arr[i][0])
        
        return result
