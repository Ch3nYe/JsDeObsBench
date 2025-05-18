function a0_0x1ac8(qFQhfU, key) {
    var stringArray = a0_0xb57e();
    a0_0x1ac8 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1ac8(qFQhfU, key);
}
function a0_0xb57e() {
    var _0x580cf9 = [
        'split',
        'map',
        'length',
        'push',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0xb57e = function () {
        return _0x580cf9;
    };
    return a0_0xb57e();
}
var a0_0x8a113e = a0_0x1ac8;
function Main(input) {
    var _0x30301e = a0_0x1ac8;
    input = input['split']('\x0a');
    const N = parseInt(input[0x0]);
    const As = input[0x1][_0x30301e(0x0)]('\x20')[_0x30301e(0x1)](x => parseInt(x));
    var now = As;
    while (!![]) {
        var min = -0x1;
        var next = [];
        for (i = 0x1; i < now[_0x30301e(0x2)] - 0x1; i++) {
            if (min == -0x1 || now[min] > now[i])
                min = i;
            if (min == now[i] && now[i - 0x1] + now[i + 0x1] < now[min - 0x1] + now[min + 0x1])
                min = i;
        }
        if (now[min] * 0x2 > now[now['length'] - 0x2])
            min = now['length'] - 0x2;
        for (i = 0x0; i < now['length']; i++) {
            if (i == min - 0x1) {
                next[_0x30301e(0x3)](now[min - 0x1] + now[min]);
            } else if (i == min) {
            } else if (i == min + 0x1) {
                next[_0x30301e(0x3)](now[min + 0x1] + now[min]);
            } else {
                next[_0x30301e(0x3)](now[i]);
            }
        }
        now = next;
        if (now['length'] == 0x2)
            break;
    }
    console[_0x30301e(0x4)](now[0x0] + now[0x1]);
}
Main(require('fs')[a0_0x8a113e(0x5)](a0_0x8a113e(0x6), a0_0x8a113e(0x7)));