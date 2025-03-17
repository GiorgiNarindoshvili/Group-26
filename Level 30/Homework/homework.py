#Task 1

Kitchen = {
    "color" : "White",
    "Stove" : "Brown",
    "Table" : "Beige"
}

print(Kitchen.items())

for key, value in Kitchen.items():
    print(f"{key}: {value}")

#Task 2

car = {
    "brand" : "Audi",
    "model" : "Rs6",
    "color" : "Black",
    "price" : "50,000$"
}
car1 = {
    "brand" : "Nissan",
    "model" : "GTR" ,
    "color" :  "White",
     "price" : "90,000$"
}
car2 = {
    "brand" : "Porsche",
    "model" : "911",
    "color" : "Yellow",
     "price" : "120,000$"

}
brand = car["brand"]
model = car["model"]
color = car["color"]
price = car["price"]

print(brand)
print(model)
print(color)
print(price)

brand = car1["brand"]
model = car1["model"]
color = car1["color"]
price = car1["price"]

print(brand)
print(model)
print(color)
print(price)

brand = car2["brand"]
model = car2["model"]
color = car2["color"]
price = car2["price"]

print(brand)
print(model)
print(color)
print(price)