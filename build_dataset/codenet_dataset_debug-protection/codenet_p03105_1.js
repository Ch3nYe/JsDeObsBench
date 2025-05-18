const main = input =>{
    const In = input.split(' ').map(n=>Number(n));
    const o1 = In[0] > In[1] ? 0 : In[1]/In[0];
    console.log(o1 >= In[2] ? In[2] : o1);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
