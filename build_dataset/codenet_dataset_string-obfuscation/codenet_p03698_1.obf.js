var a0_0x430287 = a0_0x5933;
function a0_0x1f93() {
    var _0x5c1f0d = [
        'split',
        '13TAIyWq',
        '5290NHnNsS',
        '33513gzxyDw',
        '/dev/stdin',
        '5886BMdQGv',
        'indexOf',
        'readFileSync',
        'log',
        '24189yJvaWC',
        '7305468ctMSNV',
        '38xlTkWU',
        '699408KqqPoI',
        '2579344NsTTIZ',
        'utf8',
        '4835Pmlnpa',
        '1444804wVgHHT',
        '3MKKpiD',
        'length',
        '7DsToQl'
    ];
    a0_0x1f93 = function () {
        return _0x5c1f0d;
    };
    return a0_0x1f93();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x349bd4 = a0_0x5933;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x349bd4(0x178)) / 0x1 * (parseInt(_0x349bd4(0x16c)) / 0x2) + parseInt(_0x349bd4(0x172)) / 0x3 * (-parseInt(_0x349bd4(0x171)) / 0x4) + parseInt(_0x349bd4(0x170)) / 0x5 * (parseInt(_0x349bd4(0x17a)) / 0x6) + parseInt(_0x349bd4(0x174)) / 0x7 * (parseInt(_0x349bd4(0x16e)) / 0x8) + -parseInt(_0x349bd4(0x16d)) / 0x9 + -parseInt(_0x349bd4(0x177)) / 0xa * (-parseInt(_0x349bd4(0x17e)) / 0xb) + -parseInt(_0x349bd4(0x17f)) / 0xc * (parseInt(_0x349bd4(0x176)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1f93, 0xb712b));
function main(data) {
    var _0x22b487 = a0_0x5933;
    input = data[_0x22b487(0x175)]('');
    len = input[_0x22b487(0x173)];
    temp = [];
    for (i = 0x0; i < len; i += 0x1) {
        if (temp[_0x22b487(0x17b)](input[i]) === -0x1) {
            temp['push'](input[i]);
        } else {
            console[_0x22b487(0x17d)]('no');
            return;
        }
    }
    console['log']('yes');
}
function a0_0x5933(WHpFUB, key) {
    var stringArray = a0_0x1f93();
    a0_0x5933 = function (index, key) {
        index = index - 0x16c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5933(WHpFUB, key);
}
main(require('fs')[a0_0x430287(0x17c)](a0_0x430287(0x179), a0_0x430287(0x16f)));