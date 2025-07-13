#6kyu

#1) https://www.codewars.com/kata/557e8a141ca1f4caa70000a6/train/python

# def is_triangle_number(n: int) -> bool:
    # form1 = 8 * n + 1
    
    # sqrtform1 = int(form1**0.5)
    
    # return sqrtform1 * sqrtform1 == form1


#2) https://www.codewars.com/kata/59752e1f064d1261cb0000ec/train/python

# def what_time_is_it(angle):
#     angle %= 360
#     total = int(angle * 2)
    
#     hours = total // 60
#     minutes = total % 60
    
#     if hours == 0:
#         hours = 12
    
#     return f"{hours:02d}:{minutes:02d}"
    

#5 kyu

#1) https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/python
# import re
# def increment_string(s):
#     number = re.findall(r'\d+', s)
#     if number:
#         s_number = number[-1]
#         s = s.rsplit(s_number, 1)[0]
#         number = str(int(s_number) + 1)
#         return s + "0" * (len(s_number) - len(number)) + number 
#     return s + "1"


