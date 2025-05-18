var a0_0x1df96c = a0_0x7e42;
(function (stringArrayFunction, comparisonValue) {
    var _0x20edcb = a0_0x7e42;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x20edcb(0x1b7)) / 0x1 * (parseInt(_0x20edcb(0x1c3)) / 0x2) + -parseInt(_0x20edcb(0x1bb)) / 0x3 + -parseInt(_0x20edcb(0x1c1)) / 0x4 + -parseInt(_0x20edcb(0x1b1)) / 0x5 * (-parseInt(_0x20edcb(0x1b9)) / 0x6) + parseInt(_0x20edcb(0x1b4)) / 0x7 * (-parseInt(_0x20edcb(0x1be)) / 0x8) + -parseInt(_0x20edcb(0x1b3)) / 0x9 * (parseInt(_0x20edcb(0x1c2)) / 0xa) + -parseInt(_0x20edcb(0x1ba)) / 0xb * (-parseInt(_0x20edcb(0x1b2)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x23b9, 0x7d3a5));
function a0_0x7e42(Gmwdjy, key) {
    var stringArray = a0_0x23b9();
    a0_0x7e42 = function (index, key) {
        index = index - 0x1b1;
        var value = stringArray[index];
        return value;
    };
    return a0_0x7e42(Gmwdjy, key);
}
function Main(input) {
    var _0x2176f7 = a0_0x7e42;
    input = input[_0x2176f7(0x1bc)]('\x0a');
    T = input[0x0];
    var len = T[_0x2176f7(0x1b6)];
    var p = len % 0x2;
    q = Math[_0x2176f7(0x1bd)](len / 0x2);
    cnt = 0x0;
    i = 0x0;
    for (i = 0x0; i < q; i++) {
        if (T[_0x2176f7(0x1b8)](i, 0x1) == T['substr'](len - 0x1 - i, 0x1)) {
            cnt = cnt + 0x0;
        } else {
            cnt++;
        }
    }
    console[_0x2176f7(0x1c0)](cnt);
}
Main(require('fs')[a0_0x1df96c(0x1b5)]('/dev/stdin', a0_0x1df96c(0x1bf)));
function a0_0x23b9() {
    var _0x4d6795 = [
        '58188PPeVRi',
        '1997010sNZNjz',
        '2096675ujGOhc',
        'readFileSync',
        'length',
        '10axyVxq',
        'substr',
        '1532484mhZvRK',
        '2783QYYOoJ',
        '1500003QEuiUn',
        'split',
        'floor',
        '16MDdrDf',
        'utf8',
        'log',
        '4063716FwvRPK',
        '20cTqeNZ',
        '164648nnhTix',
        '20SQtxEH'
    ];
    a0_0x23b9 = function () {
        return _0x4d6795;
    };
    return a0_0x23b9();
}