var a0_0x5a0b01 = a0_0x3777;
function keta(num) {
    for (var i = 0x1; i <= 0x6; i++) {
        if (num < 0xa ** i)
            return i % 0x2;
    }
}
function a0_0x3777(oUFTsD, key) {
    var stringArray = a0_0x52a4();
    a0_0x3777 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3777(oUFTsD, key);
}
function Main(input) {
    var _0x469011 = a0_0x3777;
    var ans = 0x0;
    var cnt = 0x1;
    while (cnt <= input) {
        ans += keta(cnt);
        cnt++;
    }
    console[_0x469011(0x0)](ans);
}
function a0_0x52a4() {
    var _0xbc7f4c = [
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x52a4 = function () {
        return _0xbc7f4c;
    };
    return a0_0x52a4();
}
Main(require('fs')[a0_0x5a0b01(0x1)]('/dev/stdin', a0_0x5a0b01(0x2)));