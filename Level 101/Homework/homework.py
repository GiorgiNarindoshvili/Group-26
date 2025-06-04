#1 https://leetcode.com/problems/same-tree/submissions/1653226408/
# from typing import Optional
# # Definition for a binary tree node
# class TreeNode:
#      def __init__(self, val=0, left=None, right=None):
#          self.val = val
#          self.left = left
#          self.right = right
# class Solution:
#     def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
#         if not p and not q:
#             return True
#         if not p or not q or p.val != q.val:
#             return False
#         return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
        
        

#2  https://leetcode.com/problems/binary-tree-postorder-traversal/submissions/1653248194/

# Definition for a binary tree node.
# class TreeNode:
#      def __init__(self, val=0, left=None, right=None):
#          self.val = val
#          self.left = left
#          self.right = right
# class Solution:
#     def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
#         if not root:
#             return []
    
#         stack = [root]
#         result = []

#         while stack:
#             node = stack.pop()
#             result.append(node.val)
#             if node.left:
#                 stack.append(node.left)
#             if node.right:
#                 stack.append(node.right)
        
#         return result[::-1] 


#3 http://leetcode.com/problems/number-of-1-bits/submissions/1653251283/
# class Solution:
#     def hammingWeight(self, n: int) -> int:
#         return bin(n).count("1")

#4 https://leetcode.com/problems/excel-sheet-column-title/submissions/1653253211/
# class Solution:
#     def convertToTitle(self, columnNumber: int) -> str:
#         result = ""
#         while columnNumber > 0:
#             columnNumber -= 1
#             result =  chr(columnNumber % 26 + ord("A")) + result
#             columnNumber //= 26
#         return result

#5 https://leetcode.com/problems/duplicate-emails/submissions/1653254765/
# Write your MySQL query statement below
# SELECT email
# FROM Person
# GROUP BY email
# HAVING COUNT(*) > 1