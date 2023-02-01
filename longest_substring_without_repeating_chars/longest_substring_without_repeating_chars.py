# Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        res = [0]
        arr = []

        for ch in s:
            print(arr)
            print(res)
            if ch not in arr:
                arr.append(ch)
                res[len(res) - 1] += 1
            else:
                if arr[0] == ch:
                    tempArr = arr[1:]
                    tempArr.append(ch)
                    arr = tempArr
                else:
                    indexToBeRemoved = arr.index(ch)
                    print(indexToBeRemoved)
                    tempArr = arr[indexToBeRemoved + 1:]
                    arr = tempArr

                    res.append(len(arr))
                    arr.append(ch)
                    res[len(res) - 1] += 1

        return(max(res))
