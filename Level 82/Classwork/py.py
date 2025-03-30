#Codewarses

#1 Cat years, Dog years

# def human_years_cat_years_dog_years(h):
#     if h == 1:
#         return [1, 15, 15]
#     elif h == 2:
#         return [2,24,24]
    
#     cat_years = 24 + (h - 2) * 4
#     dog_years = 24 +(h - 2) * 5
    
#     return [h, cat_years, dog_years]

#2 Quadrants
# def quadrant(x, y):
#     return(1 if x > 0 and y > 0 else
#             2 if x < 0 and y > 0 else
#             3 if x < 0 and y < 0 else
#             4 if x > 0 and y < 0 else
#             "On an axi")

#3 Unexpected parsing
# def get_status(is_busy):
    # return {"status": ("available", "busy")[is_busy]}

#4 Never visit a . . . !?
# def subtract_sum(n):
#     return 'apple'

#5) https://www.codewars.com/kata/67b7a527c9f842fd3b02adb8/train/python
# speed of aircrafts is given in *knots*
# travelTime is in *minutes*
# travel distance should be returned in *kilometers*

# def travel_distance(avg_speed, travel_time):
#     travel_hours = travel_time / 60
#     travel_miles = avg_speed * travel_hours
#     travel_kms = travel_miles * 1.852
#     return round(travel_kms, 2)

#6) https://www.codewars.com/kata/5a34b80155519e1a00000009/train/python
# def multiple_of_index(arr):
#     res = []
#     for i in range(len(arr)):
#         if arr[i] == 0 or (i != 0 and arr[i] % i == 0):
#             res.append(arr[i])
#     return res

#7) https://www.codewars.com/kata/586ee462d0982081bf001f07/train/python
# def fillable(stock, merch, n):
#     return stock.get(merch,0) >= n

#8) https://www.codewars.com/kata/58e43389acfd3e81d5000a88/train/python
# def circle_circumference(circle):
#     return 2 * circle.radius * 3.141592653589793238

#9) https://www.codewars.com/kata/59c8b38423dacc7d95000008/train/python
# def is_valid(formula):
#     if 1 in formula and 2 in formula:
#         return False
#     elif 3 in formula and 4 in formula:
#         return False
#     elif (5 in formula and 6 not in formula) or (5 not in formula and 6 in formula):
#         return False
#     elif 7 in formula or 8 in formula:
#         return True
#     return False

#10) https://www.codewars.com/kata/5866fc43395d9138a7000006/train/python
# def ensure_question(s):
#     if s.endswith("?"):
#         return s
#     return s + "?"

#11) https://www.codewars.com/kata/57b58827d2a31c57720012e8/train/python
# def fuel_price(litres, ppl):
#     discountCents = 0
#     if (litres >= 2):
#         discountCents = 0.05
#     if (litres >= 4):
#         discountCents = 0.1
#     if (litres >= 6):
#         discountCents = 0.15
#     if (litres >= 8):
#         discountCents = 0.2
#     if (litres >= 10):
#         discountCents = 0.25
#     total = litres * ppl - discountCents * litres
#     return round(total, 2)