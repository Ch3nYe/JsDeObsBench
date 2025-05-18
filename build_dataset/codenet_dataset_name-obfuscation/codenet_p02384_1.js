ptrn = [[0, 1, 2], [0, 2, 4], [0, 4, 3], [0, 3, 1],
        [1, 5, 2], [1, 2, 0], [1, 0, 3], [1, 3, 5],
        [2, 1, 5], [2, 5, 4], [2, 4, 0], [2, 0, 1]];
function dice(num) {
  this.n = num;  // array
  this.check = function(top, front) {
    top = this.n.indexOf(top);
    front = this.n.indexOf(front);
    var flag = true;
    if(top > 2) {
      top = 5 - top;
      flag = false;
    }
    for(let i = 4 * top; i < 12; i++) {
      if(flag && ptrn[i][1] === front) {
        console.log(this.n[ptrn[i][2]]);
        break;
      }else if(!flag && ptrn[i][2] === front) {
        console.log(this.n[ptrn[i][1]]);
        break;
      }
    }
  }
}
function Main(input) {
  input = input.split("\n");
  var dice_a = new dice(input[0].split(" "));
  input.slice(2, 2+Number(input[1])).forEach(function(d){
    t = d.split(" ");
    dice_a.check(t[0], t[1]);
  });
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
