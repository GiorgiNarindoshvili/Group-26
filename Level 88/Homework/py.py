#1 https://www.codewars.com/kata/534ea96ebb17181947000ada/train/python
# def break_chocolate(n, m):
#     if (n * m) - 1 == -1:
#         return 0
#     return (n * m) -1

#2) https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/train/python
# def evaporator(c, e, t):
#     days = 0
#     limit = t / 100 * c
#     while c >= limit:
#         c = c - e / 100 * c
#         days += 1
#     return days


#3 https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/python
# def accum(st):
#     res = []
#     for i in range(len(st)):
#         res.append((st[i] * (i + 1)).capitalize())
        
#     cos =  "-".join(res)        
#     return cos

#4  https://www.codewars.com/kata/559590633066759614000063/train/python
# def min_max(lst):
#     lst = sorted(lst)
#     lowest = lst[0]
#     highest = lst[-1]
#     return [lowest, highest]

#5 https://www.codewars.com/kata/57f609022f4d534f05000024/train/python

# def stray(arr):
#     for num in arr:
#         if arr.count(num) == 1:
#             return num
     
#6 https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/python

# import math
# def factorial(n):
#     if n < 0 or n > 12:
#         raise ValueError()
#     return math.factorial(n)

#7 https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/python
# def capitalize(s):
#     res1 = "".join([char.upper() if i % 2 == 0 else char for i, char in enumerate(s)])
#     res2 = "".join([char.upper() if i % 2 != 0 else char for i, char in enumerate(s)])
#     return [res1, res2]

#8 https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/python
# def adjacent_element_product(arr):
#     return max(i * k for i, k in zip(arr, arr[1:]))

#9 https://www.codewars.com/kata/55b051fac50a3292a9000025/train/python
# def filter_string(st):
#     lst = list(filter(lambda x: x.isdigit(), st))
#     nums = "".join(lst)
#     return int(nums)

#10 https://www.codewars.com/kata/580755730b5a77650500010c/train/python
# def sort_my_string(s):
#     evens = ""
#     odds = ""
#     for i in range(len(s)):
#         if i % 2 == 0:
#             evens += s[i]
#         elif i % 2 != 0:
#             odds += s[i]
#     return "".join(evens + " " + odds)