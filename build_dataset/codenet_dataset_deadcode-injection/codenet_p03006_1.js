function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
    const n = +input[0];
  
    if (n <= 2) {
      console.log(1);
      return;
    }
  
    const xy = input.slice(1).map(s => s.split(' ').map(n => +n));
    // [[x, y],[x, y],[]]
  
    const map = {};
    xy.forEach(a => {
      xy.forEach(b => {
        if (a === b) return; // 自分自身の場合
        
        const vec = [b[0] - a[0], b[1] - a[1]];
        const m = vec.join('_');
        map[m] = map[m] == null ? 1 : map[m] + 1;
      });
    });

	const res = Object.keys(map).reduce((r, xystr) => {
		const count = map[xystr];
        return count > r[0] ? [count, xystr] : [r[0], r[1]];
    }, [0, '']);
  	
//    const pq = res[1];
    
    
    console.log(1 + (n - 1) - res[0]);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));