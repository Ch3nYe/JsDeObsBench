function a0_0x3b76(qLYMRq, key) {
    var stringArray = a0_0x2cae();
    a0_0x3b76 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3b76(qLYMRq, key);
}
var a0_0x5d5ab0 = a0_0x3b76;
function Main(input) {
    var _0xad7d82 = a0_0x3b76;
    const M = input[0x0][0x1];
    const alist = input[0x1];
    const kumiList = alist['reduce']((arr, ai, i) => {
        var _0x5aa1c0 = a0_0x3b76;
        arr['push'](ai * 0x2);
        var kumiVal;
        for (var j = i + 0x1; j < alist[_0x5aa1c0(0x0)]; j++) {
            kumiVal = ai + alist[j];
            arr[_0x5aa1c0(0x1)](kumiVal, kumiVal);
        }
        return arr;
    }, [])[_0xad7d82(0x2)]((a1, a2) => a2 - a1);
    var answer = 0x0;
    for (var i = 0x0; i < M; i++) {
        answer += kumiList[i];
    }
    console[_0xad7d82(0x3)](answer);
}
Main(require('fs')[a0_0x5d5ab0(0x4)]('/dev/stdin', 'utf8')[a0_0x5d5ab0(0x5)]()[a0_0x5d5ab0(0x6)]('\x0a')[a0_0x5d5ab0(0x7)](line => line[a0_0x5d5ab0(0x6)]('\x20')['map'](Number)));
function a0_0x2cae() {
    var _0x3b5ccd = [
        'length',
        'push',
        'sort',
        'log',
        'readFileSync',
        'trim',
        'split',
        'map'
    ];
    a0_0x2cae = function () {
        return _0x3b5ccd;
    };
    return a0_0x2cae();
}