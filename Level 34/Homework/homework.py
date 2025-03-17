#Task 1

name = ("Gabrieli")

try:
    print(name)
except NameError:
    print("Check The Variable Name")

name = ("Gabrieli")

try:
    print(name1)
except NameError:
    print("Check The Variable Name")

list1 = [0, 2, 4, 6, 8, 10 ,12] 

try:
    print(list1)
except SyntaxError:
    print("SyntaxError")

list1 = [0, 2, 4, 6, 8, 10 ,12] 

try:
    print(list1)
except SyntaxError:
    print("SyntaxError")

num1 = 15

try:
   num1 = 16
   print(num1)
except ValueError:
    print("ValueError")

#Task 2

num_func = [10, "1", 9, 15, "14", 8]

try:
    total = sum(num_func)
except TypeError:
    print("Invalid data type") 




    
   


