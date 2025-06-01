#1 https://leetcode.com/problems/sqrtx/
# import math
# class Solution(object):
#     def mySqrt(self, x):
#         return int(math.sqrt(x))

#2 https://leetcode.com/problems/valid-palindrome/submissions/1612044372/
# class Solution(object):
#     def isPalindrome(self, s):
#         jo = "".join(i.lower() for i in s if i.isalnum())
#         return jo == jo[::-1]

#3 https://leetcode.com/problems/single-number/submissions/1612059297/

# class Solution(object):
#     def singleNumber(self, nums):
#         res = 0
#         for i in nums:
#             res ^= i
#         return res

#4 https://leetcode.com/problems/fibonacci-number/
# class Solution(object):
#     def fib(self, n):
#         if n == 0:
#             return 0
#         a, b = 0, 1
#         for _ in range(2, n + 1):
#             a, b = b, a + b
#         return b
        