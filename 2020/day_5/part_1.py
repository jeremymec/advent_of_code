f = open("data", "r")
data = f.readlines()

highest_seat_id = 0

for boarding_pass in data:
    row_information = boarding_pass[:7]
    column_information = boarding_pass[7:]

    upper_cursor = 127
    lower_cursor = 0

    for half in row_information:
        if (half == 'F'):
            upper_cursor -= ((upper_cursor + 1) - lower_cursor) // 2
        elif (half == 'B'):
            lower_cursor += ((upper_cursor + 1) - lower_cursor) // 2

    row = upper_cursor
    # print("Row is", row)

    upper_cursor = 7
    lower_cursor = 0

    for half in column_information:
        if (half == 'L'):
            upper_cursor -= ((upper_cursor + 1) - lower_cursor) // 2
        elif (half == 'R'):
            lower_cursor += ((upper_cursor + 1) - lower_cursor) // 2

    column = upper_cursor
    # print("Column is", column)

    seat_id = (row * 8) + column
    
    if seat_id > highest_seat_id:
        highest_seat_id = seat_id

print(highest_seat_id)