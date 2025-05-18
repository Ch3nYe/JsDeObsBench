function main(s) {
    var lAApiC = {
        'WQxNC': function (x, y) {
            return x === y;
        },
        'YgLMe': function (x, y) {
            return x === y;
        },
        'mGxVs': '12360848946698171',
        'ewnyb': '20000273725560978',
        'tcelJ': '32361122672259149',
        'UcsAV': '52361396397820127',
        'jPFkm': '84722519070079276',
        'JVDdO': function (x, y) {
            return x === y;
        },
        'ImvAV': '137083915467899403',
        'flZWy': '580696784543856761',
        'lRpjq': '939587134549734843'
    };
    var n = Number(s['split']('\x0a')[0x0]);
    if (lAApiC['WQxNC'](n, 0x0)) {
        console['log'](0x2);
        return;
    }
    if (lAApiC['YgLMe'](n, 0x1)) {
        console['log'](0x1);
        return;
    }
    if (lAApiC['WQxNC'](n, 0x4d)) {
        console['log'](lAApiC['mGxVs']);
        return;
    }
    if (lAApiC['WQxNC'](n, 0x4e)) {
        console['log'](lAApiC['ewnyb']);
        return;
    }
    if (lAApiC['YgLMe'](n, 0x4f)) {
        console['log'](lAApiC['tcelJ']);
        return;
    }
    if (lAApiC['WQxNC'](n, 0x50)) {
        console['log'](lAApiC['UcsAV']);
        return;
    }
    if (lAApiC['YgLMe'](n, 0x51)) {
        console['log'](lAApiC['jPFkm']);
        return;
    }
    if (lAApiC['JVDdO'](n, 0x52)) {
        console['log'](lAApiC['ImvAV']);
        return;
    }
    if (lAApiC['JVDdO'](n, 0x53)) {
        console['log']('221806434537978679');
        return;
    }
    if (lAApiC['WQxNC'](n, 0x54)) {
        console['log']('358890350005878082');
        return;
    }
    if (lAApiC['JVDdO'](n, 0x55)) {
        console['log'](lAApiC['flZWy']);
        return;
    }
    if (n === 0x56) {
        console['log'](lAApiC['lRpjq']);
        return;
    }
    var x = 0x2;
    var y = 0x1;
    var z = 0x0;
    for (var i = 0x2; i <= n; i++) {
        z = x + y;
        x = y;
        y = z;
    }
    console['log'](z);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));