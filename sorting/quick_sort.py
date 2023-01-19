def quickSort(list):
    if len(list) <= 1:
        return list

    # print(list)
    pivotPoint = list[0]
    firstPointer = 1
    lastPointer = len(list) - 1

    # 10, 8, 2, -1, -10
    while True:
        while firstPointer < len(list) and list[firstPointer] <= pivotPoint:
            # print(firstPointer)
            firstPointer += 1

        while lastPointer > 0 and list[lastPointer] > pivotPoint:
            lastPointer -= 1

        if firstPointer > lastPointer:
            break

        list[firstPointer], list[lastPointer] = list[lastPointer], list[firstPointer]

    list[0], list[lastPointer] = list[lastPointer], list[0]

    leftList = list[:lastPointer]
    rightList = list[lastPointer+1:]

    # print(f"pivot point: {pivotPoint}")
    # print(f"left list {leftList}")
    # print(f"right list {rightList}")
    # print(f"list {list}")
    # print("******")

    leftSorted = quickSort(leftList)
    rightSorted = quickSort(rightList)

    # print(f"left sorted {leftSorted}")
    # print(f"pivot {pivotPoint}")
    # print(f"right sorted {rightSorted}")
    # print("----")

    listTemp = []

    for item in leftSorted:
        listTemp.append(item)

    listTemp.append(pivotPoint)

    for item in rightSorted:
        listTemp.append(item)

    return listTemp


# print(quickSort([10, 8, 2, -1, -10]))
print(quickSort([8, 1, 10, 3, 4, 29]))
