var a0_0x5431d4 = a0_0x464d;
(function (stringArrayFunction, comparisonValue) {
    var _0x537313 = a0_0x464d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x537313(0xe0)) / 0x1 + parseInt(_0x537313(0xdd)) / 0x2 * (parseInt(_0x537313(0xe7)) / 0x3) + -parseInt(_0x537313(0xdc)) / 0x4 + -parseInt(_0x537313(0xde)) / 0x5 * (-parseInt(_0x537313(0xe4)) / 0x6) + parseInt(_0x537313(0xe3)) / 0x7 + -parseInt(_0x537313(0xe8)) / 0x8 * (parseInt(_0x537313(0xe9)) / 0x9) + parseInt(_0x537313(0xe2)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4da3, 0x5510e));
function main(input) {
    var _0x52dc7c = a0_0x464d;
    var tmp = input[_0x52dc7c(0xe5)](/\r\n|\r|\n/);
    var N = Number(tmp[0x0]);
    var S = tmp[0x1][_0x52dc7c(0xe5)]('');
    var res;
    var i = 0x0;
    var isYoko;
    if (S[i] == S[i + 0x1]) {
        res = 0x6;
        i = i + 0x2;
        isYoko = !![];
    } else {
        res = 0x3;
        i++;
        isYoko = ![];
    }
    for (; i < N - 0x1; i++) {
        if (S[i] == S[i + 0x1]) {
            if (isYoko) {
                res = res * 0x3;
            } else {
                res = res * 0x2;
            }
            i++;
            isYoko = !![];
        } else {
            if (!isYoko) {
                res = res * 0x2;
            }
            isYoko = ![];
        }
    }
    if (i < N) {
        if (!isYoko) {
            res = res * 0x2;
        }
    }
    console[_0x52dc7c(0xe6)](res % 0x3b9aca07);
}
function a0_0x464d(WYqbwo, key) {
    var stringArray = a0_0x4da3();
    a0_0x464d = function (index, key) {
        index = index - 0xdc;
        var value = stringArray[index];
        return value;
    };
    return a0_0x464d(WYqbwo, key);
}
function a0_0x4da3() {
    var _0x419529 = [
        'log',
        '279417xUseZT',
        '223192FlWtwB',
        '99PYYjvW',
        '2429432McmhIq',
        '8FuOnyu',
        '445ZFdYnT',
        'readFileSync',
        '590195SXUNpv',
        '/dev/stdin',
        '7355950nyQHTc',
        '1002190qoEfNe',
        '40554RSFJeU',
        'split'
    ];
    a0_0x4da3 = function () {
        return _0x419529;
    };
    return a0_0x4da3();
}
main(require('fs')[a0_0x5431d4(0xdf)](a0_0x5431d4(0xe1), 'utf8'));