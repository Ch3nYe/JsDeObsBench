function compareFunc(a, b) {
  return a - b;
}

function main(input) {
  let args = input.split(/\n/);
  let books = [...args[1].split(/\s/), ...args[2].split(/\s/)];
  let time = args[0].split(/\s/)[2];
  let result = 0;
  books.sort(compareFunc);
  for (let i = 0;i < books.length;i++) {
    if (time >= books[i] * 1) {
      time -= books[i];
      result++;
    }
  }
  console.log(result);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));