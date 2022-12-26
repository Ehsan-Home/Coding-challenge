# Question link: https://www.hackerrank.com/challenges/special-palindrome-again/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

def substrCount(n, s):
    count = n
    for i in range(0, n):
        for j in range(i+2, n+1):
            subStr = s[i:j]
            if isSpecial(subStr):
                print(subStr)
                count += 1

    return count


def isSpecial(s):
    if len(s) % 2 == 1:
        halfSize = int(len(s) / 2)
        sTemp = s[:halfSize] + s[halfSize + 1:]
        s = sTemp

    firstCh = s[0]
    for ch in s:
        if firstCh != ch:
            return False

    return True
