# 1) გაასწორეთ შემდეგი კოდი:

# def calculate(n1, n2, op):
#     match op:
#         case "+": 
#           return n1 + n2
#         case "-": 
#            return n1 - n2
#         case "*": 
#           return n1 * n2
#         case "/": 
#           return n1 / n2

# def calc(expr):
#     if not expr: 
#       return 0
#     arr = []
    
#     for i in expr.split():
#         try:
#           arr.append(float(i))
#          except ValueError:
#               b = arr.pop()
#               a = arr.pop()
#               arr.append(calculate(a, b, i))
#     return arr[0]


#codewars python:

#1 #https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9/train/python
# def sortme(words):
#     sorted_str = sorted(words, key=str.lower)
#     return sorted_str

#2 https://www.codewars.com/kata/58d76854024c72c3e20000de/train/python
# def reverse_alternate(st):
#     words = st.split()
#     res = [
#         word[::-1] if i % 2 != 0 else word for i, word in enumerate(words)
#     ]
#     return " ".join(res)

#codewars js:

#1 https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascripthttps://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
# function findMissingLetter(array) {
#   for (let i = 0; i < array.length - 1; i++) {
#     const current = array[i].charCodeAt(0);
#     const next = array[i + 1].charCodeAt(0);
#     if (current + 1 !== next) {
#       return String.fromCharCode(current + 1);
#     }
#   }
# }


#2 https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
# function digitalRoot(n) {
#   return (n - 1) % 9 +1
# }