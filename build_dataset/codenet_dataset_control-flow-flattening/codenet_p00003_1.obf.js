process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    var amIKFv = {
        'DEsOU': function (x, y) {
            return x > y;
        },
        'IyKbx': function (x, y) {
            return x < y;
        },
        'RpxER': '7|6|0|2|5|3|1|4',
        'LpVjo': function (x, y) {
            return x * y;
        },
        'uSpeG': function (x, y) {
            return x === y;
        }
    };
    var JPrFHF = '0|1|4|2|3'['split']('|');
    var xpEnkO = 0x0;
    while (!![]) {
        switch (JPrFHF[xpEnkO++]) {
        case '0':
            var ibIvzm = {
                'DvZDe': function (x, y) {
                    return amIKFv['DEsOU'](x, y);
                },
                'zuBov': function (x, y) {
                    return amIKFv['IyKbx'](x, y);
                }
            };
            continue;
        case '1':
            var aaa = chunk['toString']();
            continue;
        case '2':
            line['shift']();
            continue;
        case '3':
            for (var i in line) {
                var nuFwVu = amIKFv['RpxER']['split']('|');
                var JpFozu = 0x0;
                while (!![]) {
                    switch (nuFwVu[JpFozu++]) {
                    case '0':
                        l['sort'](function (a, b) {
                            if (ibIvzm['DvZDe'](a, b))
                                return -0x1;
                            if (ibIvzm['zuBov'](a, b))
                                return 0x1;
                            return 0x0;
                        });
                        continue;
                    case '1':
                        var num4 = num2 + num3;
                        continue;
                    case '2':
                        var num1 = amIKFv['LpVjo'](new Number(l[0x0]), new Number(l[0x0]));
                        continue;
                    case '3':
                        var num3 = new Number(l[0x2]) * new Number(l[0x2]);
                        continue;
                    case '4':
                        if (amIKFv['uSpeG'](num1, num4)) {
                            console['log']('YES');
                        } else {
                            console['log']('NO');
                        }
                        continue;
                    case '5':
                        var num2 = new Number(l[0x1]) * new Number(l[0x1]);
                        continue;
                    case '6':
                        for (var i in l) {
                            l[i] = new Number(l[i]);
                        }
                        continue;
                    case '7':
                        var l = line[i]['split']('\x20');
                        continue;
                    }
                    break;
                }
            }
            continue;
        case '4':
            var line = aaa['split']('\x0a');
            continue;
        }
        break;
    }
});