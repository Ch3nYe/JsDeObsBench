function a0_0x4d91(UnGZiH, key) {
    var stringArray = a0_0xf5b0();
    a0_0x4d91 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4d91(UnGZiH, key);
}
function a0_0xf5b0() {
    var _0x4ba129 = [
        'toString',
        'length',
        'push',
        '/dev/stdin',
        'ascii',
        '0\x200',
        'split',
        'slice',
        'log'
    ];
    a0_0xf5b0 = function () {
        return _0x4ba129;
    };
    return a0_0xf5b0();
}
(function () {
    var _0x2e40ec = a0_0x4d91;
    var max, max_log2, series, col, j, str, i, line, hw, even, odd;
    max = 0x12c;
    max_log2 = max[_0x2e40ec(0x0)](0x2)[_0x2e40ec(0x1)] - 0x1;
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
        series[_0x2e40ec(0x2)](j *= 0x2);
        col[_0x2e40ec(0x2)](str = str + str);
    }
    series[_0x2e40ec(0x2)](series[series[_0x2e40ec(0x1)] - 0x1] * 0x2);
    function get_column(w) {
        var i, res;
        res = '';
        for (i = 0x1; i < series['length']; i++) {
            if (w < series[i])
                break;
            if (w % series[i + 0x1] >= series[i])
                res = res + col[i];
        }
        if (w % 0x2 === 0x1)
            res = res + '#';
        return res;
    }
    line = require('fs')['readFileSync'](_0x2e40ec(0x3), _0x2e40ec(0x4))['split']('\x0a');
    for (i in line) {
        if (line[i] === _0x2e40ec(0x5))
            break;
        hw = line[i][_0x2e40ec(0x6)]('\x20')['map'](Number);
        even = get_column(hw[0x1]);
        odd = even[_0x2e40ec(0x7)](0x1) + (hw[0x1] % 0x2 === 0x0 ? '#' : '.');
        for (j = 0x0; j < hw[0x0]; j++) {
            if (j % 0x2 === 0x0)
                console[_0x2e40ec(0x8)](even);
            else
                console[_0x2e40ec(0x8)](odd);
        }
        console['log']('');
    }
}());