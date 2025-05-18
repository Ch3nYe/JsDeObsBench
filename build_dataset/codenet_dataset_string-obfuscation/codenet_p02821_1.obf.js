function a0_0x4bfc(QehyHo, key) {
    var stringArray = a0_0xc60e();
    a0_0x4bfc = function (index, key) {
        index = index - 0x8c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4bfc(QehyHo, key);
}
function a0_0xc60e() {
    var _0x432b4a = [
        '174700fyLYQx',
        'length',
        'map',
        '500076tqvCSC',
        '2484608AjWIKz',
        'sort',
        '116004Dadmbs',
        'push',
        '/dev/stdin',
        '6375btgrlP',
        'utf8',
        '679470xZTSrV',
        '756Rzbcjz',
        'reduce',
        '271380JwAgtm',
        'readFileSync',
        '36hJFdgo',
        '342fopPdV',
        'trim'
    ];
    a0_0xc60e = function () {
        return _0x432b4a;
    };
    return a0_0xc60e();
}
var a0_0x33f3c3 = a0_0x4bfc;
(function (stringArrayFunction, comparisonValue) {
    var _0x1fd88b = a0_0x4bfc;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1fd88b(0x92)) / 0x1 + -parseInt(_0x1fd88b(0x9a)) / 0x2 + parseInt(_0x1fd88b(0x98)) / 0x3 * (parseInt(_0x1fd88b(0x9b)) / 0x4) + -parseInt(_0x1fd88b(0x9d)) / 0x5 * (-parseInt(_0x1fd88b(0x8c)) / 0x6) + parseInt(_0x1fd88b(0x95)) / 0x7 + -parseInt(_0x1fd88b(0x93)) / 0x8 + parseInt(_0x1fd88b(0x8d)) / 0x9 * (parseInt(_0x1fd88b(0x8f)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xc60e, 0x3ed2e));
function Main(input) {
    var _0xe1217c = a0_0x4bfc;
    const M = input[0x0][0x1];
    const alist = input[0x1];
    const kumiList = alist[_0xe1217c(0x9c)]((arr, ai, i) => {
        var _0x50fa8c = _0xe1217c;
        arr[_0x50fa8c(0x96)](ai * 0x2);
        var kumiVal;
        for (var j = i + 0x1; j < alist[_0x50fa8c(0x90)]; j++) {
            kumiVal = ai + alist[j];
            arr['push'](kumiVal, kumiVal);
        }
        return arr;
    }, [])[_0xe1217c(0x94)]((a1, a2) => a2 - a1);
    var answer = 0x0;
    for (var i = 0x0; i < M; i++) {
        answer += kumiList[i];
    }
    console['log'](answer);
}
Main(require('fs')[a0_0x33f3c3(0x9e)](a0_0x33f3c3(0x97), a0_0x33f3c3(0x99))[a0_0x33f3c3(0x8e)]()['split']('\x0a')[a0_0x33f3c3(0x91)](line => line['split']('\x20')[a0_0x33f3c3(0x91)](Number)));