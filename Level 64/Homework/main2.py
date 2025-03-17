#create class named Create
class Create:
    
    #create instance method to declare our statements
    def __init__(self, name, lastanme, dob, password ) -> None:
        self.name = name
        self.lastname = lastanme
        self.date_of_birth = dob
        self.password = password

    #make functions for our statements
    def name1(self):
        print("Enter Your Name: ")
        print(f"your name is {self.name}")
    def lastname1(self):
        print(f"Your Lastname is {self.lastname}")
    def dob1(self):
       print(f"Your Date Of Birth Is {self.date_of_birth}")
    def passwrd(self):
        print(f"Your password is {self.password}")

    

#make info about our functions
person1 = Create("Giorgi", "Narindoshvili", "09 / 05 / 2009", "Giorgi2009")
person2 = Create("Zuka", "Tughriashvili", "01 / 06 / 2010" , "zuka2010")
person3 = Create("Saba", "Shukvani", "13 / 10 / 2010", "saba20301")

#print each statement
person1.name1()
person1.lastname1()
person1.dob1()
person1.passwrd()

person2.name1()
person2.lastname1()
person2.dob1()
person2.passwrd()

person3.name1()
person3.lastname1()
person3.dob1()
person3.passwrd()

class Greeter:
    def __init__(self, name, lastname, dob, password):
        self.name = name
        self.lastname = lastname

    def greet(self):
        print(f"Hello, {self.name}!")
    def lastname(self):
        print(f"Your Lastname is{self.lastname}")

    @classmethod
    def from_input(cls):
        name = input("Enter your name: ")
        return cls(name)
    def last(cls):
        lstnm = input("Enter Your Last Name: ")
        return cls(lstnm)
# Using the class method to create an instance
greeter = Greeter.from_input()
greeter.greet()
Lastname = Greeter.last()
Lastname.lastname()