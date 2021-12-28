import input from './input';

function part_one(){
    let prev_line: number | null = null;
    let increased = 0;
    for (const line of input.split('\n')){
        if (prev_line){
            if (parseInt(line) > prev_line) {
                console.log(parseInt(line), prev_line);
                increased++;
            }
        }
        prev_line = parseInt(line)
    }

    return increased;
}

function part_two(){
    const lines = input.split('\n')
    let previous_window_sum = null;
    let counter = 0;
    for (let i = 0; i < lines.length; i++) {
        let window_sum = parseInt(lines[i]) + parseInt(lines[i + 1]) + parseInt(lines[i + 2]);
        if (previous_window_sum){
            if (window_sum > previous_window_sum) { counter ++; }
        }
        previous_window_sum = window_sum
    }
    return counter;
}

console.log(part_two())