var a0_0x49d5f7 = a0_0x20fc;
function saiki(str, flag) {
    var _0x123c10 = a0_0x20fc;
    while (!![]) {
        if (/\[{2}\d.*?\]{2}/[_0x123c10(0x0)](str)) {
            str = str[_0x123c10(0x1)](/\[{2}\d.*?\]{2}/, function (s) {
                var _0x2dafa0 = a0_0x20fc;
                var d = s[_0x2dafa0(0x2)](0x2, -0x2)[_0x2dafa0(0x3)]('][')[_0x2dafa0(0x4)](Number);
                d[_0x2dafa0(0x5)]((a, b) => a - b);
                var sum = 0x0;
                for (var i = 0x0; i < Math['ceil'](d[_0x2dafa0(0x6)] / 0x2); i++) {
                    if (flag)
                        sum += Math[_0x2dafa0(0x7)](d[i] / 0x2) + 0x1;
                    else
                        sum += Math[_0x2dafa0(0x7)](d[i]);
                }
                return '(' + sum + ')';
            });
        } else
            break;
    }
    str = str['replace'](/\(/g, '[');
    str = str[_0x123c10(0x1)](/\)/g, ']');
    return str;
}
var input = require('fs')[a0_0x49d5f7(0x8)](a0_0x49d5f7(0x9), 'utf8');
var arr = input[a0_0x49d5f7(0xa)]()[a0_0x49d5f7(0x3)]('\x0a');
function a0_0x20fc(UKdZaZ, key) {
    var stringArray = a0_0x2aec();
    a0_0x20fc = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x20fc(UKdZaZ, key);
}
var n = arr[a0_0x49d5f7(0xb)]() - 0x0;
arr[a0_0x49d5f7(0xc)](str => {
    var _0x27b4d7 = a0_0x20fc;
    str = saiki(str, !![]);
    while (/\[\[/[_0x27b4d7(0x0)](str))
        str = saiki(str, ![]);
    console[_0x27b4d7(0xd)](str[_0x27b4d7(0x1)](/\[|\]/g, ''));
});
function a0_0x2aec() {
    var _0x1d8883 = [
        'test',
        'replace',
        'slice',
        'split',
        'map',
        'sort',
        'length',
        'floor',
        'readFileSync',
        '/dev/stdin',
        'trim',
        'shift',
        'forEach',
        'log'
    ];
    a0_0x2aec = function () {
        return _0x1d8883;
    };
    return a0_0x2aec();
}