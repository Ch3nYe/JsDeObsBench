const a0_0x5d435f = a0_0x7732;
function a0_0xd86b() {
    const _0x27f37c = [
        'trim',
        'split',
        'map',
        'length',
        'max',
        'log',
        'env',
        'MYTEST',
        'utf8'
    ];
    a0_0xd86b = function () {
        return _0x27f37c;
    };
    return a0_0xd86b();
}
function a0_0x7732(zdAotb, key) {
    const stringArray = a0_0xd86b();
    a0_0x7732 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x7732(zdAotb, key);
}
const main = input => {
    const _0xcccc88 = a0_0x7732;
    input = input[_0xcccc88(0x0)]()[_0xcccc88(0x1)]('\x0a');
    const [n, k] = input[0x0][_0xcccc88(0x1)]('\x20')[_0xcccc88(0x2)](Number);
    const directions = input[0x1][_0xcccc88(0x1)]('\x20')[_0xcccc88(0x2)](v => Number(v) - 0x1);
    const scoreList = input[0x2][_0xcccc88(0x1)]('\x20')[_0xcccc88(0x2)](Number);
    const ans = [new Array(n)['fill'](0x0)];
    for (let i = 0x0; i < k; i++)
        ans['push']([]);
    for (let i = 0x0; i < k; i++) {
        for (let x = 0x0; x < n; x++) {
            const score = ans[i][x];
            ans[i + 0x1][directions[x]] = score + scoreList[directions[x]];
        }
    }
    let max = -Infinity;
    for (let i = 0x1; i < ans[_0xcccc88(0x3)]; i++)
        max = Math[_0xcccc88(0x4)](max, Math[_0xcccc88(0x4)](...ans[i]));
    return console[_0xcccc88(0x5)](max);
};
process[a0_0x5d435f(0x6)][a0_0x5d435f(0x7)] ? test() : main(require('fs')['readFileSync']('/dev/stdin', a0_0x5d435f(0x8)));