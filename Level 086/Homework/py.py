#1) https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/python
# import re
# def validate_pin(pin):
#     return bool(re.fullmatch(r'\d{4}|\d{6}', pin))

#2) https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/python
# import math
# def find_next_square(sq):
#     if math.isqrt(sq) ** 2 == sq:
#         next = (math.isqrt(sq) + 1) ** 2
#         return next
#     return -1

#3) https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/python
# def binary_array_to_number(arr):
#     integer = [int(i) for i in arr]
#     int1 = "".join(map(str, integer))
#     int12 = int(int1)
#     digit = 0
#     for i in arr:
#         digit = digit * 2 + int(i)
#     return digit

#4) https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/python
# def number(lines):
#     res = []
#     for i in range(len(lines)):
#         res.append(f"{i + 1}: {lines[i]}")
        
#     return res

#5) https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/python
# def gimme(inp):
#     return inp.index(sorted(inp)[1])

#6) https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/python
# def number(bus_stops):
#     total = 0
    
#     for take, off in bus_stops:
#         total+= take
#         total -= off
#     return total

#7) https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/python
# import math
# def round_to_next5(n):
#     return math.ceil(n / 5) * 5

#8) https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/python
# def no_odds(values):
#     return [i for i in values if i % 2 == 0]

#9) https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/python
# import math
# def factorial(n):
#     return math.factorial(n)

#10) https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/python
# def arithmetic(a, b, operator):
#     operators = {"add" : a + b, "subtract": a - b, "multiply": a * b, "divide": a/b}
#     return operators[operator] 