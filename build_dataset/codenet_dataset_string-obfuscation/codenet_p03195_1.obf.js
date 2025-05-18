function a0_0xeb95(xtaNwh, key) {
    var stringArray = a0_0x3833();
    a0_0xeb95 = function (index, key) {
        index = index - 0xfe;
        var value = stringArray[index];
        return value;
    };
    return a0_0xeb95(xtaNwh, key);
}
var a0_0x592c7d = a0_0xeb95;
(function (stringArrayFunction, comparisonValue) {
    var _0x56072d = a0_0xeb95;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x56072d(0x106)) / 0x1 * (parseInt(_0x56072d(0x102)) / 0x2) + -parseInt(_0x56072d(0x101)) / 0x3 + parseInt(_0x56072d(0x10d)) / 0x4 + parseInt(_0x56072d(0x107)) / 0x5 + parseInt(_0x56072d(0x10c)) / 0x6 + -parseInt(_0x56072d(0x104)) / 0x7 + parseInt(_0x56072d(0x111)) / 0x8 * (parseInt(_0x56072d(0x110)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3833, 0xd6fb7));
function a0_0x3833() {
    var _0x1c15d0 = [
        '1420626LUkZeM',
        '2pOFhAr',
        'end',
        '9828959pkDiLC',
        'stdin',
        '42337GgewYU',
        '5858465lViDwE',
        'push',
        'log',
        'utf8',
        'resume',
        '866838dhcnYN',
        '5346028jdwQlX',
        'setEncoding',
        'split',
        '133119TiNDAk',
        '80CnlJhD',
        'length',
        'first',
        'data'
    ];
    a0_0x3833 = function () {
        return _0x1c15d0;
    };
    return a0_0x3833();
}
function main(input) {
    var _0x29f066 = a0_0xeb95;
    var line1 = parseInt(input[0x0]);
    var ans = ![];
    for (var i = 0x1; i < input[_0x29f066(0xfe)]; i++) {
        var n = parseInt(input[i]);
        if (n % 0x2 === 0x1)
            ans = !![];
        ;
    }
    console[_0x29f066(0x109)](ans ? _0x29f066(0xff) : 'second');
}
function parse(line) {
    var _0x56227a = a0_0xeb95;
    var ret = [];
    var arr = line[_0x56227a(0x10f)]('\x20');
    for (var i = 0x0; i < arr[_0x56227a(0xfe)]; i++) {
        ret[_0x56227a(0x108)](parseInt(arr[i]));
    }
    return ret;
}
var input = '';
process[a0_0x592c7d(0x105)][a0_0x592c7d(0x10b)]();
process[a0_0x592c7d(0x105)][a0_0x592c7d(0x10e)](a0_0x592c7d(0x10a));
process[a0_0x592c7d(0x105)]['on'](a0_0x592c7d(0x100), function (chunk) {
    input += chunk;
});
process[a0_0x592c7d(0x105)]['on'](a0_0x592c7d(0x103), function () {
    var _0x5319d9 = a0_0x592c7d;
    input = input[_0x5319d9(0x10f)]('\x0a');
    main(input);
});