function main(input) {
  // 入力値（文字列）を改行で区切る
  const inputList = input.split('');
  const list = [];
  inputList.forEach(il => {
    if (!list.some(l => l === il)) {
      list.push(il);
    }
  });
  const result = list.length === 2 ? 'Yes' : 'No';
  console.log(result);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
