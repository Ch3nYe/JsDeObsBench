var a0_0x280b9d = a0_0x112f;
(function (stringArrayFunction, comparisonValue) {
    var _0x5b97bf = a0_0x112f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5b97bf(0x1b8)) / 0x1 + -parseInt(_0x5b97bf(0x1c0)) / 0x2 * (parseInt(_0x5b97bf(0x1b3)) / 0x3) + parseInt(_0x5b97bf(0x1b6)) / 0x4 + -parseInt(_0x5b97bf(0x1b7)) / 0x5 * (-parseInt(_0x5b97bf(0x1b9)) / 0x6) + parseInt(_0x5b97bf(0x1bb)) / 0x7 + parseInt(_0x5b97bf(0x1b5)) / 0x8 * (-parseInt(_0x5b97bf(0x1ba)) / 0x9) + parseInt(_0x5b97bf(0x1b1)) / 0xa * (-parseInt(_0x5b97bf(0x1c2)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1456, 0x96662));
function prime(max) {
    var _0x25a970 = a0_0x112f;
    var arr = [];
    for (var i = 0x0; i <= max; i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math[_0x25a970(0x1bc)](Math[_0x25a970(0x1ae)](max));
    for (var i = 0x2; i <= sqrt; i++) {
        if (arr[i] == ![])
            continue;
        for (var j = i + i; j <= max; j += i) {
            arr[j] = ![];
        }
    }
    var result = [];
    for (var i = 0x0; i <= max; i++) {
        if (arr[i] !== ![])
            result['push'](arr[i]);
    }
    return result;
}
var p = prime(0x2710);
function a0_0x1456() {
    var _0x47b4ed = [
        '6oROJko',
        '8739SsiUrk',
        '7483525qQhcrR',
        'floor',
        '/dev/stdin',
        'some',
        'utf8',
        '4vgtbnF',
        'length',
        '14379959MFfesX',
        'sqrt',
        'map',
        'trim',
        '20uAOHBZ',
        'readFileSync',
        '283749YoMebT',
        'forEach',
        '72LGfrGE',
        '4013480ywGaLF',
        '1895945iVxhGA',
        '976843mwHjCW'
    ];
    a0_0x1456 = function () {
        return _0x47b4ed;
    };
    return a0_0x1456();
}
var input = require('fs')[a0_0x280b9d(0x1b2)](a0_0x280b9d(0x1bd), a0_0x280b9d(0x1bf));
var arr = input[a0_0x280b9d(0x1b0)]()['split']('\x0a')[a0_0x280b9d(0x1af)](Number);
var cnt = [];
for (var i = 0x0; i <= 0x2710; i++)
    cnt[i] = 0x0;
function a0_0x112f(HdwesK, key) {
    var stringArray = a0_0x1456();
    a0_0x112f = function (index, key) {
        index = index - 0x1ae;
        var value = stringArray[index];
        return value;
    };
    return a0_0x112f(HdwesK, key);
}
p[a0_0x280b9d(0x1b4)](function (v, index) {
    var _0x7a1a77 = a0_0x280b9d;
    cnt[v]++;
    for (var i = index + 0x1; i < p[_0x7a1a77(0x1c1)]; i++) {
        v += p[i];
        if (v > 0x2710)
            break;
        cnt[v]++;
    }
});
arr[a0_0x280b9d(0x1be)](function (v) {
    if (v == 0x0)
        return !![];
    console['log'](cnt[v]);
});