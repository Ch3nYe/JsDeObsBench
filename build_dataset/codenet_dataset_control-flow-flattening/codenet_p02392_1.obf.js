process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (x) {
    var opeWPq = { 'ngPnM': '1|2|0|4|3' };
    var WKtlRO = opeWPq['ngPnM']['split']('|');
    var UrHwbF = 0x0;
    while (!![]) {
        switch (WKtlRO[UrHwbF++]) {
        case '0':
            var b = args[0x1];
            continue;
        case '1':
            var args = x['split']('\x20')['map'](Number);
            continue;
        case '2':
            var a = args[0x0];
            continue;
        case '3':
            console['log']('%s', a < b && b < c ? 'Yes' : 'No');
            continue;
        case '4':
            var c = args[0x2];
            continue;
        }
        break;
    }
});