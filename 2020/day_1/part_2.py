f = open("data", "r")
data = f.readlines()
items = [int(i) for i in data]

for line in items:
    for second_line in items:
        for third_line in items:
            if sum([line, second_line, third_line]) == 2020:
                print(line * second_line * third_line)
                break