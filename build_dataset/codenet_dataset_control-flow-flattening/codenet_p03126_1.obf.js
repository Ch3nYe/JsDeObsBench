function Main(input) {
    var iVODka = { 'lJHsb': '3|2|0|1|5|7|4|6' };
    var PByHcQ = iVODka['lJHsb']['split']('|');
    var NIrHTh = 0x0;
    while (!![]) {
        switch (PByHcQ[NIrHTh++]) {
        case '0':
            input['shift']();
            continue;
        case '1':
            var arr = new Array(0x23)['fill'](0x0);
            continue;
        case '2':
            var m = input[0x0]['split']('\x20')['map'](Number);
            continue;
        case '3':
            input = input['split']('\x0a');
            continue;
        case '4':
            arr['forEach'](function (val) {
                if (val == m[0x0])
                    ans++;
            });
            continue;
        case '5':
            input['forEach'](function (val) {
                var mem = val['split']('\x20')['map'](Number);
                mem['shift']();
                mem['forEach'](function (p) {
                    arr[p]++;
                });
            });
            continue;
        case '6':
            console['log'](ans);
            continue;
        case '7':
            var ans = 0x0;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());