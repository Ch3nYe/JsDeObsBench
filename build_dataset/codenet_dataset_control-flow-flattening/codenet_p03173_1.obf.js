'use strict';
(function (input) {
    const cxMgCd = {
        'kzwvD': function (x, y) {
            return x > y;
        },
        'XvRtV': function (x, y) {
            return x + y;
        }
    };
    input = input['trim']()['split'](/\s+/)['map'](x => x - 0x0);
    const N = input['shift']();
    const a = input;
    var ans = 0x0;
    while (cxMgCd['kzwvD'](a['length'], 0x1)) {
        let x = a['splice'](a['indexOf'](Math['min']['apply'](null, a)), 0x1)[0x0];
        let y = a['splice'](a['indexOf'](Math['min']['apply'](null, a)), 0x1)[0x0];
        a['push'](cxMgCd['XvRtV'](x, y));
        ans += cxMgCd['XvRtV'](x, y);
    }
    console['log'](ans);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));