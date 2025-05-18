function main(_0x6e1df2) {
    const _0x2498a1 = _0x6e1df2['trim']()['split'](/\s/)['map'](_0x1295d4 => {
        return Number(_0x1295d4);
    });
    console['log']((_0x2498a1[0x0] / _0x2498a1[0x1])['toFixed'](0xa));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));