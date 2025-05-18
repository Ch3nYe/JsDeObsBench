function a0_0x3a08() {
    var _0x1aa3a2 = [
        '/dev/stdin',
        'utf8',
        'split'
    ];
    a0_0x3a08 = function () {
        return _0x1aa3a2;
    };
    return a0_0x3a08();
}
function a0_0x58a4(Mujxnk, key) {
    var stringArray = a0_0x3a08();
    a0_0x58a4 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x58a4(Mujxnk, key);
}
var a0_0x375ad0 = a0_0x58a4;
function main(input) {
    var N = input[0x0] - 0x0;
    var ans = 0x0;
    for (var i = 0x69; i <= N; i += 0x2) {
        var cnt = 0x0;
        for (var j = 0x1; j <= i; j++) {
            if (i % j == 0x0)
                cnt++;
            if (cnt > 0x8)
                break;
        }
        if (cnt == 0x8)
            ans++;
    }
    console['log'](ans);
}
main(require('fs')['readFileSync'](a0_0x375ad0(0x0), a0_0x375ad0(0x1))['trim']()[a0_0x375ad0(0x2)]('\x0a'));