function main(input) {
    var sVqidz = { 'ZuLuY': '1|2|0|5|4|3' };
    var DmGgRC = sVqidz['ZuLuY']['split']('|');
    var scCbFV = 0x0;
    while (!![]) {
        switch (DmGgRC[scCbFV++]) {
        case '0':
            var t = lines[0x1]['split']('');
            continue;
        case '1':
            var lines = input['split']('\x0a');
            continue;
        case '2':
            var s = lines[0x0]['split']('');
            continue;
        case '3':
            s < t ? console['log']('Yes') : console['log']('No');
            continue;
        case '4':
            t = t['sort']()['reverse']()['join']();
            continue;
        case '5':
            s = s['sort']()['join']();
            continue;
        }
        break;
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8'));