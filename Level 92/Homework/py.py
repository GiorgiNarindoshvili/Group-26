#1 https://leetcode.com/problems/car-fleet/
# class Solution(object):
#      def carFleet(self, target, position, speed) :
#         value = [[p, s] for p, s in zip(position, speed)]
#         stack = []
#         for p, s in sorted(value)[::-1]:
#             stack.append((target - p) / s)
#             if len(stack) >= 2 and stack[-1] <= stack[-2]:
#                 stack.pop()
#         return len(stack) 
        

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

#3 https://leetcode.com/problems/contains-duplicate/
    # class Solution(object):
    # def containsDuplicate(self, nums):
    #     return len(nums) != len(set(nums))

