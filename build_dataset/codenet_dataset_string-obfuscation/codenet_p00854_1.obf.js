var a0_0x9a3726 = a0_0x50c0;
(function (stringArrayFunction, comparisonValue) {
    var _0x8e15be = a0_0x50c0;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x8e15be(0x129)) / 0x1 + -parseInt(_0x8e15be(0x130)) / 0x2 + -parseInt(_0x8e15be(0x12c)) / 0x3 * (parseInt(_0x8e15be(0x132)) / 0x4) + parseInt(_0x8e15be(0x12d)) / 0x5 * (-parseInt(_0x8e15be(0x126)) / 0x6) + -parseInt(_0x8e15be(0x125)) / 0x7 * (parseInt(_0x8e15be(0x128)) / 0x8) + -parseInt(_0x8e15be(0x133)) / 0x9 + -parseInt(_0x8e15be(0x12b)) / 0xa * (-parseInt(_0x8e15be(0x12f)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1fe9, 0x63416));
var input = require('fs')['readFileSync'](a0_0x9a3726(0x127), a0_0x9a3726(0x131));
var arr = input[a0_0x9a3726(0x123)]()[a0_0x9a3726(0x12a)]('\x0a');
function a0_0x50c0(krfcxV, key) {
    var stringArray = a0_0x1fe9();
    a0_0x50c0 = function (index, key) {
        index = index - 0x123;
        var value = stringArray[index];
        return value;
    };
    return a0_0x50c0(krfcxV, key);
}
function a0_0x1fe9() {
    var _0x5bc590 = [
        '7jlgMnC',
        '82734OdwUQE',
        '/dev/stdin',
        '6132032QoRYMD',
        '288601ZqcdLC',
        'split',
        '26328580akIwrv',
        '1421643vlKhgQ',
        '105lFzkcd',
        'map',
        '11KYvhYL',
        '1579804xFPCLR',
        'utf8',
        '4iZeYjr',
        '1755477kDVZAF',
        'log',
        'trim',
        'length'
    ];
    a0_0x1fe9 = function () {
        return _0x5bc590;
    };
    return a0_0x1fe9();
}
while (!![]) {
    var nm = arr['shift']();
    if (nm == '0\x200\x200')
        break;
    nm = nm[a0_0x9a3726(0x12a)]('\x20')[a0_0x9a3726(0x12e)](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    var start = nm[0x2];
    var ary = [];
    for (var i = 0x0; i <= n; i++)
        ary[i] = !![];
    var i = start;
    var j = 0x0;
    ary[start] = ![];
    var cnt = 0x1;
    while (!![]) {
        if (ary[i]) {
            j++;
            if (j == m) {
                ary[i] = ![];
                j = 0x0;
                cnt++;
                if (cnt == ary[a0_0x9a3726(0x124)] - 0x2)
                    break;
            }
        }
        i++;
        if (ary['length'] - 0x1 < i)
            i = 0x1;
    }
    for (var i = 0x1; i <= n; i++) {
        if (ary[i])
            console[a0_0x9a3726(0x134)](i);
    }
}