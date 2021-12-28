f = open("data", "r")
data = f.readlines()

passwords = []
policies = []

valid_passwords = 0

for line in data:
    split_by_colon = line.split(':')
    passwords.append(split_by_colon[1].strip(' '))
    policies.append(split_by_colon[0])

for idx, password in enumerate(passwords):
    policy = policies[idx].split(' ')
    bounds = policy[0]
    letter = policy[1]
    indexes = bounds.split('-')
    first_index = int(indexes[0])
    second_index = int(indexes[1])

    check_first = True
    check_second = True

    if first_index >= len(password):
        check_first = False

    if second_index >= len(password):
        check_second = False

    first_result = False
    second_result = False

    if check_first:
        if password[first_index - 1] == letter:
            first_result = True
    
    if check_second:
        print("psswrd", len(password))
        print("index", second_index)
        if password[second_index - 1] == letter:
            second_result = True
    
    if first_result ^ second_result:
        valid_passwords += 1


print(valid_passwords)


