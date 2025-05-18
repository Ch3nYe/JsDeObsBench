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
    let d1 = [];
    let d2 = [];
    // 処理の記述
    const n = lines[0];
    
    let zorome = 'No';
    for (let i = 1; i < n; i++) {
        d1.push(lines[i].split(' ')[0]);
        d2.push(lines[i].split(' ')[1]);
    }
    for (let i = 0; i < n - 2; i++) {
        if (d1[i] == d2[i]) {
            if (d1[i+1] == d2[i+1]) {
                if (d1[i+2] == d2[i+2]) {
                    zorome = 'Yes';
                    break;
                }
            }
        }

    }

    // 表示
    console.log(zorome);
});