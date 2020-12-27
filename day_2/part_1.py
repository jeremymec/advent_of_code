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
    bounds = bounds.split('-')
    lower_bound = bounds[0]
    upper_bound = bounds[1]

    if password.count(letter) >= int(lower_bound) and password.count(letter) <= int(upper_bound):
        valid_passwords = valid_passwords + 1

print(valid_passwords)


