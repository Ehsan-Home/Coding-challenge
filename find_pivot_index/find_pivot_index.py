
class Solution:
    def pivotIndex(self, nums):
        leftArray = []
        rightArray = []

        for i in range(len(nums)):
            rightArray.append(0)

        Sum = 0
        for index, num in enumerate(nums):
            if index == 0:
                leftArray.append(0)
            else:
                # print("index",index)
                Sum += nums[index-1]
                leftArray.append(Sum)

        Sum = 0
        i = len(nums) - 1
        while i >= 0:
            if i == len(nums) - 1:
                rightArray[i] = 0
            else:
                Sum += nums[i+1]
                rightArray[i] = Sum

            i -= 1

        i = 0
        while i < len(nums):
            if leftArray[i] == rightArray[i]:
                return i

            i += 1

        return -1
