function main(lines) {
    const input = lines['split']('\x20');
    console['log'](input['join']()['slice'](0x0, 0x3));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));