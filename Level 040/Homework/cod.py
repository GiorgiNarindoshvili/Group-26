# def dir_reduc(arr):
    # op ={"NORTH" : "SOUTH", "SOUTH" : "NORTH" , "WEST" : "EAST" , "EAST" : "WEST"}
    # stck = []
    
    # for i in arr:
        # if len(stck) == 0 or stck[-1] != op[i]:
            # stck.append(i)
            # continue
        # stck.pop()
    # return stck

#შევქმნათ ერთი ცვლადი რომელიც აიღებს value ებს {"NORTH" : "SOUTH", "SOUTH" : "NORTH" , "WEST" : "EAST" , "EAST" : "WEST"} და შევქმნათ ცარიელი ფუნქცია, შემდეგ გადავატაროთ for loop ჩვენს arr რათა ყველა ელემენტს შეეხოს, თუ ჩვენი ცვლადი უდრის ნულს ან ჩვენი ცარიელი ფუნქციის პირველ ინდექსს მაშინ ის არ უდრის ჩვენს value ებიან ცვლად op ს, შემდეგ ჩვენი ცვლადი დავამატოთ ლისტში აფენდ ფუნქციის გამოყენებით და დავაბრუნოტ ჩვენი stck 

#2

# def alphanumeric(password):
#     return password.isalnum()

#აქ უბრალოდ გამოვიყენეთ isalnum რათა გაგვეგო ჩვენი პაროლის მონაცემები და დაგვებრუნებინა ის
