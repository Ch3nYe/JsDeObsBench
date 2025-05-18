function Main(input) {
    var YTeyJD = {
        'gJsGj': function (x, y) {
            return x + y;
        },
        'xaFJR': function (x, y) {
            return x < y;
        }
    };
    const M = input[0x0][0x1];
    const alist = input[0x1];
    const kumiList = alist['reduce']((arr, ai, i) => {
        arr['push'](ai * 0x2);
        var kumiVal;
        for (var j = YTeyJD['gJsGj'](i, 0x1); j < alist['length']; j++) {
            kumiVal = ai + alist[j];
            arr['push'](kumiVal, kumiVal);
        }
        return arr;
    }, [])['sort']((a1, a2) => a2 - a1);
    var answer = 0x0;
    for (var i = 0x0; YTeyJD['xaFJR'](i, M); i++) {
        answer += kumiList[i];
    }
    console['log'](answer);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a')['map'](line => line['split']('\x20')['map'](Number)));