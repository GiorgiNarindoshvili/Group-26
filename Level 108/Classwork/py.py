#1 https://www.codewars.com/kata/5816b76988ca9613cc00024f/train/python
# def sort_sequence(s):
#     res = []
#     arr = []
#     for i in s:
#         arr.append(i)
#         if i == 0:
#             res.append(sorted(arr[:-1]) + [0])
#             arr =[]
#     return[n for i in sorted(res, key=lambda list: sum(list))for n in i]

#2 https://www.codewars.com/kata/52f78966747862fc9a0009ae/train/python
# def calc(e):
#     if not e:
#         return 0
    
#     res = []
#     operators = {'+', '-', '*', '/'}
    
#     for i in e.split():
#         if i in operators:
#             b = res.pop()
#             a = res.pop()
#             if i == "+":
#                 res.append(a + b)
#             elif i == "-":
#                 res.append(a - b)
#             elif i == "/":
#                 res.append(a / b)
#             elif i == "*":
#                 res.append(a * b)
#         else:
#             res.append(float(i))
                
#     return res[0]


#3 https://www.codewars.com/kata/51689e27fe9a00b126000004/train/python
# def format_words(words):
#     if not words:
#         return ""
    
    
#     words = [word for word in words if word != ""]
    
#     if not words:
#         return ""
    
#     if len(words) == 1:
#         return words[0]
    
#     return ", ".join(words[:-1]) + " and " + words[-1]
            