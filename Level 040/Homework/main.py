#Start Of Homework
#1  Use `map()` to multiply all numbers in a list by 5 and return the updated list.


list1 = [1 ,2 ,3 ,4 ,5 ,6 ,7]
res = list(map(lambda x: x * 5, list1))
print(res)

#2 Use `map()` to convert a list of strings representing numbers (e.g., `["1", "2", "3"]`) into a list of integers.

listn = ["2","4","6","8","10","12"]
result = list(map(lambda x: int(x), listn))
print(result)

#3 Use `map()` to append the string "!" to each word in a list of words.

listn = ["Mercedes-Benz","and","BMW","are","German","Cars"]
res1 = list(map(lambda x: x + "!", listn))
print(res1)

#4  Use `map()` to calculate the square root of numbers from a given list.

list1 = [3 , 6 , 1 , 12 , 5 , 10]
res = list(map(lambda x: x ** 2, list1))
print(res)

# 5 Use `map()` to create a list of booleans indicating if numbers in a given list are even or odd.

listn1 = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
res1 = list(map(lambda x: x % 2 == 0, listn1))
print(res1)