#1
def manual_isalnum(s):
    for char in s:
        if not (('a' <= char <= 'z') or ('A' <= char <= 'Z') or ('0' <= char <= '9')):
            return False
    return True

print(manual_isalnum("$%$%$$"))
print("$%$%$$".isalnum())


#2
def manual_startswith(t):
    if t[0] == "G":
        return True
    return False
print(manual_startswith("Giorgi"))
print("Giorgi".startswith("G"))


#3
def manual_endswith(n):
    if n[-1] == "d":
        return True
    return False
print(manual_endswith("Hello worlD"))
print("Hello world".endswith("d"))

#4
import math
def manual_round1(number):
    if int(str(number).split(".")[1][0]) < 5:
        return int(number)
    return int(number) + 1
print(manual_round1(12.56))
print(round(12.56))