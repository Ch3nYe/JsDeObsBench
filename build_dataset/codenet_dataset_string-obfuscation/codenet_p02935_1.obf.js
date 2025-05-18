function a0_0x5c40(CgwwPP, key) {
    var stringArray = a0_0x416c();
    a0_0x5c40 = function (index, key) {
        index = index - 0x18b;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5c40(CgwwPP, key);
}
var a0_0x32f487 = a0_0x5c40;
function a0_0x416c() {
    var _0x702f38 = [
        '174GQEGWQ',
        '2515945otnfsK',
        'line',
        'split',
        '18101MBAlHq',
        'stdin',
        '1253334oDxwsz',
        '8oNSZRU',
        'utf8',
        'stdout',
        'setEncoding',
        'push',
        'resume',
        'log',
        'createInterface',
        '5544098GCHhMG',
        'splice',
        '16caLiRQ',
        '469172mHKYwp',
        'length',
        'map',
        'sort',
        '2510508UNJMtw',
        '290wqNYfZ',
        '13152339TjxWyL'
    ];
    a0_0x416c = function () {
        return _0x702f38;
    };
    return a0_0x416c();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x23794c = a0_0x5c40;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x23794c(0x1a3)) / 0x1 * (parseInt(_0x23794c(0x19f)) / 0x2) + -parseInt(_0x23794c(0x18c)) / 0x3 + parseInt(_0x23794c(0x18d)) / 0x4 * (-parseInt(_0x23794c(0x1a0)) / 0x5) + -parseInt(_0x23794c(0x19c)) / 0x6 + parseInt(_0x23794c(0x195)) / 0x7 * (parseInt(_0x23794c(0x197)) / 0x8) + parseInt(_0x23794c(0x19e)) / 0x9 + parseInt(_0x23794c(0x19d)) / 0xa * (parseInt(_0x23794c(0x198)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x416c, 0xd32b2));
process[a0_0x32f487(0x18b)][a0_0x32f487(0x192)]();
process[a0_0x32f487(0x18b)][a0_0x32f487(0x190)](a0_0x32f487(0x18e));
var lines = [];
var reader = require('readline')[a0_0x32f487(0x194)]({
    'input': process[a0_0x32f487(0x18b)],
    'output': process[a0_0x32f487(0x18f)]
});
reader['on'](a0_0x32f487(0x1a1), line => {
    var _0x2696a7 = a0_0x32f487;
    lines[_0x2696a7(0x191)](line);
});
reader['on']('close', () => {
    var _0x59f30d = a0_0x32f487;
    var n = Number(lines[0x0]);
    var v = lines[0x1][_0x59f30d(0x1a2)]('\x20');
    v = v[_0x59f30d(0x19a)](function (str) {
        return Number(str);
    });
    for (i = 0x0; i < n - 0x1; i++) {
        var min1 = v[_0x59f30d(0x19b)]((a, b) => a - b)[0x0];
        v[_0x59f30d(0x196)](0x0, 0x1);
        var min2 = v[0x0];
        v[_0x59f30d(0x196)](0x0, 0x1);
        var a = (min1 + min2) / 0x2;
        if (v[_0x59f30d(0x199)] == 0x0) {
            break;
        }
        v[_0x59f30d(0x191)](a);
    }
    console[_0x59f30d(0x193)](a);
});