#1  https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/python
# def solution(string,markers):
#     s_list = string.split("\n")
#     n_list = []

#     for item in s_list:
#         for char in markers:
#             if char in item:
#                 item = item.split(char)[0]
#         n_list.append(item.rstrip())
#     return "\n".join(n_list)


#2 https://www.codewars.com/kata/5672682212c8ecf83e000050/train/python

# def dbl_linear(n):
#     u=[1]
#     i = 0
#     j = 0
    
#     while len(u) <= n:
#         x_v = u[i]
#         y_v = u[j]
        
#         y = 2 * x_v + 1
#         z = 3 * y_v + 1
        
#         if y < z:
#             u.append(y)
#             i += 1
#         elif z < y:
#             u.append(z)
#             j += 1
#         else:
#             u.append(y)
#             i += 1
#             j += 1
#     return u[n]