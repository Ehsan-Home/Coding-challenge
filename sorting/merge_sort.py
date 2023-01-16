# 11 7 3 12
# [7,11] [3,12]
# [3,7,11,12]
def merge_sort(list):
    if len(list) == 1:
        return list
    halfSize = int(len(list)/2)
    left = list[:halfSize]
    right = list[halfSize:]
    leftSorted = merge_sort(left)
    rightSorted = merge_sort(right)

    # [7,11] [3,12*,15]
    # [3,7,11,12,15]
    mergedSorted = []
    l = 0
    r = 0

    while l < len(leftSorted) and r < len(rightSorted):
        if leftSorted[l] <= rightSorted[r]:
            mergedSorted.append(leftSorted[l])
            l += 1
        else:
            mergedSorted.append(rightSorted[r])
            r += 1

    while l < len(leftSorted):
        mergedSorted.append(leftSorted[l])
        l += 1

    while r < len(rightSorted):
        mergedSorted.append(rightSorted[r])
        r += 1

    return mergedSorted


print(merge_sort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]))
