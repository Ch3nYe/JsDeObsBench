function Main(input) {
	const setting = input.trim().split('\n')
  const process_sum = setting[0] - 0
  const up = setting[1].split(' ')
  const down = setting[2].split(' ')

  let answer = 0

  for (let process_up = 0; process_up < process_sum; process_up++) {
    let process_down = process_sum - process_up - 1
    let candies = 0
    for (let i = 0; i <= process_up; i++) {
      candies += parseInt(up[i])
    }

    for (let i = 0; i <= process_down; i++) {
      candies += parseInt(down[process_up + i])
    }
    if (answer < candies) {
      answer = candies
    }
  }

  console.log(answer)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));