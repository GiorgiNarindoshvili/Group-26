#Task1

#NameError Happen when we don't have value name defined
#IndexError Happen when we have incorrect index which aren't in list
#TypeError Happen we trying to combine different values which aren't defined
#SyntaxError Happen When Python interpreter is unable to recognize the structure of statements in code

#Task 2

name = input("Enter Your Name: ")

try:
    name = ("Giorgi")
except:
    print("Error")



#Task 3

list1 = [1, 2, 3, 4, 5, 6, 7]

try:
    list1 = int(list1)
except:
    print("Error")

print(list1[6])

#Task 3

num = input("Type A Number")

try:
    num = int(num)
except:
    print("Error")


#Task 4

#the try block will test a block of code for errors
#The except block handling the error

