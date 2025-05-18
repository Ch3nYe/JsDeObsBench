function main(input) {
  input=input.trim();
const a = parseInt(input.split(" ")[0], 10);
  console.log(Math.floor(a/3));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

