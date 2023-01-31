# Link: https://leetcode.com/problems/running-sum-of-1d-array/?envType=study-plan&id=level-1

class Solution:
    def runningSum(self, nums):
        Sum = 0
        res = []
        for num in nums:
            Sum += num
            res.append(Sum)

        return res
