# 11 7 3 12
# [7,11] [3,12]
# [3,7,11,12]
def mergeSort(list):
    if len(list) == 1:
        return list
    halfSize = int(len(list)/2)
    left = list[:halfSize]
    right = list[halfSize:]
    leftSorted = mergeSort(left)
    rightSorted = mergeSort(right)

    # [7,11] [3,12*,15]
    # [3,7,11,12,15]
    mergedSorted = []
    leftIndex = 0
    rightIndex = 0

    while leftIndex < len(leftSorted) and rightIndex < len(rightSorted):
        if leftSorted[leftIndex] <= rightSorted[rightIndex]:
            mergedSorted.append(leftSorted[leftIndex])
            leftIndex += 1
        else:
            mergedSorted.append(rightSorted[rightIndex])
            rightIndex += 1

    while leftIndex < len(leftSorted):
        mergedSorted.append(leftSorted[leftIndex])
        leftIndex += 1

    while rightIndex < len(rightSorted):
        mergedSorted.append(rightSorted[rightIndex])
        rightIndex += 1

    return mergedSorted


print(mergeSort([6, 20, 8, 19, 56, 23, 87, 41, 49, 53]))
