#1 https://leetcode.com/problems/two-sum/

#class Solution(object):
    # def twoSum(self, nums, target):
    #     for i in range(len(nums)):
    #         for j in range(i + 1, len(nums)):
    #             if nums[i] + nums[j] == target:
    #                 return [i, j]

#2 https://leetcode.com/problems/palindrome-number/
# class Solution(object):
#     def isPalindrome(self, x):
#         x_str = str(x)
#         return x_str == x_str[::-1]

#3 https://leetcode.com/problems/valid-anagram/submissions/1612008922/

# class Solution(object):
#     def isAnagram(self, s, t):
#         s_lower = s.lower()
#         t_lower = t.lower()

#         if sorted(s_lower) == sorted(t_lower):
#             return True
#         return False
        
#4 https://leetcode.com/problems/group-anagrams/

# from collections import defaultdict
# class Solution(object):
#     def groupAnagrams(self, strs):
#         anagrams = defaultdict(list)

#         for i in strs:
#             sort = " ".join(sorted(i))
#             anagrams[sort].append(i)
#         return list(anagrams.values())