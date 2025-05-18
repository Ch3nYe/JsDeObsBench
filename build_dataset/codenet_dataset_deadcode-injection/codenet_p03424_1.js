function main(s) {
  
  const set = new Set(s.split('\n')[1].split(' '));
  const ans = ([...set].length === 4) ? 'Four' : 'Three';
  
  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
