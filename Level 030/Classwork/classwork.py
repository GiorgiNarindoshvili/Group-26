#Task 1

car = {
    "brand" : "Ferrari",
    "Model" : "Monza",
    "year" : 2023
}
brand = car["brand"]
Model = car["Model"]
year = car["year"]

print(brand)
print(Model)
print(year)

print(car["brand"])
print(car["Model"])
print(car["year"])

#Task 2
table = {
    "color" : "Brown",
    "legs" : "Beige",
    "chair" : "white"
}

print(table.items())

for key, value in table.items():
    if key == "color":
        pass
    else:
        print(value)

#Task 3

list1 = {
    "l1" : [1, 2, 3, 4, 5, 6],
    "l2" : ["Car", "Model", "Year"],
    "l3" : [2, 4, 6, 8, 10]
}

print(list1["l1"])
print(list1["l2"])
print(list1["l3"])

#Task 4
Room = {
    "Room2" : {
        "Wardrobe" : "Brown",
        "Bed" : "White",
        "drawer" : "black"
    }
}
print(Room["Room2"])