#Prefix is singular form and it includes the substring which appears the starting point of string, while prefixes includes a collection or even list of substractions which refers all prefixes in our list, we can use prefixes when we want to see if string starts at specific prefix or something like that, we can use prefix method f string when we running specific list or string code

#1
#Level 1 Hiding Lvl
class Car:
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

car1 = Car("Dodge", "Challenger", 2019, "Matte Black", "This Car Isn't Damaged!")
car1.dama()

#Level 2 Hiding Lvl
class Car1:
    def __init__(self, make, model, year, color, Insurance):
        self.make = make
        self.model = model
        self.year = year
        self.color = color
        #make our insurence private 
        self.__inssurance = Insurance
    
    #print our statements
    def ins(self):
        print(self.__inssurance)

car1 = Car1("Porsche", 911, "2020", "Yellow", "This Car Has An Insurance")
car1.ins()


#3 
class Animal:
    #declare variables
    def __init__(self, animal, color, size):
        self.animal = animal
        self.color = color
        self.size = size

        #print statemets
    def info(self):    
        print(f"{self.animal} is wild animal, His color is {self.color} and it's so {self.size}")

#make info about our animals and print it
an1 = Animal ("Wolf", "Black", "Large")
an1.info()

class Predator:
     #declare variables
    def __init__(self, animal , color , size):
        self.animal = animal
        self.color = color
        self.size = size

         #print statemets
    def eagle(self):    
        print(f"{self.animal} is water animal, His color is {self.color} and it's so {self.size}, it's so dangerous!")

#make info about our animals and print it
an1 = Predator ("Great White Shark", "Gray", "Large")
an1.eagle()

class Rabbit:
    #declare variables
    def __init__(self, animal , color , size):
        self.animal = animal
        self.color = color
        self.size = size

     #print statemets   
    def rabbit(self):    
        print(f"{self.animal} is Pet, His color is {self.color} and it's so {self.size}")

#make info about our animals and print it
rab1 = Rabbit("Rabbit", "White", "Small")
rab1.rabbit()

class Hawk:
    #declare variables
    def __init__(self, animal , color , size):
        self.animal = animal
        self.color = color
        self.size = size

    #print statemets   
    def hwk(self):    
        print(f"{self.animal} is Wild animal, His color is {self.color} and it's so {self.size}")

#make info about our animals and print it
hawk1 = Hawk("Hawk", "Brown", "big")
hawk1.hwk()
#end of the homework