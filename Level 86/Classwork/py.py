#1) https://www.codewars.com/kata/596e4ef7b61e25981200009f/train/python

# from typing import Tuple
# import math

# def aspect_ratio(x: int, y: int) -> Tuple[int, int]:
#     return (math.ceil(y * 16/9),y)

#2) https://www.codewars.com/kata/5862f663b4e9d6f12b00003b/train/python
# def guess_blue(bs, rs, bp, rp):
#     blue = bs - bp
#     total = (bs + rs) - (bp + rp) 
#     return blue / total

#3) https://www.codewars.com/kata/573f5c61e7752709df0005d2/train/python
# def merge_arrays(first, second): 
#     return list(sorted(set(first + second)))

#4) https://www.codewars.com/kata/57280481e8118511f7000ffa/train/python
# def split_and_merge(s, separator):
#     return " ".join([separator.join(s1) for s1 in s.split()])


#5) https://www.codewars.com/kata/56bcaedfcf6b7f2125001118/train/python
# def html_special_chars(data): 
#     return(data.replace("&", "&amp;")
#                .replace("<", "&lt;")
#                .replace('>', "&gt;")
#                .replace('"', "&quot;"))

#6) https://www.codewars.com/kata/570bcd9715944a2c8e000009/train/python
# def sc(n: int) -> str:
#     if n > 1 and n <= 6:
#         return 'Aa~ ' * (n - 1) + "Pa! " + "Aa!" 
#     elif n > 6:
#         return 'Aa~ ' * (n - 1) + "Pa!"
#     return ""

#7) https://www.codewars.com/kata/542ebbdb494db239f8000046/train/python
# def next_item(xs, item):
#     found = None
#     for i in xs:
#         if found:
#             return i
#         if i == item:
#             found = True

#done with 8kyu
#7kyu

#8) https://www.codewars.com/kata/56747fd5cb988479af000028/train/python
# def get_middle(s):
#     middle = len(s) // 2
#     return s[middle] if len(s) % 2 else s[middle - 1 : middle + 1]

#9) https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/python
    # return " ".join(i.capitalize() for i in string2.split())

#10) https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/python
# def DNA_strand(dna):
#     replace = []
    
#     for d in dna:
#         if d == "A":
#             replace += "T"
#         elif d == "T":
#             replace += "A"
#         elif d == "C":
#             replace += "G"
#         elif d == "G":
#             replace += "C"
#     return"".join(replace)

#11) https://www.codewars.com/kata/551f37452ff852b7bd000139/train/python
# def add_binary(a,b):
#     su = a + b
#     su = bin(su)
#     return su[2:]

#12) https://www.codewars.com/kata/56606694ec01347ce800001b/train/python
# def is_triangle(a, b, c):
#     return a + b > c and b + c > a and a + c > b