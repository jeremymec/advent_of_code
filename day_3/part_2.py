from math import prod

f = open("data", "r")
data = f.readlines()

def move_down_slope(pos_x, pos_y, slope_x, slope_y, trees):

    if pos_y >= len(data):
        return trees + 1

    print(pos_x % (len(data[pos_y]) - 1))
    if data[pos_y][pos_x % (len(data[pos_y]) - 1)] == '#':
        trees += 1
    
    return move_down_slope(pos_x + slope_x, pos_y + slope_y, slope_x, slope_y, trees)

# trees = move_down_slope(0,0,3,1,0)
trees = [move_down_slope(0,0,1,1,0), move_down_slope(0,0,3,1,0), move_down_slope(0,0,5,1,0), move_down_slope(0,0,7,1,0), move_down_slope(0,0,1,2,0)]

print("trees", trees)

print(prod(trees))