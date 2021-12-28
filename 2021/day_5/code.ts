import { simple_input } from "../day_5/input";

interface Line {
    start: [x: number, y: number],
    end: [x: number, y: number]
}

const lines: Line[] = simple_input.split('\n').map(line => {
    const segments = line.split(' -> ')
    const start_segment = segments[0].split(',')
    const end_segment = segments[1].split(',')

    return {
        start: [parseInt(start_segment[0]), parseInt(start_segment[1])],
        end: [parseInt(end_segment[0]), parseInt(end_segment[1])]
    }
    // TODO - The rest
})