#2) from decimal to binary

def to_binary(bina):
    result1 = 0
    counter = 0
    
    while bina:
        result1 += bina % 2 * 10 ** counter
        counter += 1
        bina //=2
    return result1

print(to_binary(78))

#3) from binary to decimal
def dec(decimal):
    digit = 0
    for i in decimal:
        digit = digit * 2 + int(i)
    return digit

print(dec(decimal="10001"))
  



#4) https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/python
# def to_binary(n):
#     result1 = 0
#     counter = 0
    
#     while n:
#         result1 += n % 2 * 10 ** counter
#         counter += 1
#         n //=2
#     return result1