# # 1 https://www.codewars.com/kata/56548dad6dae7b8756000037/train/python
# def what_is_the_time(tim):
#     time = tim.split(":")
#     mins = 60 - int(time[1])
    
#     if time[1] == "00":
#         hours = 12 - int(time[0])
#     else:
#         hours = 11 - int(time[0])
    
#     if len(str(mins)) == 1:
#         mins = f"0{mins}"
    
#     if mins == 60:
#         mins = "00"
    
#     if hours <= 0:
#         hours = 12 + hours
    
#     if len(str(hours)) == 1:
#         hours = f"0{hours}"
    
#     if hours == 0:
#         hours = 12
        
#     return f"{hours}:{mins}"