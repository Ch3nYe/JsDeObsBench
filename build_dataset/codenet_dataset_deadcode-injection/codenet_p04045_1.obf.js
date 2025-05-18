var a0_0x541da4 = a0_0x4e69;
function main(input) {
    var _0x2ff82f = a0_0x4e69;
    var inputs = input['split']('\x0a');
    var money = inputs[0x0][_0x2ff82f(0x0)]('\x20')[0x0];
    var kRegexp = new RegExp(inputs[0x1]['replace']('\x20', '|'));
    while (kRegexp[_0x2ff82f(0x1)](String(money))) {
        money++;
    }
    return money;
}
function a0_0xd1c1() {
    var _0x356da2 = [
        'split',
        'test',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0xd1c1 = function () {
        return _0x356da2;
    };
    return a0_0xd1c1();
}
function a0_0x4e69(NYjhMe, key) {
    var stringArray = a0_0xd1c1();
    a0_0x4e69 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4e69(NYjhMe, key);
}
console[a0_0x541da4(0x2)](main(require('fs')[a0_0x541da4(0x3)](a0_0x541da4(0x4), a0_0x541da4(0x5))));