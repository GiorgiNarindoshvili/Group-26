#1https://leetcode.com/problems/reverse-integer/
# class Solution:
#     def reverse(self, x: int) -> int:
#         if x == 0:
#             return 0
#         x = str(x)
#         if "-" in x:
#             x = x[0] + x[1:][::-1]
#             if int(x) >= 2**31 - 1 or int(x) <= -(2**31):
#                 return 0
#             return int(x)
#         x = int(x[::-1].lstrip("0"))
#         if x >= 2**31 - 1 or x <= -(2**31):
#             return 0
#         return x



# #2 https://leetcode.com/problems/length-of-last-word/
# class Solution:
#     def lengthOfLastWord(self, s: str) -> int:
#         return len(s.split()[-1])


#3 https://leetcode.com/problems/longest-common-prefix/submissions/1625627089/
# class Solution:
    # def longestCommonPrefix(self, strs: List[str]) -> str:
    #     if not strs:
    #         return ""

    #     for i in range(len(strs[0])):
    #         char = strs[0][i]
    #         for strings in strs[1:]:
    #             if i >= len(strings) or strings[i] != char:
    #                 return strs[0][:i]
    #     return strs[0]  