'use strict'

function main (n, array) {
  let counter = {}
  for (let a of array) {
    counter[a] = counter[a] || 0
    counter[a]++
  }
  let nums = Object.keys(counter)
  let evenCount = nums.reduce((count, num) => {
    if (counter[num] % 2 === 0) {
      return count + 1
    } else {
      return count
    }
  }, 0)
  let answer
  if (evenCount % 2 === 0) {
    answer = nums.length
  } else {
    answer = nums.length - 1
  }
  console.log(answer)
}

function doMain () {
  let input = ''
  process.stdin.resume()
  process.stdin.setEncoding('utf8')
  process.stdin.on('data', (chunk) => {
    input += chunk
  })
  process.stdin.on('end', () => {
    input = input.trim().split('\n')
    let n = Number(input[0])
    let array = input[1].split(' ').map(a => Number(a))
    main(n, array)
  })
}

doMain()
