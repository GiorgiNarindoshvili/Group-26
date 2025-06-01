#1) https://www.codewars.com/kata/6707688c0f597511f6649270/train/python
# def was_package_received_yesterday(tfrom, tto, start, duration):
#     sttime = start - tfrom
#     delivery = sttime + duration
#     dvr = delivery + tto
#     return dvr < 0

#2) https://www.codewars.com/kata/65128732b5aff40032a3d8f0/train/python
# def neutralise(s1, s2):
#     moq = []
#     for i in range(len(s1)):
#         if(s1[i] == "+" and s2[i] == "+"):
#             moq.append("+")
#         elif(s1[i] == "-" and s2[i] == "-"):
#             moq.append("-")
#         else:
#             moq.append("0")
#     return "".join(moq) 

#3) https://www.codewars.com/kata/521cd52e790405a74800032c/train/python
# def wrap(value):
#     return {"value":value}

#4) https://www.codewars.com/kata/545b342082e55dc9da000051/train/python
# def partition(arr, cla):
#     l1, l2 = [], []
#     for i in arr:
#         if cla(i):
#             l1.append(i)
#         else:
#             l2.append(i)
#     return l1, l2

#5) https://www.codewars.com/kata/54dba07f03e88a4cec000caf/train/python
# class Dog():
#     def __init__(self, breed):
#         self.breed = breed
#     def bark(self):
#         return "Woof"
    
        
# snoopy = Dog("Beagle")

# snoopy.bark = lambda: "Woof"

# scoobydoo = Dog("Woof")

#6) https://www.codewars.com/kata/55ca43fb05c5f2f97f0000fd/train/python
# def list_animals(animals):
#     lst = ""
#     for i in range(len(animals)):
#         lst += str(i + 1) + '. ' + animals[i] + '\n'
#     return lst

#7) https://www.codewars.com/kata/56bc1acf66a2abc891000561/train/python
# from preloaded import greek_alphabet


# def greek_comparator(lhs, rhs):
#     lhsi = greek_alphabet.index(lhs)
#     rhsi = greek_alphabet.index(rhs)
    
#     if lhsi < rhsi:
#         return -1
#     elif lhsi > rhsi:
#         return 1
#     else: 
#         return 0

#8) https://www.codewars.com/kata/568018a64f35f0c613000054/train/python
# class Guesser:
#     def __init__(self, number, lives):
#         self.number = number
#         self.lives = lives
#     def guess(self,n):
#         if self.lives == 0:
#             raise Except("Omae wa mo shindeiru")
#         elif n  == self.number:
#             return True
#         self.lives -= 1
#         return False

#9) https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b/train/python
# def sakura_fall(v):
#     if v <= 0:
#         return 0
#     return 400 / v

#10) https://www.codewars.com/kata/577a6e90d48e51c55e000217/train/python
# def hotpo(ne):
#     if ne < 2:
#         return 0
#     return hotpo(3 * ne + 1 if ne % 2 else ne / 2) + 1

#11)https://www.codewars.com/kata/5786f8404c4709148f0006bf/train/python
# def starting_mark(height):
#     return round(height *  3.93484 + 3.4691,2)

#12) https://www.codewars.com/kata/5763bb0af716cad8fb000580/train/python
# def count_squares(cuts):
#     return (cuts + 1) ** 3 - (cuts - 1) ** 3

#13) https://www.codewars.com/kata/575fa9afee048b293e000287/train/python
# def how_much_water(water, load, clothes):
#     if clothes > 2 * load:
#         return 'Too much clothes'
#     elif clothes < load:
#         return 'Not enough clothes'
#     return round(water * 1.1 ** (clothes - load),2) 

#14) 