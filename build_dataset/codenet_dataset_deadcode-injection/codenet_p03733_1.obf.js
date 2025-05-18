const a0_0x2ec5a3 = a0_0x1d76;
function a0_0x1d76(dmYNwq, key) {
    const stringArray = a0_0x4d9f();
    a0_0x1d76 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1d76(dmYNwq, key);
}
function a0_0x4d9f() {
    const _0x2fc813 = [
        'log',
        'split',
        'map',
        'sort',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x4d9f = function () {
        return _0x2fc813;
    };
    return a0_0x4d9f();
}
console[a0_0x2ec5a3(0x0)]((args => {
    const _0x1e76f1 = a0_0x1d76;
    const [[N, T], t] = args['trim']()[_0x1e76f1(0x1)]`\n`[_0x1e76f1(0x2)](r => r[_0x1e76f1(0x1)]` `[_0x1e76f1(0x2)](v => v | 0x0));
    t[_0x1e76f1(0x3)]((a, b) => a - b);
    let s = T;
    for (let i = 0x1; i < N; i++) {
        if (t[i - 0x1] + T > t[i])
            s += t[i] - t[i - 0x1];
        else
            s += T;
    }
    return '' + s;
})(require('fs')[a0_0x2ec5a3(0x4)](a0_0x2ec5a3(0x5), 'utf8')));