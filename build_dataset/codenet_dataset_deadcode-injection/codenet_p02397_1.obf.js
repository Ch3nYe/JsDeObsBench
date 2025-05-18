var a0_0x5a9623 = a0_0x39ad;
function a0_0x20a3() {
    var _0x176f77 = [
        'log',
        'readline',
        'stdin',
        'stdout',
        'line',
        'split',
        'push'
    ];
    a0_0x20a3 = function () {
        return _0x176f77;
    };
    return a0_0x20a3();
}
function main(tmp) {
    var _0x578aeb = a0_0x39ad;
    var i = 0x0;
    while (tmp[i] != 0x0 && tmp[i + 0x1] != 0x0) {
        if (tmp[i] < tmp[i + 0x1])
            console[_0x578aeb(0x0)](tmp[i] + '\x20' + tmp[i + 0x1]);
        else
            console[_0x578aeb(0x0)](tmp[i + 0x1] + '\x20' + tmp[i]);
        i = i + 0x2;
    }
}
var lines = [];
var b = [];
var reader = require(a0_0x5a9623(0x1))['createInterface']({
    'input': process[a0_0x5a9623(0x2)],
    'output': process[a0_0x5a9623(0x3)]
});
function a0_0x39ad(cnBDWr, key) {
    var stringArray = a0_0x20a3();
    a0_0x39ad = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x39ad(cnBDWr, key);
}
reader['on'](a0_0x5a9623(0x4), function (line) {
    var _0x4288d7 = a0_0x39ad;
    var a = line[_0x4288d7(0x5)]('\x20');
    var c = parseInt(a[0x0], 0xa);
    var d = parseInt(a[0x1], 0xa);
    b[_0x4288d7(0x6)](c);
    b[_0x4288d7(0x6)](d);
    if (c == 0x0 && d == 0x0)
        main(b);
});
process['stdin']['on']('end', function () {
});