#1 https://leetcode.com/problems/roman-to-integer/

# class Solution:
#     def romanToInt(self, s: str) -> int:
#         roman_map = {'I': 1, 'V': 5, 'X': 10, 'L': 50,
#                  'C': 100, 'D': 500, 'M': 1000}
#         total = 0
#         prev = 0
#         for char in reversed(s):
#             value = roman_map[char]
#             if value < prev:
#                 total -= value
#             else:
#                 total += value
#                 prev = value
#         return total
            

#2https://leetcode.com/problems/merge-two-sorted-lists/

# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# class Solution:
#     def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
#         dummy=ListNode()
#         current=dummy
#         while list1 and list2:
#             if list1.val<list2.val:
#                 current.next=list1
#                 list1=list1.next
#             else:
#                 current.next=list2
#                 list2=list2.next
#             current=current.next
#         if list1:
#             current.next=list1
#         else:
#             current.next=list2
#         return dummy.next

#3 https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/1642579739/
# class Solution:
#     def removeDuplicates(self, nums: List[int]) -> int:
#         seen = set()
#         k = 0
#         for num in nums:
#             if num not in seen:
#                 seen.add(num)
#                 nums[k] = num
#                 k+=1
#         return k

#4 https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/submissions/1642580659/
# class Solution:
#     def strStr(self, haystack: str, needle: str) -> int:
#         return haystack.find(needle)

#5 https://leetcode.com/problems/divide-two-integers/submissions/1642582031/
# class Solution:
#     def divide(self, dividend: int, divisor: int) -> int:
#         maxint = 2**31 - 1
#         minint = -2**31

#         res = int(dividend / divisor)
#         return min(max(res, minint), maxint)