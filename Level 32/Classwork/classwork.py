#1) https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/python
# def create_phone_number(n):
    #return"".join(f"({n[0]}{n[1]}{n[2]}) {n[3]}{n[4]}{n[5]}-{n[6]}{n[7]}{n[8]}{n[9]}")

#2)https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/python
# def is_pangram(st):
#     st = st.lower()
#     alphabet = "abcdefghijklmnopqrstuvwxyz"
    
#     for i in alphabet:
#         if i not in st:
#             return False
        
#     return True

#3)https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/python
# def solution(s):
#     pairs = []
    
#     for i in range(0, len(s), 2):
#         pair = s[i:i + 2]
        
#         if len(pair) == 1:
#             pair += "_"
            
#         pairs.append(pair)
        
#     return pairs