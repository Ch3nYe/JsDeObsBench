var a0_0x2503b9 = a0_0x7f29;
(function (stringArrayFunction, comparisonValue) {
    var _0x2bf9e6 = a0_0x7f29;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2bf9e6(0x1b2)) / 0x1 * (parseInt(_0x2bf9e6(0x1ab)) / 0x2) + parseInt(_0x2bf9e6(0x1ae)) / 0x3 + -parseInt(_0x2bf9e6(0x1b6)) / 0x4 * (-parseInt(_0x2bf9e6(0x1b0)) / 0x5) + parseInt(_0x2bf9e6(0x1b1)) / 0x6 * (parseInt(_0x2bf9e6(0x1ac)) / 0x7) + -parseInt(_0x2bf9e6(0x1a9)) / 0x8 + parseInt(_0x2bf9e6(0x1b7)) / 0x9 * (parseInt(_0x2bf9e6(0x1a6)) / 0xa) + -parseInt(_0x2bf9e6(0x1aa)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4e53, 0x8c70c));
function saiki(str, flag) {
    var _0x3081fc = a0_0x7f29;
    while (!![]) {
        if (/\[{2}\d.*?\]{2}/[_0x3081fc(0x1b9)](str)) {
            str = str[_0x3081fc(0x1a5)](/\[{2}\d.*?\]{2}/, function (s) {
                var _0x2e0600 = _0x3081fc;
                var d = s[_0x2e0600(0x1b5)](0x2, -0x2)['split']('][')['map'](Number);
                d[_0x2e0600(0x1a3)]((a, b) => a - b);
                var sum = 0x0;
                for (var i = 0x0; i < Math['ceil'](d[_0x2e0600(0x1af)] / 0x2); i++) {
                    if (flag)
                        sum += Math['floor'](d[i] / 0x2) + 0x1;
                    else
                        sum += Math['floor'](d[i]);
                }
                return '(' + sum + ')';
            });
        } else
            break;
    }
    str = str[_0x3081fc(0x1a5)](/\(/g, '[');
    str = str[_0x3081fc(0x1a5)](/\)/g, ']');
    return str;
}
function a0_0x7f29(KbOhtu, key) {
    var stringArray = a0_0x4e53();
    a0_0x7f29 = function (index, key) {
        index = index - 0x1a3;
        var value = stringArray[index];
        return value;
    };
    return a0_0x7f29(KbOhtu, key);
}
var input = require('fs')[a0_0x2503b9(0x1b8)](a0_0x2503b9(0x1b4), a0_0x2503b9(0x1ad));
function a0_0x4e53() {
    var _0x57b9ff = [
        'length',
        '215BMKMWB',
        '305994MCrkwJ',
        '1288khgCaH',
        'trim',
        '/dev/stdin',
        'slice',
        '21044MhFZuT',
        '358461uQOvUg',
        'readFileSync',
        'test',
        'sort',
        'log',
        'replace',
        '170ynBRfZ',
        'shift',
        'split',
        '894824CpwYML',
        '3494975SvvNrh',
        '1522KBMyEz',
        '56uYvBCk',
        'utf8',
        '2021046eRLGWX'
    ];
    a0_0x4e53 = function () {
        return _0x57b9ff;
    };
    return a0_0x4e53();
}
var arr = input[a0_0x2503b9(0x1b3)]()[a0_0x2503b9(0x1a8)]('\x0a');
var n = arr[a0_0x2503b9(0x1a7)]() - 0x0;
arr['forEach'](str => {
    var _0x4edc56 = a0_0x2503b9;
    str = saiki(str, !![]);
    while (/\[\[/[_0x4edc56(0x1b9)](str))
        str = saiki(str, ![]);
    console[_0x4edc56(0x1a4)](str[_0x4edc56(0x1a5)](/\[|\]/g, ''));
});