function main(input) {
    const cvcsqf = {
        'CQBrZ': function (callee, param1) {
            return callee(param1);
        },
        'aHXOb': function (x, y) {
            return x / y;
        }
    };
    const nums = input['trim']()['split'](/\s/)['map'](str => {
        return cvcsqf['CQBrZ'](Number, str);
    });
    console['log'](cvcsqf['aHXOb'](nums[0x0], nums[0x1])['toFixed'](0xa));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));