(function (stringArrayFunction, comparisonValue) {
    var _0x5ee822 = a0_0x410c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5ee822(0x1dd)) / 0x1 + parseInt(_0x5ee822(0x1d6)) / 0x2 + -parseInt(_0x5ee822(0x1d2)) / 0x3 * (parseInt(_0x5ee822(0x1cf)) / 0x4) + parseInt(_0x5ee822(0x1d5)) / 0x5 * (parseInt(_0x5ee822(0x1ce)) / 0x6) + -parseInt(_0x5ee822(0x1d0)) / 0x7 + -parseInt(_0x5ee822(0x1d1)) / 0x8 + parseInt(_0x5ee822(0x1d4)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xaecd, 0xa7140));
(function () {
    var _0x25d868 = a0_0x410c;
    var max, max_log2, series, col, j, str, i, line, hw, even, odd;
    max = 0x12c;
    max_log2 = max[_0x25d868(0x1de)](0x2)[_0x25d868(0x1d9)] - 0x1;
    series = [
        0x1,
        0x2
    ];
    col = [
        '#',
        '#.'
    ];
    j = 0x2;
    str = '#.';
    for (i = 0x2; i <= max_log2; i++) {
        series[_0x25d868(0x1da)](j *= 0x2);
        col['push'](str = str + str);
    }
    series[_0x25d868(0x1da)](series[series[_0x25d868(0x1d9)] - 0x1] * 0x2);
    function get_column(w) {
        var _0xd1d5d6 = _0x25d868;
        var i, res;
        res = '';
        for (i = 0x1; i < series[_0xd1d5d6(0x1d9)]; i++) {
            if (w < series[i])
                break;
            if (w % series[i + 0x1] >= series[i])
                res = res + col[i];
        }
        if (w % 0x2 === 0x1)
            res = res + '#';
        return res;
    }
    line = require('fs')['readFileSync'](_0x25d868(0x1d3), _0x25d868(0x1cc))['split']('\x0a');
    for (i in line) {
        if (line[i] === _0x25d868(0x1d8))
            break;
        hw = line[i][_0x25d868(0x1cd)]('\x20')[_0x25d868(0x1d7)](Number);
        even = get_column(hw[0x1]);
        odd = even[_0x25d868(0x1db)](0x1) + (hw[0x1] % 0x2 === 0x0 ? '#' : '.');
        for (j = 0x0; j < hw[0x0]; j++) {
            if (j % 0x2 === 0x0)
                console['log'](even);
            else
                console[_0x25d868(0x1dc)](odd);
        }
        console[_0x25d868(0x1dc)]('');
    }
}());
function a0_0x410c(hAZbHI, key) {
    var stringArray = a0_0xaecd();
    a0_0x410c = function (index, key) {
        index = index - 0x1cc;
        var value = stringArray[index];
        return value;
    };
    return a0_0x410c(hAZbHI, key);
}
function a0_0xaecd() {
    var _0x18d1a5 = [
        '5nciGQm',
        '1650860BblotM',
        'map',
        '0\x200',
        'length',
        'push',
        'slice',
        'log',
        '164538cSZInj',
        'toString',
        'ascii',
        'split',
        '450888WawIqq',
        '26932eebpzd',
        '8232000BQpqIu',
        '6162760gMRSjI',
        '315ybWKhM',
        '/dev/stdin',
        '20452914XNRcZq'
    ];
    a0_0xaecd = function () {
        return _0x18d1a5;
    };
    return a0_0xaecd();
}