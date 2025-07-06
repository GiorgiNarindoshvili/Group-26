#6kyu

#1 https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/python
# def high(xre):
#     return max(xre.split(),key=lambda g: sum(ord(o) - 96 for o in g))

#2 https://www.codewars.com/kata/515f51d438015969f7000013/train/python
# def pyramid(n):
#     if n == 0:
#         return []
    
#     result = []
    
#     for i in range(1, n + 1):
#         result.append([1] * i)
#     return result

#3 https://www.codewars.com/kata/55d5434f269c0c3f1b000058/train/python
# def triple_double(num1, num2):
#     num1, num2 = str(num1), str(num2)
#     strnum1 = [num1[i: i+3] for i in range(0, len(num1) - 2)]
    
    
#     for i in strnum1:
#         if i.count(i[0]) == 3 and i[:-1] in num2:
#             return 1 
#     return 0
             

#5kyu
#4 https://www.codewars.com/kata/5a793fdbfd8c06d07f0000d5/train/python
# def solve(st):
#     st = "".join([i for i in st if i not in "()"])[::-1]
#     result = ""
    
#     for i in st:
#         if i.isdigit():
#             result *= int(i)
#         else:
#             result += i
#     return result[::-1]
