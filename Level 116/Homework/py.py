#1 https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/python
# def sum_strings(x, y):

#     x = x or "0"
#     y = y or "0"
    
#     if len(x) < len(y):
#         x, y = y, x
    
#     y = y.rjust(len(x), '0')
#     carry = 0
#     result = []
    
#     for i in range(len(x) -1, -1, -1):
#         digit = int(x[i]) + int(y[i]) + carry
#         carry = digit // 10
#         result.append(str(digit % 10))
    
#     if carry > 0:
#         result.append(str(carry))
        
#     final = "".join(result[::-1]).lstrip("0") or '0'
#     return final
