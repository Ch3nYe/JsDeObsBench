var a0_0xdefda0 = a0_0x2917;
var p = require('fs')[a0_0xdefda0(0x0)]('/dev/stdin', 'utf8');
function a0_0x24cf() {
    var _0x3a2245 = [
        'readFileSync',
        'map',
        'log',
        'Yes'
    ];
    a0_0x24cf = function () {
        return _0x3a2245;
    };
    return a0_0x24cf();
}
function a0_0x2917(TwnNGz, key) {
    var stringArray = a0_0x24cf();
    a0_0x2917 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2917(TwnNGz, key);
}
p = p['split']('\x0a')[a0_0xdefda0(0x1)](a => +a);
console[a0_0xdefda0(0x2)](main());
function main() {
    var _0x1e28f5 = a0_0x2917;
    var N = 'No';
    var n = p[0x0];
    var t = 0x0;
    for (i = 0x1; i <= n; i++) {
        while (t > i) {
            if (p[i] !== i)
                return N;
            i++;
        }
        var j = i;
        while (p[j] !== i) {
            j++;
            if (p[j] !== j)
                return N;
            j++;
        }
        t = j;
        while (j > i) {
            if (p[j - 0x2] < p[j - 0x1])
                return N;
            p[j] = p[j - 0x2];
            j -= 0x2;
        }
    }
    return _0x1e28f5(0x3);
}