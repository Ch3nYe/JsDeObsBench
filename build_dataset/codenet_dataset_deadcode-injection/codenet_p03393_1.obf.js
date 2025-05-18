function a0_0x3907(CrYBty, key) {
    var stringArray = a0_0x5cbc();
    a0_0x3907 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3907(CrYBty, key);
}
var a0_0x148e94 = a0_0x3907;
function a0_0x5cbc() {
    var _0xe94c26 = [
        'length',
        'charCodeAt',
        'fill',
        'zyxwvutsrqponmlkjihgfedcba',
        'log',
        'slice',
        'fromCharCode',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim'
    ];
    a0_0x5cbc = function () {
        return _0xe94c26;
    };
    return a0_0x5cbc();
}
function Main(s) {
    var _0x1e0ee0 = a0_0x3907;
    const n = s[_0x1e0ee0(0x0)];
    const a = 'a'[_0x1e0ee0(0x1)]();
    var b = Array(0x1a)[_0x1e0ee0(0x2)](0x1);
    var i;
    if (n < 0x1a) {
        for (i = 0x0; i < n; i++) {
            b[s['charCodeAt'](i) - a] = 0x0;
        }
        for (i = 0x0; i < 0x1a; i++) {
            if (b[i]) {
                s += String['fromCharCode'](a + i);
                break;
            }
        }
    } else {
        if (s === _0x1e0ee0(0x3)) {
            console[_0x1e0ee0(0x4)](-0x1);
            return;
        }
        var c = s[0x19];
        b[s[_0x1e0ee0(0x1)](0x19) - a] = 0x0;
        for (i = 0x18; i >= 0x0; i--) {
            if (c > s[i]) {
                c = s['charCodeAt'](i) - a;
                s = s[_0x1e0ee0(0x5)](0x0, i);
                break;
            } else {
                b[s[_0x1e0ee0(0x1)](i) - a] = 0x0;
            }
        }
        for (var j = c - a; j < 0x1a; j++) {
            if (b[j] === 0x0) {
                s += String[_0x1e0ee0(0x6)](a + j);
                break;
            }
        }
    }
    console['log'](s);
}
Main(require('fs')[a0_0x148e94(0x7)](a0_0x148e94(0x8), a0_0x148e94(0x9))[a0_0x148e94(0xa)]());