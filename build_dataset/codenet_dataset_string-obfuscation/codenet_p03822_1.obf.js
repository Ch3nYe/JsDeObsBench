var a0_0x3aaa73 = a0_0x4a22;
function a0_0x4a22(EtSKSb, key) {
    var stringArray = a0_0x1ea2();
    a0_0x4a22 = function (index, key) {
        index = index - 0x1bb;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4a22(EtSKSb, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x22ff60 = a0_0x4a22;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x22ff60(0x1bf)) / 0x1 * (-parseInt(_0x22ff60(0x1c3)) / 0x2) + -parseInt(_0x22ff60(0x1c2)) / 0x3 + parseInt(_0x22ff60(0x1bb)) / 0x4 + -parseInt(_0x22ff60(0x1bc)) / 0x5 * (-parseInt(_0x22ff60(0x1c6)) / 0x6) + -parseInt(_0x22ff60(0x1c5)) / 0x7 + -parseInt(_0x22ff60(0x1c4)) / 0x8 + parseInt(_0x22ff60(0x1c0)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1ea2, 0x4573c));
var tmp = {};
function a0_0x1ea2() {
    var _0x741faf = [
        '472800dQvmXJ',
        '102766hRsHOT',
        '2875528ZBAbgz',
        '602504nDiWfR',
        '12eHXScy',
        '404388fjjpHP',
        '673345eBGZJM',
        'split',
        'log',
        '1UEuypG',
        '5116833IpTsiW',
        'readFileSync'
    ];
    a0_0x1ea2 = function () {
        return _0x741faf;
    };
    return a0_0x1ea2();
}
function main(chunk) {
    var _0x4d7a69 = a0_0x4a22;
    var lines = chunk[_0x4d7a69(0x1bd)]('\x0a');
    var n = Number(lines[0x0]);
    var map = {};
    for (var i = 0x2; i < n + 0x1; i++) {
        var a = Number(lines[i - 0x1]);
        if (map[a]) {
            map[a]['t']++;
            map[a]['p']['push'](i);
        } else {
            map[a] = {};
            map[a]['t'] = 0x1;
            map[a]['p'] = [i];
        }
    }
    console[_0x4d7a69(0x1be)](calc(map, 0x1) + 0x1);
}
function calc(map, n) {
    if (tmp[n]) {
        return tmp[n];
    }
    var ans = 0x0;
    for (var i in map[n]['p']) {
        var p = map[n]['p'][i];
        if (map[p]) {
            ans = Math['max'](ans, map[p]['t'] + calc(map, p));
        }
    }
    tmp[n] = ans;
    return ans;
}
main(require('fs')[a0_0x3aaa73(0x1c1)]('/dev/stdin', 'utf8'));