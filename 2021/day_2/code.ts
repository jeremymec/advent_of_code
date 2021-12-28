import input from './input';
const lines = input.split('\n')

function part_one() {
    let horizontal = 0;
    let depth = 0;
    
    for (let line of lines){
        const split_line = line.split(' ');
        const direction = split_line[0];
        const magnitude = parseInt(split_line[1]);
    
        switch (direction) {
            case 'forward':
                horizontal += magnitude;
                break;
            case 'down':
                depth += magnitude;
                break;
            case 'up':
                depth -= magnitude;
                break;
        }
    }
    
    return horizontal * depth;
}

function part_two() {

    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    for (let line of lines){
        const split_line = line.split(' ');
        const direction = split_line[0];
        const magnitude = parseInt(split_line[1]);
    
        switch (direction) {
            case 'forward':
                horizontal += magnitude;
                depth += aim * magnitude;
                break;
            case 'down':
                aim += magnitude;
                break;
            case 'up':
                aim -= magnitude;
                break;
        }
    }

    return horizontal * depth

}

console.log(part_one())
console.log(part_two())