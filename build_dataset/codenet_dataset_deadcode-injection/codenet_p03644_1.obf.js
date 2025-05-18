var a0_0x504367 = a0_0x1ab5;
function a0_0x232c() {
    var _0x4497e9 = [
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x232c = function () {
        return _0x4497e9;
    };
    return a0_0x232c();
}
function a0_0x1ab5(zKGafN, key) {
    var stringArray = a0_0x232c();
    a0_0x1ab5 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1ab5(zKGafN, key);
}
function main(input) {
    var _0x91468f = a0_0x1ab5;
    const N = input;
    var ans = 0x1;
    var cnt = 0x0;
    var maxCnt = 0x0;
    for (var i = 0x1; i <= N; i++) {
        cnt = 0x0;
        var tmp = i;
        while (!![]) {
            if (tmp % 0x2 === 0x0) {
                cnt = cnt + 0x1;
                tmp = tmp / 0x2;
            } else {
                break;
            }
        }
        if (maxCnt < cnt) {
            maxCnt = cnt;
            ans = i;
        }
    }
    console[_0x91468f(0x0)](ans);
}
main(require('fs')['readFileSync'](a0_0x504367(0x1), a0_0x504367(0x2)));