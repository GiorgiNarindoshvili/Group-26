# 1 https://www.codewars.com/kata/54e6533c92449cc251001667/train/python

# def unique_in_order(sequence):
#     if not sequence:
#         return []
#     result = [] 
#     for char in sequence:
#         if not result or char != result[-1]:
#             result.append(char)
#     return result


#2 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/python


# def sort_array(sa):
#     odds = sorted([i for i in sa if i % 2])
#     odd_i = 0
    
#     res = []
#     for num in sa:
#         if num % 2 != 0:
#             res.append(odds[odd_i])
#             odd_i += 1
#         else:
#             res.append(num)
#     return res

#3  https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/python
# def high(x):
#     return max(x.split(), key=lambda l: sum(ord(g) - 96 for g in l))