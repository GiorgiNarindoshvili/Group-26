#1 https://www.codewars.com/kata/5a045fee46d843effa000070/train/python

# def decomp(n):
#     def is_prime(x):
#         if x < 2: 
#             return False
#         if x == 2: 
#             return True
#         if x % 2 == 0: 
#             return False
#         for i in range(3, int(x**0.5) + 1, 2):
#             if x % i == 0:
#                 return False
#         return True

#     primes = [p for p in range(2, n+1) if is_prime(p)]
#     factors = []

#     for p in primes:
#         exp = 0
#         m = n
#         while m:
#             m //= p
#             exp += m
#         if exp > 1:
#             factors.append(f"{p}^{exp}")
#         else:
#             factors.append(f"{p}")

#     return " * ".join(factors)
