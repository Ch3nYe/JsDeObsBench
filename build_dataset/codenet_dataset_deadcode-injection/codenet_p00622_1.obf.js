var a0_0xe223d1 = a0_0x1879;
function a0_0x1879(DJNYsz, key) {
    var stringArray = a0_0x2c69();
    a0_0x1879 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1879(DJNYsz, key);
}
function a0_0x2c69() {
    var _0x517d12 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'join',
        'shift',
        'forEach',
        'hasOwnProperty',
        'uaPVh',
        'nCHnT',
        'fNrEI',
        'log'
    ];
    a0_0x2c69 = function () {
        return _0x517d12;
    };
    return a0_0x2c69();
}
var input = require('fs')[a0_0xe223d1(0x0)](a0_0xe223d1(0x1), a0_0xe223d1(0x2));
var arr = input[a0_0xe223d1(0x3)]()[a0_0xe223d1(0x4)]('\x0a');
while (!![]) {
    var a = arr['shift']()[a0_0xe223d1(0x4)]('');
    if (a[a0_0xe223d1(0x5)]('') == '-')
        break;
    var b = arr[a0_0xe223d1(0x6)]()['split']('');
    var c = arr[a0_0xe223d1(0x6)]()[a0_0xe223d1(0x4)]('');
    var obj = {};
    a['forEach'](function (v) {
        obj[v] = !![];
    });
    var str = '';
    var m = '';
    c[a0_0xe223d1(0x7)](function (v) {
        var _0x42b94a = a0_0x1879;
        if (obj[_0x42b94a(0x8)](v)) {
            if (m == '') {
                if ('aUQhd' !== 'JdpYK') {
                    m = a[_0x42b94a(0x6)]();
                    m = a[_0x42b94a(0x6)]();
                } else {
                    str += m;
                    m = b['shift']();
                }
            } else {
                if (_0x42b94a(0x9) === _0x42b94a(0xa)) {
                    m = a[_0x42b94a(0x6)]();
                } else {
                    m = a[_0x42b94a(0x6)]();
                }
            }
        } else {
            while (!![]) {
                if (m == v) {
                    m = a[_0x42b94a(0x6)]();
                    break;
                } else {
                    if (_0x42b94a(0xb) !== _0x42b94a(0xb)) {
                        if (m == '') {
                            m = a[_0x42b94a(0x6)]();
                            m = a[_0x42b94a(0x6)]();
                        } else {
                            m = a['shift']();
                        }
                    } else {
                        str += m;
                        m = b[_0x42b94a(0x6)]();
                    }
                }
            }
        }
    });
    str += m;
    str += b[a0_0xe223d1(0x5)]('');
    console[a0_0xe223d1(0xc)](str);
}