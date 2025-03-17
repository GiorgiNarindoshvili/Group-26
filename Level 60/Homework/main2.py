class Animal:
    def __init__(self, name):
        self.name = name
    
    def mo(self):
        print("Move")

class Wolf(Animal):
    def howl(self):
        print("wow-oo-wow")

class Lion(Animal):
    def roar(self):
        print("grraaaauuuu!")

wolf1 = Wolf("Gray")
lion1 = Lion("Crown")

wolf1.howl()
lion1.roar()