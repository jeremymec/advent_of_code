import { input, simple_input } from "./input";

interface Board {
  cells: Cell[][];
}

interface Cell {
  number: number;
  hit: boolean;
}

function part_one(input: string) {
  const paragraphs = input.split("\n\n");
  const numbers = paragraphs[0].split(",").map((n) => parseInt(n));

  const board_strings = paragraphs.slice(1);
  const boards = board_strings.map((bs) => read_board(bs));

  for (const n of numbers) {
    for (const b of boards) {
      for (const row of b.cells) {
        for (const cell of row) {
          if (cell.number === n) {
            cell.hit = true;
          }
        }
      }
    }
    for (const b of boards) {
      if (is_bingo(b)) {
        return calculate_score(b, n);
      }
    }
  }

}

function part_two(input: string) {
  const paragraphs = input.split("\n\n");
  const numbers = paragraphs[0].split(",").map((n) => parseInt(n));

  const board_strings = paragraphs.slice(1);
  let boards = board_strings.map((bs) => read_board(bs));

  let winning_number = 0
  for (const n of numbers) {
    for (const b of boards) {
      for (const row of b.cells) {
        for (const cell of row) {
          if (cell.number === n) {
            cell.hit = true;
          }
        }
      }
    }

    let filtered_boards = boards.filter(b => {
        return !is_bingo(b)
    })

    winning_number = n;

    console.log(boards, winning_number)
    
    if (filtered_boards.length < 1) { break; }
    boards = filtered_boards;
  }

  console.log("Done");
  return calculate_score(boards[0], winning_number);

}

function calculate_score(board: Board, winning_number: number): number {
  console.log("Wining board", board.cells[0][0], "Winning Number", winning_number)
  return board.cells
    .flatMap((e) => e)
    .filter((c) => !c.hit)
    .reduce((total, current) => total + current.number, 0)
    * winning_number
}

function is_bingo(board: Board): boolean {
  let streak = true;
  for (let x = 0; x < board.cells[0].length; x++) {
    for (let y = 0; y < board.cells.length; y++) {
      if (!board.cells[y][x].hit) {
        streak = false;
      }
    }

    if (streak) {
      return true;
    }
    streak = true;
  }

  streak = true;
  for (let y = 0; y < board.cells.length; y++) {
    for (let x = 0; x < board.cells[y].length; x++) {
      if (!board.cells[y][x].hit) {
        streak = false;
      }
    }

    if (streak) {
      return true;
    }
    streak = true;
  }

  return false;
}

function read_board(board_string: string): Board {
  return {
    cells: board_string.split("\n").map((row) => {
      return row
        .split(" ")
        .filter((v) => v.trim() != "")
        .map((v) => {
          return { number: parseInt(v), hit: false };
        });
    }),
  };
}

// console.log(part_one(input));
console.log(part_two(input));