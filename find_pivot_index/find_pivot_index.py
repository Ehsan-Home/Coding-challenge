
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

# Cleaner approach
# [1, -1, 2]
# leftArray = [0,1,0]
# rightArray= [1,2,0]
# [1,7,3,6,5,6]
# leftArray = [0,1,8,11,17,22], sum = 0
# rightArray= [0,0,0,0,0,0], sum = 0
# rightArray= [0,0,0,11,5,0]
# class Solution:
#     def pivotIndex(self, nums: List[int]) -> int:
#         leftArray = []
#         rightArray= []

#         Sum = 0
#         leftArray.append(0)
#         for i in range(1,len(nums)):
#             Sum += nums[i-1]
#             leftArray.append(Sum)

#         Sum = 0
#         rightArray.insert(0,0)
#         for i in range(len(nums) - 2, -1 , -1):
#             Sum += nums[i+1]
#             rightArray.insert(0,Sum)

#         i = 0
#         while i < len(nums):
#             if leftArray[i] == rightArray[i]:
#                 return i

#             i+=1

#         return -1
