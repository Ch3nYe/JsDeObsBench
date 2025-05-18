function Main(inputs) {
    const rqAuGz = {
        'zKLRE': function (x, y) {
            return x % y;
        },
        'ONAgA': function (x, y) {
            return x / y;
        },
        'COCdC': function (x, y) {
            return x + y;
        },
        'ROBRb': function (x, y) {
            return x != y;
        },
        'bvtNy': function (callee, param1) {
            return callee(param1);
        },
        'MmDax': function (callee, param1) {
            return callee(param1);
        }
    };
    const inputline = inputs['split']('\x0a')['map'](x => parseInt(x, 0xa));
    const line = inputline[0x0];
    function base26(number) {
        let remainder26 = rqAuGz['zKLRE'](number, 0x1a);
        let division26 = Math['floor'](rqAuGz['ONAgA'](number, 0x1a));
        let output = remainder26 != 0x0 ? String['fromCharCode'](rqAuGz['COCdC'](0x40, remainder26)) : (--division26, 'Z');
        return output = rqAuGz['ROBRb'](division26, 0x0) ? rqAuGz['bvtNy'](base26, division26) + output : output;
    }
    console['log'](rqAuGz['MmDax'](base26, line)['toLowerCase']());
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));