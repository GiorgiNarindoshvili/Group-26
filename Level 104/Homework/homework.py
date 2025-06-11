# #1 https://www.codewars.com/kata/5208f99aee097e6552000148/train/python
# def solution(s):
#     return "".join(" " + i if i.isupper() else i for i in s)
    

#2 https://www.codewars.com/kata/550498447451fbbd7600041c/train/python
# def comp(array1, array2):
#     try:
#         return sorted([i ** 2 for i in array1]) ==sorted(array2)
#     except:
#         return False


#3https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/python
# def longest_consec(s, k):
#     if k <= 0 or k > len(s):
#         return ""
#     return max(("".join(s[i:i+k]) for i in range(len(s) - k + 1)), key=len, default = "")
