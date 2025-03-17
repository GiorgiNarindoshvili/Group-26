#Task 1

#map - არის ფუნქცია რომელიც უვლის ჩვენს list ს და ყველა ელემნტზე გამოიტანს ერთიდაიგივე ფუნქციას ამ ფუნქციის ელემენტებს გაუკეთებს ერთი და იგივე რამეს.
# filter - filter თვითონ სიტყვა მიგვანიშნებს რომ ეს ფუნქცია ფილტრავს ჩვენს list ს, მას აქვს თითქმის map ის მსგავსი ჩაწერის სტილი, ფილტერს შეუძლია შედარება, მაგალითად თუ შედარება True არის ფილტერი ამ ყველაფერს ტერმინალში გამოიტანს, თუ False არის გაატარებს.

#Task 2

lists = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

averages = [sum(lst) / len(lst) for  lst in lists]
print(averages)

#Task 3

dict1 = {
    "Milk": True,
    "Cheese": False,
    "Sausage": False,
    "Beef": True,
    "Ham": True
}

out_of_stock = dict(filter(lambda item: not item[1], dict1.items()))

print(out_of_stock)



