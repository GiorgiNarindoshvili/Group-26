#Task 1

#1) შექმენით სია და დაამატეთ ყოველ ელემენტს სიაში 1, map ის გამოყენებით

listn = [1 , 2 , 3 , 4 , 5 , 6]
numbers = list(map(lambda a: a + 1 , listn))
print(numbers)

#Task 2

# აიღეთ ორი სხვადასხვა სიგრძის სია და map ის გამოყენებით პირველ სიას დაამატეთ მეორე სიის მნიშვნელობების კვადრატები

list1 = [1 , 2 , 3 , 4 , 5]
list2 = [6 , 7 , 8 , 9 , 10]

result = list(map(lambda a , b: a + b ** 2, list1,list2))
print(result)

# შექმენით ფუნქცია რომელიც აიღეს განუსაზღვრელი რაოდენობით არგუმენტებს და გადაეცით 7 სიტყვა და დააბრუნეთ წინადადება

list1 = ["My", "Name", "Is", "Giorgi", "I'm", "Studying", "In", "GOA"]
res = list(filter(lambda x : x  + x , list1))
print(res)

#აიღთ წინანადადება და გაფილტრეთ ყველაცუდი სიტყვისგან 'ზარმაცი' 'მეზარება'  და ასე შემდეგ 

listnn = ["Bad" "Good" "Lazy" "Honest" "Steam"]
res = list(filter(lambda item: not item[0], listnn))
print(res)