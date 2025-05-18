function Main(input) {
    var UNNJrh = {
        'mbWXX': '2|4|3|0|1|5|6',
        'NPtXt': function (callee, param1) {
            return callee(param1);
        },
        'FXcjb': '1|4|0|5|2|3',
        'jfrFR': function (callee, param1) {
            return callee(param1);
        },
        'FuYBI': function (x, y) {
            return x !== y;
        },
        'pxTny': function (x, y) {
            return x + y;
        },
        'AZGeM': function (x, y) {
            return x + y;
        }
    };
    var aoyfmC = UNNJrh['mbWXX']['split']('|');
    var qwyFjw = 0x0;
    while (!![]) {
        switch (aoyfmC[qwyFjw++]) {
        case '0':
            var ans = 0x0;
            continue;
        case '1':
            var x1, x2, x3, xTmp, x1i, x2i, x3i, sTmp;
            continue;
        case '2':
            input = input['trim']()['split']('\x0a');
            continue;
        case '3':
            var SasStr = input[0x1];
            continue;
        case '4':
            var N = UNNJrh['NPtXt'](parseInt, input[0x0]);
            continue;
        case '5':
            for (var i = 0x3e8; i < 0x7d0; i++) {
                var KKzRiQ = UNNJrh['FXcjb']['split']('|');
                var yowUpQ = 0x0;
                while (!![]) {
                    switch (KKzRiQ[yowUpQ++]) {
                    case '0':
                        x2 = xTmp['substr'](0x2, 0x1);
                        continue;
                    case '1':
                        xTmp = UNNJrh['jfrFR'](String, i);
                        continue;
                    case '2':
                        x1i = SasStr['indexOf'](x1);
                        continue;
                    case '3':
                        if (UNNJrh['FuYBI'](x1i, -0x1)) {
                            sTmp = SasStr['substr'](UNNJrh['pxTny'](x1i, 0x1));
                            x2i = sTmp['indexOf'](x2);
                            if (UNNJrh['FuYBI'](x2i, -0x1)) {
                                sTmp = sTmp['substr'](UNNJrh['AZGeM'](x2i, 0x1));
                                x3i = sTmp['indexOf'](x3);
                                if (x3i !== -0x1) {
                                    ans++;
                                }
                            }
                        }
                        continue;
                    case '4':
                        x1 = xTmp['substr'](0x1, 0x1);
                        continue;
                    case '5':
                        x3 = xTmp['substr'](0x3, 0x1);
                        continue;
                    }
                    break;
                }
            }
            continue;
        case '6':
            console['log'](ans);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));