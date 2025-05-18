'use strict';
const Main = input => {
    const tSoYyp = {
        'gagmv': function (x, y) {
            return x - y;
        }
    };
    let tmp = input['split']('\x0a');
    let Num = tmp[0x0]['split']('\x20')['map'](Number)[0x0];
    let Kji = tmp[0x0]['split']('\x20')['map'](Number)[0x1];
    let Str = tmp[0x1]['trim']();
    let Change = Str[tSoYyp['gagmv'](Kji, 0x1)];
    switch (Change) {
    case 'A':
        Change = 'a';
        break;
    case 'B':
        Change = 'b';
        break;
    case 'C':
        Change = 'c';
        break;
    }
    let StrArr = Str['split']('');
    StrArr[Kji - 0x1] = Change;
    Str = StrArr['join']('');
    console['log'](Str);
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));