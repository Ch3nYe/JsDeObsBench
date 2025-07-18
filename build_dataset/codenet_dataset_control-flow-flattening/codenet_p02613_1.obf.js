const main = input => {
    const [n, ...rows] = input['trim']()['split']('\x0a');
    const k = [
        'AC',
        'WA',
        'TLE',
        'RE'
    ];
    const ans = {};
    for (let v of k)
        ans[v] = 0x0;
    for (let r of rows)
        ans[r] += 0x1;
    for (let v of k)
        console['log'](v + '\x20x\x20' + ans[v]);
};
process['env']['MYTEST'] ? test() : main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));