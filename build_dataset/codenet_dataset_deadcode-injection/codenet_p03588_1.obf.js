var a0_0x210372 = a0_0x4deb;
function Main(input) {
    var _0x1ee3b9 = a0_0x4deb;
    var max = 0x0;
    var ans = 0x0;
    input = input[_0x1ee3b9(0x0)]('\x0a');
    for (var i = 0x1; i < input['length']; i++) {
        var mem = input[i][_0x1ee3b9(0x0)]('\x20')[_0x1ee3b9(0x1)](Number);
        if (max < mem[0x0]) {
            max = mem[0x0];
            ans = mem[0x0] + mem[0x1];
        }
    }
    console[_0x1ee3b9(0x2)](ans);
}
Main(require('fs')[a0_0x210372(0x3)](a0_0x210372(0x4), 'utf8')[a0_0x210372(0x5)]());
function a0_0x4deb(uWXUcZ, key) {
    var stringArray = a0_0x2988();
    a0_0x4deb = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4deb(uWXUcZ, key);
}
function a0_0x2988() {
    var _0x17803f = [
        'split',
        'map',
        'log',
        'readFileSync',
        '/dev/stdin',
        'trim'
    ];
    a0_0x2988 = function () {
        return _0x17803f;
    };
    return a0_0x2988();
}