class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  print() {
    console.log(this.x.toFixed(8) + ' ' + this.y.toFixed(8));
  }
}

(function main(){
  const n = Number(require('fs').readFileSync('/dev/stdin', 'utf8').trim());
  let p1 = new Point(0, 0);
  let p2 = new Point(100, 0);
  p1.print();
  kock(n, p1, p2);
  p2.print();
})();

function kock(n, p1, p2) {
  const sin60 = Math.sin(60 * Math.PI / 180);
  const cos60 = Math.cos(60 * Math.PI / 180);
  function innerFunc(n, p1, p2) {
    if (!n) return;
    xDiff = p2.x - p1.x;
    yDiff = p2.y - p1.y;
    let s = new Point(p1.x + xDiff / 3, p1.y + yDiff / 3);
    let t = new Point(s.x + xDiff / 3, s.y + yDiff / 3);
    let u = new Point((t.x - s.x) * cos60 - (t.y - s.y) * sin60 + s.x, (t.x - s.x) * sin60 + (t.y - s.y) * cos60 + s.y);
    kock(n-1, p1, s); s.print();
    kock(n-1, s, u);  u.print();
    kock(n-1, u, t);  t.print();
    kock(n-1, t, p2);
  }
  kock = innerFunc;
  innerFunc(n, p1, p2);
}

