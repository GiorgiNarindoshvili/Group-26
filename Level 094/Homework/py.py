#1 https://leetcode.com/problems/valid-sudoku/submissions/1625718806/
# class Solution:
#     def isValidSudoku(self, board: List[List[str]]) -> bool:
#         res = []

#         for i, row in enumerate(board):
#             for g, n in enumerate(row):
#                 if n != ".":
#                     res += [(i, n), (n, g), (i // 3, g // 3, n)]
#         return len(res) == len(set(res))