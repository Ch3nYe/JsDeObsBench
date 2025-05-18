function main (s) {
    var add=0;
    for(var i=0;i<3;i++){
        if(s[i]=='o'){
            add++;
        }
    }
    console.log(700+add*100);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));