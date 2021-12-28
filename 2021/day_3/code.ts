import input from './input';

function part_one(input: string) {
    const lines = input.split('\n')

    let gamma_rate = ''
    let epslion_rate = ''
    for (let i = 0; i < lines[0].length; i++){
        let zeros = 0;
        let ones = 0;
        for (let line of lines){
            if (line[i] == '0') { zeros++ } else if (line[i] == '1') { ones++ }
        }
        gamma_rate += zeros > ones ? 0 : 1
        epslion_rate += ones > zeros ? 0 : 1
    }
    
    return parseInt(gamma_rate, 2) * parseInt(epslion_rate, 2)
}

function part_two(input: string) {
    const lines = input.split('\n')

    let filtered_lines = lines;
    let oxygen_rating = ''
    for (let i = 0; i < filtered_lines[0].length; i++){
        if (filtered_lines.length == 1) {
            break;
        }

        let zero_lines = [];
        let one_lines = [];

        for (let line of filtered_lines) {
            if (line[i] == '0') { zero_lines.push(line) } else if (line[i] == '1') { one_lines.push(line) }
        }

        filtered_lines = zero_lines.length > one_lines.length ? zero_lines : one_lines
    }
    oxygen_rating = filtered_lines[0];

    filtered_lines = lines;
    let co2_rating = ''
    for (let i = 0; i < filtered_lines[0].length; i++){
        if (filtered_lines.length == 1) {
            break;
        }

        let zero_lines = [];
        let one_lines = [];

        for (let line of filtered_lines) {
            if (line[i] == '0') { zero_lines.push(line) } else if (line[i] == '1') { one_lines.push(line) }
        }

        filtered_lines = zero_lines.length > one_lines.length ? one_lines : zero_lines
    }
    co2_rating = filtered_lines[0];

    return parseInt(oxygen_rating, 2) * parseInt(co2_rating, 2);
}


console.log(part_one(input))
console.log(part_two(input))

