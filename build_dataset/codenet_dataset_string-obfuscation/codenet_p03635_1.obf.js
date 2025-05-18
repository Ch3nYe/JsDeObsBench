var a0_0x2f70a5 = a0_0x53a8;
(function (stringArrayFunction, comparisonValue) {
    var _0x1155c = a0_0x53a8;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1155c(0x10c)) / 0x1 + parseInt(_0x1155c(0x106)) / 0x2 * (-parseInt(_0x1155c(0x10a)) / 0x3) + parseInt(_0x1155c(0x112)) / 0x4 + parseInt(_0x1155c(0x10b)) / 0x5 * (parseInt(_0x1155c(0x10e)) / 0x6) + parseInt(_0x1155c(0x113)) / 0x7 * (parseInt(_0x1155c(0x107)) / 0x8) + parseInt(_0x1155c(0x108)) / 0x9 + -parseInt(_0x1155c(0x10d)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2730, 0x538f5));
function a0_0x53a8(TcnrFy, key) {
    var stringArray = a0_0x2730();
    a0_0x53a8 = function (index, key) {
        index = index - 0x106;
        var value = stringArray[index];
        return value;
    };
    return a0_0x53a8(TcnrFy, key);
}
function a0_0x2730() {
    var _0x5ee354 = [
        'log',
        '181238JJjKyi',
        '437320FvHImy',
        '4898502OJagpg',
        'split',
        '21SoEipf',
        '341145UsJoCO',
        '543605Uyekyi',
        '1306030EbfFwc',
        '30kXGVAd',
        'utf8',
        'readFileSync',
        '/dev/stdin',
        '1093576AXpFNX',
        '63yBLGhj'
    ];
    a0_0x2730 = function () {
        return _0x5ee354;
    };
    return a0_0x2730();
}
function Main(input) {
    var _0x333d25 = a0_0x53a8;
    input = input[_0x333d25(0x109)]('\x0a');
    var line = input[0x0][_0x333d25(0x109)]('\x20');
    var m = parseInt(line[0x0]);
    var n = parseInt(line[0x1]);
    var ans = (m - 0x1) * (n - 0x1);
    console[_0x333d25(0x114)](ans);
}
Main(require('fs')[a0_0x2f70a5(0x110)](a0_0x2f70a5(0x111), a0_0x2f70a5(0x10f)));