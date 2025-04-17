#1
#https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/python
# def open_or_senior(data):
#     return["Senior" if age >= 55 and handicap > 7 else "Open" for age, handicap in data]

#2
# https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/python
# def reverse_letter(st):
#     lm = "".join(filter(lambda x: x.isalpha(), st))
#     return lm[::-1]

#3
# https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/python
# def solve(s):
#     upper_count = 0
#     lower_count = 0
    
#     for char in s:
#         if char.isupper():
#             upper_count += 1
#         elif char.islower():
#             lower_count += 1
            
#     if upper_count > lower_count:
#         return s.upper()
#     return s.lower()

#4
#https://www.codewars.com/kata/5663f5305102699bad000056/train/python
# def mxdiflg(a1, a2):
#     if not a1 or not a2:
#         return -1
#     maxa1 = max(len(s) for s in a1)
#     mina1 = min(len(s) for s in a1)
#     maxa2 = max(len(s) for s in a2)
#     mina2 = min(len(s) for s in a2)
    
#     return max(abs(maxa1 - mina2), abs(maxa2 - mina1))
    
#5
#https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/python
# def min_value(digits):
#     return int("".join(map(str, sorted(set(digits)))))

#6
#https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/python
# def predict_age(*age):
#     return sum(a*a for a in age) ** 0.5 // 2

#7
#https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/train/python
# def show_sequence(n):
#     total = 0
#     result = "" 
#     if n < 0:
#         return str(n) + "<0"
#     if n == 0:
#         return "0=0"
#     for i in range(n + 1):
#         total += i
#         i = str(i)
#         result += i + "+" 
#     return result[:-1] + " " + "=" +" " + str(total)


#8
#https://www.codewars.com/kata/580a4734d6df748060000045/train/python
# def is_sorted_and_how(arr):
#     if arr == sorted(arr):
#         return "yes, ascending"
#     if arr == sorted(arr)[::-1]:
#         return "yes, descending"
#     else:
#         return "no"

#9
# https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/python
# def remove_duplicate_words(s):
#     li = []
    
#     for i in s.split():
#         if i not in li:
#             li.append(i)
#     return " ".join(li)

#10 https://www.codewars.com/kata/58712dfa5c538b6fc7000569/train/python
# def count_red_beads(n):
#     if n < 2:
#         return 0
#     return (n - 1) * 2
    