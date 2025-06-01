#1 
#The difference between instance and class method is that class method is defiing by @classmethod function, either class methods can access on class attributes, not on instance, However instance can access on both class and instance attributes, instances first parameter is self, and class method's parameter is cls

#2
#The difference between instance and static method is that static method defining like @staticmethod and it doesn't need any required parameter. They also don't have access on instance and class method

#3 The difference between class and static method is that class method needs a decorator called @classmethod and it needs first required parameter cls, on static method, we don't need any required parameter.

#4
#We can use the instance when we want to modify the object, we can use class method to define class methodm whcich has relationship to class and not to class instance, we can use static method, we can use the Static method when we don't need access on instance variables.

#5
#create class
class Animals:
    #create class atribute

    home = "Zoo"

    #create instance variables
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    #creating a class method
    @classmethod
    def animals_cls(cls, home):
        cls.home = home

an1 = Animals("Elephant", 9)
print(f"The Elephant Lives in {an1.home} ")
Animals.animals_cls("Jungle")
print(f"New House of elephant is {an1.home}")

#6
#create class
class multiplicity:
    #create static method
    @staticmethod
    def mult(a, b):
        return a * b
print(multiplicity.mult(15, 15))
