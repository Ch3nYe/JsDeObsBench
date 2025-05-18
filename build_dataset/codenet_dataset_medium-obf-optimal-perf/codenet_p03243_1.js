(function(input) {
  'use strict';
  const DEBUT_POSSIBLE = [ 111, 222, 333, 444, 555, 666, 777, 888, 999];
  input.split("\n").some(function(line) {
    const lineNm = parseInt(line, 10)
    let MIN = 1100
    let res
    let flag = false
    DEBUT_POSSIBLE.forEach(element => {
      if (flag) return
      if (element == lineNm) {
        res = lineNm
        flag = true
      }
      const temAbs = Math.abs(element-lineNm)
      if (temAbs < MIN && element > lineNm) {
        MIN = temAbs
        res = element
      }
    });
    console.log(res.toString());
  })
})(require('fs').readFileSync('/dev/stdin', 'utf8'))