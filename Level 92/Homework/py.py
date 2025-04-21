#2 https://leetcode.com/problems/longest-consecutive-sequence/
# class Solution(object):
#     def longestConsecutive(self, nums):
#         if not nums:
#             return 0
        
#         num_set = set(nums)
#         maxlen = 0

#         for i in num_set:
#             if i - 1 not in num_set:
#                 current = i
#                 current_len = 1

#                 while current + 1 in num_set:
#                     current += 1
#                     current_len += 1
#                 maxlen = max(maxlen, current_len)
#         return maxlen