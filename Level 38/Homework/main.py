#Task 1 Lambda Exercises

listn = [(200, 3, 191), (0 , 1 ,5) ,(9 ,0 ,10), (7, 4 , 56)]
print(sorted(listn, key=lambda i: i[1]))

#2

lis1 = [1 , 2 , 5 , 3 , 9 , 12]
res = list(map(lambda a: a ** 2, lis1))
print(res)

#Task 2 map exercises

listg = ["goa", "is", "the", "one", "of", "the", "best", "academy"]
res = list(map(lambda a: a.upper(), listg))
print(res)

#2

list1 = [2, 9 , 16 , 7 , 43 , 1]
result = list(map(lambda a: a + 5, list1))
print(result)

#3

lst = ["I", "Study", "In", "GOAL", "ORIENTED", "ACADEMY"]
res = list(map(lambda a: "Start" " "+ a, lst))
print(res)

#Task 3 filter exercises

lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
res = list(filter(lambda a: a % 2 == 0, lst))
print(res)

#2

listtt = ["Banana", "Apple", "Peach", "Avocado" , "Pineapple"]
res = list(filter(lambda a: "A" in a, listtt))
print(res)

#3

names = ["John", "Emma", "Jake", "Rachel", "James"]
filtered = list(filter(lambda name: name[0] == 'J', names))
print(filtered)
