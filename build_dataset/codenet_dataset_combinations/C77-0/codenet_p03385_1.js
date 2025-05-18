function main(input) {
    
    var aa=input.indexOf("a");
    var bb=input.indexOf("b");
    var cc=input.indexOf("c");

  if(aa==-1 || bb==-1 || cc==-1){
  console.log("No");
  }else{
    console.log("Yes");
}
}
  main(require('fs').readFileSync('/dev/stdin', 'utf8'));