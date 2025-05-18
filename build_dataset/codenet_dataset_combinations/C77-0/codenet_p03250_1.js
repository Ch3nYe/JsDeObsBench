
function main(input){
    abc=input.split(' ');
    abc=abc.sort()
    a=''
    a+=abc[2]
    a+=abc[1]
    a=parseInt(a,10)
    b=parseInt(abc[0],10)
    console.log(a+b)
    


}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));