var a0_0x1721fe = a0_0x479f;
process[a0_0x1721fe(0x0)][a0_0x1721fe(0x1)]();
function a0_0x1cd6() {
    var _0x5b0165 = [
        'stdin',
        'resume',
        'setEncoding',
        'utf8',
        'data',
        'toString',
        'sort',
        'log',
        'YES'
    ];
    a0_0x1cd6 = function () {
        return _0x5b0165;
    };
    return a0_0x1cd6();
}
function a0_0x479f(yRuTcO, key) {
    var stringArray = a0_0x1cd6();
    a0_0x479f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x479f(yRuTcO, key);
}
process[a0_0x1721fe(0x0)][a0_0x1721fe(0x2)](a0_0x1721fe(0x3));
process[a0_0x1721fe(0x0)]['on'](a0_0x1721fe(0x4), function (chunk) {
    var _0x683a86 = a0_0x479f;
    var aaa = chunk[_0x683a86(0x5)]();
    var line = aaa['split']('\x0a');
    line['shift']();
    for (var i in line) {
        var l = line[i]['split']('\x20');
        for (var i in l) {
            l[i] = new Number(l[i]);
        }
        l[_0x683a86(0x6)](function (a, b) {
            if (a > b)
                return -0x1;
            if (a < b)
                return 0x1;
            return 0x0;
        });
        var num1 = new Number(l[0x0]) * new Number(l[0x0]);
        var num2 = new Number(l[0x1]) * new Number(l[0x1]);
        var num3 = new Number(l[0x2]) * new Number(l[0x2]);
        var num4 = num2 + num3;
        if (num1 === num4) {
            console[_0x683a86(0x7)](_0x683a86(0x8));
        } else {
            console['log']('NO');
        }
    }
});