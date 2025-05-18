var a0_0x56437b = a0_0x9a8b;
function main(input) {
    var _0xf977d4 = a0_0x9a8b;
    var n = input[0x0] - 0x0;
    var cnt = 0x1;
    var ans = 0x0;
    for (cnt = 0x1; ans < n; cnt++) {
        ans += cnt;
    }
    console[_0xf977d4(0x0)](cnt - 0x1);
}
function a0_0x4874() {
    var _0x42dcbc = [
        'log',
        'utf8',
        'split'
    ];
    a0_0x4874 = function () {
        return _0x42dcbc;
    };
    return a0_0x4874();
}
function a0_0x9a8b(kzAHty, key) {
    var stringArray = a0_0x4874();
    a0_0x9a8b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x9a8b(kzAHty, key);
}
main(require('fs')['readFileSync']('/dev/stdin', a0_0x56437b(0x1))['trim']()[a0_0x56437b(0x2)]('\x0a'));