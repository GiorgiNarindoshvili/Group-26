#3
#Difference Bewteen Static and Class Method
#The difference between Static and Class Method is that in Class Method, we need a first defined parameter named CLS, However in Static we don't need any additional parameter.

#4

#1
#default method
#create a class variable
class Cars:
    def __init__(self, make, year, model, color):
        self.name = make
        self.year = year
        self.model = model
        self.color = color

    #create variables for our info and print our statements
    def frst(self):
        print(f"This Car is {self.name}, This Car Released In {self.year}, The Model is {self.model}, and the color is {self.color}")
    def scnd(self):
        print(f"This Car is {self.name}, This Car Released In {self.year}, The Model is {self.model}, and the color is {self.color}")

#define infos about our cars
car1 = Cars("Porsche", 2021, "911GT", "Yellow")
car2 = Cars ("Mercedes" , 2018, "G63 AMG", "Gray")

#return our car statements
car1.frst()
car2.scnd()

#2
#create a class variable
class Car: 

#create a counter to count amount of cars
    x = 0
    count = 0
    def __init__(self, make, year, model, color):
        self.make = make
        self.year = year
        self.model = model
        self.color = color
        Car.count += 1
        #create variables for our info and print our statements

    def first(self):
        print(f"This Name Of The Car is {self.make}, year is {self.year}, model is {self.model} and the color of the car is {self.color}")
    def second(self):
        print(f"This Name Of The Car is {self.make}, year is {self.year}, model is {self.model} and the color of the car is {self.color}")

car1 = Car("Bently", 2024, "Continental GT", "Black")
car2 = Car("BMW", 2025, "M4 COMPETITION", "Blue")
car1.first()
car2.second()
print(Car.count)

#3
#Level 1 Hiding Lvl
class Carss:
    #declare variables
    def __init__(self, make, model, year, color, damaged):
        self.make = make
        self.model = model
        self.year = year
        self.color = color
        #make our dmg protected
        self._dmg = damaged
    
    #print our statements
    def dama(self):
        print(self._dmg)

car1 = Carss("Buggati", "Chiron", 2024, "Matte Black", "This Car Isn't Damaged!")
car1.dama()

#4
#Level 2 Data hiding

class Cars2:
    def __init__(self, make, model, year, color, new):
        self.make = make
        self.model = model
        self.year = year
        self.color = color
        self.__new = new

    def new(self):
        print(self.__new)

car1 = Cars2("Volksvagen", "Golf", 1995, "blue", "This Car isn't new!")
car1.new()

#5
class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def dog(self):
        print("WOOF!")

class Cat(Animal):
    def cat(self):
        print("MEOW!")

class Lion(Animal):
    def lion(self):
        print("GRAAAUUU!")

class Wolf(Animal):
    def wolf(self):
        print("AUUUUUUU!")

dog1 = Dog("Max")
cat1 = Cat("Rex")
lion1 = Lion("Simba")
wolve1 = Wolf("Gray")

dog1.dog()
cat1.cat()
lion1.lion()
wolve1.wolf()

#5
#create class
class Home:

    home = "Tbilisi"
    #create instance variables
    def __init__(self, name):
        self.name = name
    
    #create class method
    @classmethod
    def cl(cls, home):
        cls.home = home

#print our statements
home11 = Home("Sandro")
print(f"Sandro Lives in {home11.home}")
Home.cl("Kutaisi")
print(f"Sandro Was Living In {home11.home}")

#instance method
class Numbers:
    def __init__(self, num1, num2):
        self.num1 = num1
        self.num2 = num2
    def sum(self):
        return self.num1 + self.num2

numbers1 = Numbers(300, 100)
print(numbers1.sum())

#static Method
class Numbers2:
    def __init__(self, name):
        self.name = name
    
    @staticmethod
    def mult(num1, num2):
        return num1 * num2
    
print(Numbers2.mult(200, 100))
