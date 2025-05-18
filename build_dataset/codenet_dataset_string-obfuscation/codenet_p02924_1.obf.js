var a0_0x3c8b03 = a0_0x5c69;
(function (stringArrayFunction, comparisonValue) {
    var _0x1b18fd = a0_0x5c69;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1b18fd(0x1be)) / 0x1 * (-parseInt(_0x1b18fd(0x1bc)) / 0x2) + parseInt(_0x1b18fd(0x1bf)) / 0x3 + -parseInt(_0x1b18fd(0x1c5)) / 0x4 + parseInt(_0x1b18fd(0x1c6)) / 0x5 + -parseInt(_0x1b18fd(0x1c1)) / 0x6 * (-parseInt(_0x1b18fd(0x1c4)) / 0x7) + -parseInt(_0x1b18fd(0x1c2)) / 0x8 + -parseInt(_0x1b18fd(0x1bd)) / 0x9 * (parseInt(_0x1b18fd(0x1c3)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5b3a, 0x684e9));
function a0_0x5c69(mbkwnS, key) {
    var stringArray = a0_0x5b3a();
    a0_0x5c69 = function (index, key) {
        index = index - 0x1bb;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5c69(mbkwnS, key);
}
function a0_0x5b3a() {
    var _0x4996ed = [
        '10WoxlDo',
        '3239766bUeaas',
        '117323QOHZEw',
        '2505417nEeyrr',
        '/dev/stdin',
        '2554758NObZhj',
        '3298464eMVXQe',
        '20NiVxba',
        '7jknzMM',
        '1821316MDPHuH',
        '836395TiHdFp',
        'utf8'
    ];
    a0_0x5b3a = function () {
        return _0x4996ed;
    };
    return a0_0x5b3a();
}
function Main(input) {
    input = input['split']('\x0a');
    var n = parseInt(input[0x0], 0xa);
    var count = 0x0;
    if (n != 0x1) {
        for (var i = 0x1; i < n; i++) {
            count += i % (i + 0x1);
        }
    }
    console['log']('%s', count);
}
Main(require('fs')['readFileSync'](a0_0x3c8b03(0x1c0), a0_0x3c8b03(0x1bb)));