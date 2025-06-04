#1 https://leetcode.com/problems/integer-to-roman/submissions/1653205807/

# class Solution:
#     def intToRoman(self, num: int) -> str:
#         value = [
#             1000, 900, 500, 400,
#             100, 90, 50, 40,
#             10, 9, 5, 4,
#             1
#         ]
#         syms = [
#             "M", "CM", "D", "CD",
#             "C", "XC", "L", "XL",
#             "X", "IX", "V", "IV",
#             "I"
#         ]

#         roman = ""
#         for i in range(len(value)):
#             while num >= value[i]:
#                 roman += syms[i]
#                 num -= value[i]
#         return roman


#2 https://leetcode.com/problems/remove-element/
# class Solution:
#     def removeElement(self, nums: List[int], val: int) -> int:
#         i = 0
#         for num in nums:
#             if num != val:
#                 nums[i] = num
#                 i += 1
#         return i


#3  https://leetcode.com/problems/combinations/submissions/1653208973/

# from itertools import combinations
# class Solution:
#     def combine(self, n: int, k: int) -> List[List[int]]:
#         return list(combinations(range(1, n + 1), k))

#4 https://leetcode.com/problems/longest-palindromic-substring/submissions/1653210420/
# class Solution:
#     def longestPalindrome(self, s: str) -> str:
#         def expand(l, r):
#             while l >= 0 and r < len(s) and s[l] == s[r]:
#                 l -= 1
#                 r += 1
#             return s[l+1:r]

#         longest = ""
#         for i in range(len(s)):
#             p1 = expand(i, i)
#             p2 = expand(i, i+1)
#             longest = max(longest, p1, p2, key=len)
#         return longest

#5 https://leetcode.com/problems/valid-parentheses/submissions/1653216955/

# class Solution:
#     def isValid(self, s: str) -> bool:
#         brackets = {')': '(', '}': '{', ']': '['}
#         res = []
#         for char in s:
#             if char in brackets.values():
#                 res.append(char)
#             elif char in brackets:
#                 if not res or res.pop() != brackets[char]:
#                     return False
#             else:
#                 return False
#         return not res

#6 https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/1653219416/

# from itertools import product
# class Solution:
#     def letterCombinations(self, digits: str) -> List[str]:
#         if not digits:
#             return  []

#         phone = {
#             '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
#             '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
#         }

#         groups = [phone[d] for d in digits]
#         return ["".join(chars) for chars in product(*groups)]

#7 https://leetcode.com/problems/score-of-a-string/description/
# class Solution:
#     def scoreOfString(self, s: str) -> int:
#         score = 0
#         for i in range(len(s) - 1):
#             score += abs(ord(s[i]) - ord(s[i + 1]))
#         return score