#1) გააკეთეთ რაიმე *args მაგალითი
def sm(*args):
    return sum(args)

print(sm(1,5,7,2))
print(sm(10,20,30))

#2) გააკეთეთ რაიმე **kwargs მაგალითი

def an(**kwargs):
    for i, value in kwargs.items():
        print(i, value)

an(first_number = 1, second_number = 4, third_number = 16)

#3) გააკეთეთ რაიმე decorator function'ის მაგალითი

def greet():
    return "GOA IS BEST!"

def capitalize(cap):
    def change():
        cap_message = cap()
        rtrn_message = cap_message.capitalize()
        return rtrn_message
    return change


greet_cap = capitalize(greet)
print(greet_cap())

#4) გააკეთეთ multilevel inheritance'ს მაგალითი

class Info:
    def __init__(self, name, age, worker):
        self.name = name
        self.age = age
        self.worker = worker

class Add(Info):
    def __init__(self, name, age, worker, car):
        super().__init__(name, age, worker)
        self.car = car

class Res(Add):
    def __init__(self, name, age, worker, car):
        super().__init__(name, age, worker, car)

    def prnt(self):
        print(f"His Name is {self.name}")
        print(f"His age is {self.age}")
        print(f"He Works at{self.worker} He is java coder")
        print(f"He has {self.car}")

hmn = Res(name="Giorgi Narindoshvili", age=27, worker="Company", car="BMW M4 competition")
hmn.prnt()


