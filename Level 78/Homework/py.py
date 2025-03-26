#1) https://www.codewars.com/kata/636f26f52aae8fcf3fa35819/train/python
# import sys
# def total_bytes(obj):
#     return sys.getsizeof(obj)

#2) https://www.codewars.com/kata/5b609ebc8f47bd595e000627/train/python
# def solution(arr_val, arr_unit) :
#     g = 6.67e-11
#     mu = {"kg" : 1, "g" : 1e-3, "mg" : 1e-6, "μg" : 1e-9, "lb" : 0.453592}
#     dunits = {"m" : 1, "cm" : 1e-2, "mm" : 1e-3, "μm" : 1e-6, "ft" : 0.3048}
    
#     m1 = arr_val[0] * mu[arr_unit[0]]
#     m2 = arr_val[1] * mu[arr_unit[1]]
    
#     distance = arr_val[2] * dunits[arr_unit[2]]
#     return g * m1 * m2 / distance ** 2

#3) https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a/train/python
# def solution(m1, m2, g1, g2, volume, temp) :
#     kelvin = temp + 273.15
#     num1 = (g1 / m1 + g2 / m2) * kelvin * 0.082
#     sol = num1 / volume
#     return sol

#4)https://www.codewars.com/kata/5d59576768ba810001f1f8d6/train/python
# def quadratic(x1, x2):
#     a = 1
#     b = -(x1 + x2)
#     c = x1 * x2
#     return (a,b,c)

#5) https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/python
# def to_csv_text(array):
#     return"\n".join([",".join(map(str, num)) for num in array])

#6) https://www.codewars.com/kata/5a07e5b7ffe75fd049000051/train/python
# def sorter(textbooks):
#     textbookss = sorted(textbooks, key = lambda x: x.lower())
#     return textbookss

#7) https://www.codewars.com/kata/5a026a9cffe75fbace00007f/train/python
# import math
# def circle_diameter(n, s): 
#     diameter = (s / (2 * math.tan(math.pi / n)))
#     return diameter * 2

#8)https://www.codewars.com/kata/59c287b16bddd291c700009a/train/python
# def ice_brick_volume(radius, bottle_length, rim_length):
#     return (bottle_length - rim_length) * 2 * radius ** 2

#9) https://www.codewars.com/kata/5951d30ce99cf2467e000013/train/python

# def pythagorean_triple(integers):
    
#     integers = sorted(integers)
#     i1 = integers[0] ** 2
#     i2 = integers[1] ** 2
#     i3 = integers[2] ** 2
    
#     if i1 + i2 == i3:
#         return True
#     return False

#10) https://www.codewars.com/kata/57037ed25a7263ac35000c80/train/python
# from urllib.parse import quote
# def generate_link(user):
#     link = "http://www.codewars.com/users/"
#     return link + quote(user)

#11) https://www.codewars.com/kata/5703c093022cd1aae90012c9/train/python
# def find(a, e):
#     return a.index(e) if e in a else "Not found"

#12) https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7/train/python
# def is_opposite(s1, s2):
#     return s1.swapcase() == s2 and s1 != ""
