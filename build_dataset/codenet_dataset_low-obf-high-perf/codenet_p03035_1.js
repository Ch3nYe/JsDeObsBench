function main(input) {
  const nums = input.split(" ").map(num => parseInt(num, 10))
  console.log(nums[0] >= 13 ? nums[1] : nums[0] >= 6 ? nums[1] / 2 : 0)
}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"))
