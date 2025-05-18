var a0_0x520388 = a0_0x31e6;
(function (stringArrayFunction, comparisonValue) {
    var _0xa814b2 = a0_0x31e6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xa814b2(0x196)) / 0x1 + -parseInt(_0xa814b2(0x198)) / 0x2 + parseInt(_0xa814b2(0x192)) / 0x3 * (-parseInt(_0xa814b2(0x187)) / 0x4) + parseInt(_0xa814b2(0x18a)) / 0x5 * (parseInt(_0xa814b2(0x18e)) / 0x6) + parseInt(_0xa814b2(0x190)) / 0x7 * (parseInt(_0xa814b2(0x197)) / 0x8) + parseInt(_0xa814b2(0x18d)) / 0x9 + -parseInt(_0xa814b2(0x185)) / 0xa * (-parseInt(_0xa814b2(0x18f)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2004, 0x4a00f));
function main() {
    var _0x56b5b5 = a0_0x31e6;
    input[_0x56b5b5(0x193)](function (line) {
        var _0x57f940 = _0x56b5b5;
        var a, b, c, p, x, y, z, i;
        if (line[_0x57f940(0x18c)]() === '')
            return;
        p = line['match'](/([0-9X]+)\+([0-9X]+)\=([0-9X]+)/);
        a = p[0x1];
        b = p[0x2];
        c = p[0x3];
        for (i = 0x0; i <= 0x9; i++) {
            if (i === 0x0 && (a[_0x57f940(0x18b)](0x0) === 'X' || b['charAt'](0x0) === 'X' || c['charAt'](0x0) === 'X'))
                continue;
            x = parseInt(a[_0x57f940(0x194)](/X/g, i), 0xa);
            y = parseInt(b[_0x57f940(0x194)](/X/g, i), 0xa);
            z = parseInt(c[_0x57f940(0x194)](/X/g, i), 0xa);
            if (x + y === z)
                break;
        }
        console['log'](i === 0xa ? 'NA' : i);
    });
}
var input = '';
function a0_0x31e6(iivwIy, key) {
    var stringArray = a0_0x2004();
    a0_0x31e6 = function (index, key) {
        index = index - 0x184;
        var value = stringArray[index];
        return value;
    };
    return a0_0x31e6(iivwIy, key);
}
process[a0_0x520388(0x188)][a0_0x520388(0x191)]();
function a0_0x2004() {
    var _0x372bff = [
        '2226469WMSqHD',
        'resume',
        '1914TAeOCx',
        'forEach',
        'replace',
        'end',
        '579981PxxSlX',
        '8ZhVxbj',
        '595954uxINce',
        'split',
        '82510oQDbep',
        'setEncoding',
        '2512yoLqNv',
        'stdin',
        'utf8',
        '615535INqjCB',
        'charAt',
        'trim',
        '2393649WitaTz',
        '6lnvMAF',
        '1166REDiko'
    ];
    a0_0x2004 = function () {
        return _0x372bff;
    };
    return a0_0x2004();
}
process[a0_0x520388(0x188)][a0_0x520388(0x186)](a0_0x520388(0x189));
process[a0_0x520388(0x188)]['on']('data', function (chunk) {
    input += chunk;
});
process[a0_0x520388(0x188)]['on'](a0_0x520388(0x195), function () {
    var _0x336718 = a0_0x520388;
    input = input[_0x336718(0x184)]('\x0a');
    main();
});