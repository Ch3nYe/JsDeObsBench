function a0_0x3ed5(zeIfLt, key) {
    var stringArray = a0_0x13c7();
    a0_0x3ed5 = function (index, key) {
        index = index - 0xd6;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3ed5(zeIfLt, key);
}
var a0_0x532dc9 = a0_0x3ed5;
(function (stringArrayFunction, comparisonValue) {
    var _0x24dfc3 = a0_0x3ed5;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x24dfc3(0xd6)) / 0x1 * (-parseInt(_0x24dfc3(0xd9)) / 0x2) + -parseInt(_0x24dfc3(0xe4)) / 0x3 * (-parseInt(_0x24dfc3(0xe6)) / 0x4) + parseInt(_0x24dfc3(0xdf)) / 0x5 + parseInt(_0x24dfc3(0xdb)) / 0x6 * (-parseInt(_0x24dfc3(0xda)) / 0x7) + parseInt(_0x24dfc3(0xe1)) / 0x8 + -parseInt(_0x24dfc3(0xe0)) / 0x9 * (parseInt(_0x24dfc3(0xe5)) / 0xa) + parseInt(_0x24dfc3(0xe3)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x13c7, 0xdbf4a));
var input = '';
function a0_0x13c7() {
    var _0x6093be = [
        '6229304LOPZop',
        'end',
        '25316500HnFRbD',
        '1384458Rdoozh',
        '20sMSdZs',
        '4YXmvZd',
        '49636AKUhCH',
        'length',
        'split',
        '18cDPiwP',
        '365540JMXQkJ',
        '126bRZdZV',
        'resume',
        'utf-8',
        'stdin',
        '1723045fqrQTH',
        '6488892mWIwnA'
    ];
    a0_0x13c7 = function () {
        return _0x6093be;
    };
    return a0_0x13c7();
}
var readable = process[a0_0x532dc9(0xde)];
readable[a0_0x532dc9(0xdc)]();
readable['setEncoding'](a0_0x532dc9(0xdd));
readable['on']('data', function (chunk) {
    input += chunk;
});
readable['on'](a0_0x532dc9(0xe2), function () {
    var _0x578eff = a0_0x532dc9;
    var data = input[_0x578eff(0xd8)]('\x0a');
    var n = data[0x0];
    var tscore = 0x0;
    var hscore = 0x0;
    for (var i = 0x1; i < data[_0x578eff(0xd7)]; i++) {
        var taha = data[i][_0x578eff(0xd8)]('\x20');
        if (taha[0x0] < taha[0x1]) {
            hscore += 0x3;
        } else if (taha[0x1] < taha[0x0]) {
            tscore += 0x3;
        } else {
            hscore += 0x1;
            tscore += 0x1;
        }
    }
    console['log'](tscore + '\x20' + hscore);
});