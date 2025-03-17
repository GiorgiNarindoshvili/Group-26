#1)https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/python
# def add_unit(seconds, seconds_in_unit, unit_name, unit_name_plural, res):
#     units = int(seconds/seconds_in_unit)
#     if units >= 1:
#         seconds -= units *(seconds_in_unit)
#         if seconds == 0 and len(res) > 0:
#             res+= " and "
#         elif len(res) > 0:
#             res+= ", "
#         res += str(units)+" "+unit_name if units == 1 else str(units)+" "+unit_name_plural
#     return res, seconds

# def format_duration(seconds):
#     if seconds == 0:
#         return "now"
    
#     res = ""
#     res, seconds = add_unit(seconds, 60*60*24*365, "year","years", res)
#     res, seconds = add_unit(seconds, 60*60*24, "day","days", res)
#     res, seconds = add_unit(seconds, 60*60, "hour","hours", res)
#     res, seconds = add_unit(seconds, 60, "minute","minutes", res)
#     res, seconds = add_unit(seconds, 1, "second","seconds", res)
    
#     return res