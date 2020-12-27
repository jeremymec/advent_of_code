f = open("data", "r")
data = f.readlines()

boarding_pass = data[0]
row_information = boarding_pass[:7]

upper_cursor = 127
lower_cursor = 0

for half in row_information:
    if (half == 'F'):
        upper_cursor -= (upper_cursor - lower_cursor) // 2
    elif (half == 'B'):
        lower_cursor += (upper_cursor - lower_cursor) // 2

print(upper_cursor, lower_cursor)