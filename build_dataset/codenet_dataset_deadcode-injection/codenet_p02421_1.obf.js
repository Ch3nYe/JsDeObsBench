var a0_0x1aed43 = a0_0x3338;
var input = '';
var readable = process[a0_0x1aed43(0x0)];
readable['resume']();
readable['setEncoding'](a0_0x1aed43(0x1));
function a0_0x3338(CkSHjv, key) {
    var stringArray = a0_0x29d0();
    a0_0x3338 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3338(CkSHjv, key);
}
function a0_0x29d0() {
    var _0x3c0aac = [
        'stdin',
        'utf-8',
        'data',
        'end',
        'split',
        'TqmKf',
        'EotEF',
        'log'
    ];
    a0_0x29d0 = function () {
        return _0x3c0aac;
    };
    return a0_0x29d0();
}
readable['on'](a0_0x1aed43(0x2), function (chunk) {
    input += chunk;
});
readable['on'](a0_0x1aed43(0x3), function () {
    var _0x5b66e0 = a0_0x3338;
    var data = input[_0x5b66e0(0x4)]('\x0a');
    var n = data[0x0];
    var tscore = 0x0;
    var hscore = 0x0;
    for (var i = 0x1; i < data['length']; i++) {
        var taha = data[i][_0x5b66e0(0x4)]('\x20');
        if (taha[0x0] < taha[0x1]) {
            hscore += 0x3;
        } else if (taha[0x1] < taha[0x0]) {
            tscore += 0x3;
        } else {
            if (_0x5b66e0(0x5) !== _0x5b66e0(0x6)) {
                hscore += 0x1;
                tscore += 0x1;
            } else {
                hscore += 0x3;
            }
        }
    }
    console[_0x5b66e0(0x7)](tscore + '\x20' + hscore);
});