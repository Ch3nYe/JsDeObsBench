var a0_0x2b7cbb = a0_0x2922;
function a0_0x2922(ggyNTP, key) {
    var stringArray = a0_0x30ea();
    a0_0x2922 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2922(ggyNTP, key);
}
function Main(input) {
    var _0x41cfb8 = a0_0x2922;
    input = input[_0x41cfb8(0x0)]('\x0a');
    var A = Number(input[0x0][_0x41cfb8(0x0)]('\x20')[0x0]);
    var B = Number(input[0x0][_0x41cfb8(0x0)]('\x20')[0x1]);
    var ans = BigInt(Math[_0x41cfb8(0x1)](A * B));
    var ans = ans[_0x41cfb8(0x2)]();
    console[_0x41cfb8(0x3)]('%s', ans);
    return ans;
}
function a0_0x30ea() {
    var _0x391d07 = [
        'split',
        'floor',
        'toString',
        'log',
        'input',
        'getElementById',
        'output',
        'result',
        'innerHTML',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x30ea = function () {
        return _0x391d07;
    };
    return a0_0x30ea();
}
function debug(n) {
    var _0x151e78 = a0_0x2922;
    var input = document['getElementById'](_0x151e78(0x4) + n)['value'];
    var ans = Main(input);
    var result = 'WA';
    if (ans == document[_0x151e78(0x5)](_0x151e78(0x6) + n)['value'][_0x151e78(0x0)]('\x0a')[0x0]) {
        result = 'AC';
    }
    document['getElementById'](_0x151e78(0x7) + n)[_0x151e78(0x8)] = result;
}
Main(require('fs')[a0_0x2b7cbb(0x9)](a0_0x2b7cbb(0xa), a0_0x2b7cbb(0xb)));