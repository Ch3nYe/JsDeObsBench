var a0_0x519375 = a0_0x881a;
function a0_0x881a(qfDqDZ, key) {
    var stringArray = a0_0x41e0();
    a0_0x881a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x881a(qfDqDZ, key);
}
function a0_0x41e0() {
    var _0x1d6fa2 = [
        'substring',
        'lastIndexOf',
        'log',
        'readFileSync',
        '/dev/stdin',
        'UTF-8',
        'split'
    ];
    a0_0x41e0 = function () {
        return _0x1d6fa2;
    };
    return a0_0x41e0();
}
const main = input => {
    var _0xb2cd0b = a0_0x881a;
    var N = input[0x0] - 0x0;
    var str = input[0x1];
    var ans = 0x0;
    var min = 0x0;
    var max = ~~(N / 0x2);
    start:
        while (min <= max) {
            var ave = ~~((min + max) / 0x2);
            for (var i = 0x0; i < N - ave; i++) {
                var base = str[_0xb2cd0b(0x0)](i, i + ave);
                if (str[_0xb2cd0b(0x1)](base) >= i + ave) {
                    min = ave + 0x1;
                    ans = ave;
                    continue start;
                }
            }
            max = ave - 0x1;
        }
    console[_0xb2cd0b(0x2)](ans);
};
main(require('fs')[a0_0x519375(0x3)](a0_0x519375(0x4), a0_0x519375(0x5))['trim']()[a0_0x519375(0x6)]('\x0a'));