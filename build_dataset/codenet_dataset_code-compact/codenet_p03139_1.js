function main(input) {
  input = input.split(" ");
  var max = input[1] < input[2] ? input[1] : input[2];
  var min = input[0]-input[1] > input[2] ? 0 : input[2]-(input[0]-input[1]);
  console.log(max + " " + min);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));