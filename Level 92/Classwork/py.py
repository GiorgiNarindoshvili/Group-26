#1 https://leetcode.com/problems/missing-number/submissions/1615070350/

# class Solution(object):
#     def missingNumber(self, nums):
#         n = len(nums) 
#         nu = (n*(n + 1)) // 2
#         summ = sum(nums)
#         return nu - summ

#2 https://leetcode.com/problems/reverse-string/

# class Solution(object):
#     def reverseString(self, s):
#         return s.reverse()

#3 https://leetcode.com/problems/car-fleet/description/
        
# class Solution(object):
#      def carFleet(self, target, position, speed) :
#         value = [[p, s] for p, s in zip(position, speed)]
#         stack = []
#         for p, s in sorted(value)[::-1]:
#             stack.append((target - p) / s)
#             if len(stack) >= 2 and stack[-1] <= stack[-2]:
#                 stack.pop()
#         return len(stack) 