function main(_0x39357a) {
    const _0xad5fd1 = new Set(_0x39357a['split']('\x0a')[0x1]['split']('\x20'));
    const _0x1ba698 = [..._0xad5fd1]['length'] === 0x4 ? 'Four' : 'Three';
    console['log'](_0x1ba698);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));