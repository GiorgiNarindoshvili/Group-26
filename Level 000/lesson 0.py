from turtle import *
#we want to paint a house
#step 1:  draw a square
width(7)
color("purple")
begin_fill()
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
end_fill()
#end of square
#drawing a door
forward(70)
color("yellow")
begin_fill()
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()
penup()
goto(200, 200)
pendown()
color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()
#we want to paint a window
#step 1: draw a square
pendown()
color("blue")
begin_fill()
left(30)
forward(50)
left(90)
forward(60)
left(90)  
forward(50)
penup()
left(90)
forward(60)
end_fill()
#penupleft
begin_fill()
left(180)
forward(190)
pendown()
right(90)
forward(50)
right(90)
forward(60)
right(90)
forward(50)
right(90)
forward(60)
end_fill()










exitonclick()