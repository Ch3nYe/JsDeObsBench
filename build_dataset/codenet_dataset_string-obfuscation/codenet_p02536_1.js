let lines = [];
let reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// 標準入力の読み込み
reader.on('line', function(line) {
    lines.push(line);
});

reader.on('close', function() {
    // 処理の記述
    const [n, m] = lines[0].split(' ');
    const a = [];
    const b = [];
    for (let i = 0; i < m; i++) {
        [a[i], b[i]] = lines[i+1].split(' ');
    }
    const connected = [];
    connected.push(a[0]);
    connected.push(b[0]);
    ans = n-2;
    for (let i = 1; i < m; i++) {
        if ((!connected.includes(a[i])) && (!connected.includes(b[i]))) {
            ans--;
        } else if (!connected.includes(a[i])) {
            ans--;
            connected.push(a[i]);
        } else if (!connected.includes(b[i])) {
            ans--;
            connected.push(b[i]);
        }

    }

    // 表示
    console.log(ans);
});