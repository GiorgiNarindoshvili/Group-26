#1 https://www.codewars.com/kata/546dba39fa8da224e8000467
# def run_length_encoding(s):
#     res = []
    
#     i = 0
#     while i < len(s):
#         count = 1
        
#         while i + 1 < len(s) and s[i] == s[i + 1]:
#             count += 1
#             i += 1 
            
#         res.append([count, s[i]])
#         i += 1
#     return res


#2 https://www.codewars.com/kata/59752e1f064d1261cb0000ec

# def what_time_is_it(angle):
#     angle %= 360
#     total = int(angle * 2)
    
#     hours = total // 60
#     minutes = total % 60
    
#     if hours == 0:
#         hours = 12
    
#     return f"{hours:02d}:{minutes:02d}"

#3 https://www.codewars.com/kata/52945ce49bb38560fe0001d9/train/python

# def pascal(p):
#     triangle = []
    
#     for i in range(p):
#         row = [1]
#         for j in range(1, i):
#             row.append(triangle[i-1][j-1] + triangle[i-1][j])
#         if i > 0:
#             row.append(1)
#         triangle.append(row)
#     return triangle