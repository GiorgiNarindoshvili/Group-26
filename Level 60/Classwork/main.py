class Car:
    
    x = 0
    
    def __init__(self, brand, model, color, year):
        self.brand = brand
        self.model = model
        self.color = color
        self.year = year

    def hp(self):
        print(f"{self.brand} has 800 hp.")
    def fast(self):
        print(f"{self.brand} is so fast")
car1 = Car(brand="Mercedes-Benz", model="CLS63 AMG", color="Black", year=2014)
car2 = Car(brand="Audi", model="RS7", color="White", year=2022)
    
car1.hp()
car2.fast()


class Person:
    
    x = 0
    
    def __init__(self, suit, trouser, shoes, year):
        self.suit = suit
        self.trouser = trouser
        self.shoess = shoes
        self.year = year

    def frst(self):
        print(f"His {self.suit} suit is black")
    def scnd(self):
        print(f"His {self.trouser} Trouser is black")
person1 = Person(suit="Louis Vuitton", trouser="GUCCI", shoes="ZARA", year=1997)
person2 = Person(suit="Ralph Lauren", trouser="lululemon", shoes="DOLCE da GABANA", year=1994)
    
person1.frst()
person2.scnd()

#dunder methods are __init__, __str__, __add__
#instance methods are defined by class name and we can use it by __init__ method
#Class variables are defined within the class construction. 
#blue print is outline for our project.
