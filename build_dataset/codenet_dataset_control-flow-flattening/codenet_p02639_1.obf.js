function main(input) {
    const idx = input['trim']()['split']('\x20')['map'](el => parseInt(el, 0xa))['findIndex'](el => el === 0x0);
    console['log'](idx + 0x1);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));