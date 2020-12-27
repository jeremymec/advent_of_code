f = open("data", "r")
data = f.readlines()

trees = 0

def loop_slope():
    global data
    looped_data = []
    for line in data:
        looped_data.append(line.rstrip() + line)
    data = looped_data

def move_down_slope(pos_x, pos_y):
    global trees

    if pos_y >= len(data):
        return

    if pos_x >= len(data[pos_y]):
        loop_slope()

    if data[pos_y][pos_x] == '#':
        trees += 1
    
    move_down_slope(pos_x + 3, pos_y + 1)

move_down_slope(0,0)

print(trees)