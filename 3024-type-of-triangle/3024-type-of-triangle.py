class Solution(object):
    def triangleType(self, nums):
        """
        :type nums: List[int]
        :rtype: str
        """
        a, b, c = nums

        # Check if the sides can form a triangle
        if a + b <= c or a + c <= b or b + c <= a:
            return "none"

        # Check the type of triangle
        if a == b == c:
            return "equilateral"
        elif a == b or b == c or a == c:
            return "isosceles"
        else:
            return "scalene"