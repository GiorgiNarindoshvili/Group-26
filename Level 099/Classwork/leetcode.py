#1 https://leetcode.com/problems/median-of-two-sorted-arrays/
# class Solution:
#     def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
#         merged = sorted(nums1 + nums2) 
#         length = len(merged)
#         if length % 2 == 1:
#             return merged[length // 2]
#         return (merged[length // 2 - 1] + merged[length // 2]) / 2

#2 https://leetcode.com/problems/plus-one/submissions/1642559799/

# class Solution:
#     def plusOne(self, digits: List[int]) -> List[int]:
#         n = len(digits)
#         for i in range(n - 1, -1, -1):
#             if digits[i] < 9:
#                 digits[i] += 1
#                 return digits
#             digits[i] = 0
#         return [1] + digits

#3 https://leetcode.com/problems/maximum-gap/submissions/1642564782/
# class Solution:
#     def maximumGap(self, nums: List[int]) -> int:
#         if len(nums) < 2:
#             return 0
#         nums.sort()
#         max_gap = 0
#         for i in range(1, len(nums)):
#             max_gap = max(max_gap, nums[i] - nums [i - 1])
#         return max_gap

#4 https://leetcode.com/problems/permutations/submissions/1642565583/
# from itertools import permutations
# class Solution:
#     def permute(self, nums: List[int]) -> List[List[int]]:
#         allper = list(permutations(nums))
#         return allper