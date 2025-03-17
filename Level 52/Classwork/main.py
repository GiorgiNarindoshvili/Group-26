#1)https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/python
# def first_non_repeating_letter(s):
#     char_counter = {}
    
#     for char in s.lower():
#         char_counter[char]= char_counter.get(char, 0) + 1
        
#     for char in s:
#         if char_counter[char.lower()] == 1:
#             return char
#     return ""