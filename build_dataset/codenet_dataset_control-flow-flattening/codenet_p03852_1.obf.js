function Main(input) {
    const sBUoYb = {
        'mAMql': 'aeiou',
        'Hzhry': 'consonant'
    };
    c = input;
    const vowel = sBUoYb['mAMql'];
    console['log'](vowel['indexOf'](c) !== -0x1 ? 'vowel' : sBUoYb['Hzhry']);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));