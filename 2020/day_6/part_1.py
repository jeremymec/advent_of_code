f = open("data", "r")
data = f.readlines()

current_group_lines = []
counts = 0

def process_current_group():
    global current_group_lines
    global counts
    answered = []
    for answers in current_group_lines:
        for answer in answers.rstrip('\n'):
            if answer not in answered:
                answered.append(answer)
    print(answered)
    counts += answered.__len__()
    current_group_lines = []


for line in data:
    if line == '\n':
        process_current_group()
    else:
        current_group_lines.append(line)

process_current_group()

print(counts)