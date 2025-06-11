#1 https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/python

# from collections import Counter
# def highest_rank(arr):
#     frequency = Counter(arr)
#     max_frequency = max(frequency.values())
#     res = [num for num, freq in frequency.items() if freq == max_frequency]
#     return max(res)
    

#2 https://www.codewars.com/kata/59f4a0acbee84576800000af/train/python

# def pos_average(s):
#     substring = s.split(", ")
#     total = 0
#     matching = 0
    
#     for i in range(len(substring)):
#         for j in range(i + 1, len(substring)):
#             for k in range(len(substring[i])):
#                 total += 1
#                 if substring[i][k] == substring[j][k]:
#                     matching += 1
#     return(matching / total ) * 100
        

#3  https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/python

# def more_zeros(s):
#     res = []
#     for char in s:
#         bina = bin(ord(char))[2:]
#         if bina.count("0") > bina.count("1") and char not in res:
#             res.append(char)
#     return res