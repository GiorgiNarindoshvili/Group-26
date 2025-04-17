#1
#In first code, we havce functiopn named whatday, which has parameter called num, in these num, there's probably integer numbers between 1 and 8, then we created variable called weekdays, where each day has each days of week, after that, we gotta use for loop to determine if range of num is between 1, 8 if range is, we gotta print that day which was given in variable above, otherwise: "Wrong please enter a number between 1 and 7", print(whatday(5)) would print "Thursday in terminal"

#2 
#we have created functiopn caled distinct which has parameter called seq, below the function we have empty variable called listn which has empty list for argument, after that we're using for loop to touch every single element in seq list, and if number i is in list, it's just gonna pass numbers and leave as it is, but if if i isnot in seq, then we're gonna append i in our listn and after that, we'll erase all copies from list and we would return our new list which displays [1,2,3,4,5,6,7] in terminal

#3
#we got function position created, which has one parameter called alphabet, bhelow the function we've got created variable called alphabet1 which has english alphabet given, themn we're returning position of alphabet which finds the index of our desired letter and we add 1 to find correct index, if we wouldn't add anything, the indexes would be incorrect, so the result of our function would be 6

#4
#we have function created called to_alternating_case which has one parameter string, below the function we have variablke called res which has empty string given, after that we're using for loop to touch every element in our string and determine that if i is lowecase return it as an upper case and if it is upper case, return it as a lowercase and return our res which will display "ALTerNAtiNG CaSe" in terminal

#5
#we have function created powers_of_two which has one parameter called n, below the function we're returning of powers of 2 for every number in range from 0 to n, this function would print in terminal: [2,4,8,16,32,64,128] and also: [1,2,4,8,16,32,64]

#6
#we have function created called domain_name which has one parameter called url below the function we have variable called x and we're replacing all patterns with space which has connection to links, after changing all patterns, we must split our string by period in the middle of the string and after that return the first index of x which displays codewars.

#7
#we have function created called alphanumeric which has one parameter called password below the function we have variable called letters which includes whole alphabet with lowercase letters and numbers between 0-9, then we're gonna make sure that if password has any leading whitespacwes, if it has we must return false and otehrwise we're using for loop on our password parameter to find lowercase letters in variable letters, if we'd find them, we're gonna define new variable immidiately which called is_valid, which would be true, although if it wouldn't  be is_valid would be false and we woould return result which will display true, because we have couple of lowercase letter in print(alphanumeric(...))

#7
#we have function created called spin_words which has one parameter called sentence below the function we have variable called arr which splits our sentence by space, we've got defined new variable called listn which has empty list given, then, we're using for loop for arr variable to find if len of i is greater than or equal to 5, we're gonna reverse list and we're gonna append it into listn, otherwisem we're gonna append default list and then we're gonna join our splitted string and convert it into string, which will display "The ecnetnes is a ecnetnes"

#8
#we have function created called duplicate_count which has one parameter called text below the function we have variable called listn which has empty list given. then we might use for loop to touch all lowercases in text by i, then we're gonna find if amount of i in text lower is greater or equal to 2 we're gonna append it in our listn to create list to find all lowecase copies, after that we're gonnacreate new variable called y where we might set our list and return length of y which would be 2, length of listn was 16, we found 8 duplicate, so 16/8 == 2

#9
#we have function created called solution which has one parameter called s below the function we have variable called string is first part of index which has empty string for argument, after that we're gonna use for loop for s to touch ecery element and determine that if i is upper case we might add string to our i with space otherwise, we must add string to i and return string, the result would be hakuna Matata

#10
##we have function created called find_missing_letter which has one parameter called chars below the function we have variable called letters which has given both uppercase and lowercase alphabet, then we must use for loop for our chars with len to determine how many elements do we have in list, the line below for loop says that if char's all elements not letters which means that if it's missed return letters to add that missing letter in result and dispalay after all steps, so the result would be K

#11
#we have function created called group_by_commas which has one parameter called n below the function we have variables called count and res , count variable will count amout of numbers in n parameter, although res would be our final result, so let's check first statmenet thaat if len(str(n)) is less than or equal to 3 return str(n) we converted n in str because to avoid int iterable problems, otherwise, we're gonna find str n on reverse position and found that if numbers of n is divided by 3, we might add comma in res which means that every single numbers index which is divided by 3 would be splitted by comma on that place, and if comma is on 1 index, we might move it on second one to avoid errors and return our result

#12
#we have function created called generate_hastag which has one parameter called s below the function we are making some processes on s like we're adding hastag on first index of s (s.title) after that we're joining s and splitting them by1 space, then we're using for loop to determine the loop of s if it is in range between 2 and 140 and if it is we're gonna return s as true otherwise false

