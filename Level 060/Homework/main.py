class Motorcycle:

    x = 0
    count = 0

    def __init__(self, brand, color, model, hp):
        self.brand = brand
        self.color = color
        self.model = model
        self.horsepower = hp
        Motorcycle.count += 1

    def bmw(self):
        print(f"{self.brand} has 136 hp and color is red")
    def duct(self):
        print(f"{self.brand} have several models which are so famous")
    def hnd(self):
        print(f"{self.brand} made by one of the fastest motorcycles compamy")

motorcycle1 = Motorcycle(brand="Honda", color="Red", model="CBR600RR", hp=121)
motorcycle2 = Motorcycle(brand="BMW", color="Black", model="BMW R 1250 RT",  hp=136)
motorcycle3 = Motorcycle(brand="Ducati", color="Red", model="Panigale V2", hp=240)


motorcycle1.bmw()
motorcycle2.duct()
motorcycle3.hnd()
print(Motorcycle.count)