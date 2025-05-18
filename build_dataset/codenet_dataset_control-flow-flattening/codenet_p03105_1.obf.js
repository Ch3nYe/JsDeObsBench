const main = input => {
    const WJgxZx = {
        'jACJd': function (x, y) {
            return x > y;
        },
        'OUVcs': function (x, y) {
            return x / y;
        },
        'wIHvK': function (x, y) {
            return x >= y;
        }
    };
    const In = input['split']('\x20')['map'](n => Number(n));
    const o1 = WJgxZx['jACJd'](In[0x0], In[0x1]) ? 0x0 : WJgxZx['OUVcs'](In[0x1], In[0x0]);
    console['log'](WJgxZx['wIHvK'](o1, In[0x2]) ? In[0x2] : o1);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));