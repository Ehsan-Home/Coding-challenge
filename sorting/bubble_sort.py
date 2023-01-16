# 11 7 3 12
def bubble_sort(list):
    n = len(list)
    for i in range(0, n):
        for j in range(0, n - i - 1):
            if list[j] > list[j+1]:
                list[j], list[j+1] = list[j+1], list[j]

    return list


print(bubble_sort([12, 10, 4, -2, -4]))
