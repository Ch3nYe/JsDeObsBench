function main(input) {
  const lines = input.trim().split("\n");
  const [N, M, X] = splitN(lines[0]);

  const costs = [];
  const options = [...Array(N).keys()];
  select(options);

  function select(options, cost = 0, aList = []) {
    for (let i = 0; i < options.length; i++) {
      const
        _options = [...options],
        [s] = _options.splice(i, 1),
        [c, ...a] = splitN(lines[s+1]),
        _cost = cost + c,
        _aList = a.map((v, i) => v + (aList[i] || 0));
      
      if (_aList.every(v => v >= X)) {
        costs.push(_cost);
        continue;
      }
      select(_options, _cost, _aList);
    }
  }

  console.log(costs.length ? Math.min(...costs) : -1);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));



function splitN(s) {
  return s.split(' ').map(Number);
}