#1 https://leetcode.com/problems/car-fleet/
# class Solution:
#     def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
#         list1 = []
#         for i, x in zip(position, speed):
#             list1.append([i, x])

#         list2 = []
#         for g, n in sorted(list1)[::-1]:
#             list2.append((target - g) / n)
#             if len(list2) >= 2 and list2[-1] <= list2[-2]:
#                 list2.pop()
#         return len(list2)
        
        

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

