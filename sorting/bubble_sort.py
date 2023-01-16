# 11 7 3 12
def bubble_sort(list):
    n = len(list)
    for i in range(n):
        for j in range(0, n - i - 1):
            if list[j] > list[j+1]:
                list[j], list[j+1] = list[j+1], list[j]

    return list


# Easier to understand
def enhanced_bubble_sort(list):
    for i in range(len(list) - 1, 0, -1):
        for j in range(i):
            if list[j] > list[j+1]:
                list[j], list[j+1] = list[j+1], list[j]

    return list


# print(bubble_sort([12, 133, 10, 4, -2, -4]))
print(enhanced_bubble_sort([12, 10, 4, -2, -4]))
