var p = require('fs')['readFileSync']('/dev/stdin', 'utf8');
p = p['split']('\x0a')['map'](_0x42328c => +_0x42328c);
console['log'](main());
function main() {
    var _0x55056f = 'No';
    var _0x1c80d6 = p[0x0];
    var _0x40cdc6 = 0x0;
    for (i = 0x1; i <= _0x1c80d6; i++) {
        while (_0x40cdc6 > i) {
            if (p[i] !== i)
                return _0x55056f;
            i++;
        }
        var _0x2d4b6e = i;
        while (p[_0x2d4b6e] !== i) {
            _0x2d4b6e++;
            if (p[_0x2d4b6e] !== _0x2d4b6e)
                return _0x55056f;
            _0x2d4b6e++;
        }
        _0x40cdc6 = _0x2d4b6e;
        while (_0x2d4b6e > i) {
            if (p[_0x2d4b6e - 0x2] < p[_0x2d4b6e - 0x1])
                return _0x55056f;
            p[_0x2d4b6e] = p[_0x2d4b6e - 0x2];
            _0x2d4b6e -= 0x2;
        }
    }
    return 'Yes';
}