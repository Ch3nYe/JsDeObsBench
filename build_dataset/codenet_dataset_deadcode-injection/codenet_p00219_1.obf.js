function a0_0x35d2() {
    var _0x485e15 = [
        'stdin',
        'setEncoding',
        'utf8',
        'data',
        'end',
        'split',
        'length'
    ];
    a0_0x35d2 = function () {
        return _0x485e15;
    };
    return a0_0x35d2();
}
var a0_0x205458 = a0_0x513f;
process[a0_0x205458(0x0)]['resume']();
process[a0_0x205458(0x0)][a0_0x205458(0x1)](a0_0x205458(0x2));
var input = '';
process[a0_0x205458(0x0)]['on'](a0_0x205458(0x3), function (chunk) {
    input += chunk;
});
function a0_0x513f(JFByXN, key) {
    var stringArray = a0_0x35d2();
    a0_0x513f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x513f(JFByXN, key);
}
process[a0_0x205458(0x0)]['on'](a0_0x205458(0x4), function () {
    var _0x125e1e = a0_0x513f;
    var lines = input[_0x125e1e(0x5)]('\x0a');
    var l = 0x0;
    while (!![]) {
        var n = Number(lines[l++]);
        if (n === 0x0) {
            break;
        }
        var sales = [
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0
        ];
        for (var i = 0x0; i < n; i++) {
            sales[Number(lines[l++])]++;
        }
        for (var i = 0x0; i < sales[_0x125e1e(0x6)]; i++) {
            var bar = sales[i] === 0x0 ? '-' : '';
            for (var j = 0x0; j < sales[i]; j++) {
                bar += '*';
            }
            console['log'](bar);
        }
    }
});