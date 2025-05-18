function main(input) {
  input=input.trim();
  var arr = input.split("").map((n) => (n));
  var ans = 0

  if(arr[0]=="A"){
    ans++
  }

  var temp=0;
  var memo=0;
  for(var i=2; i<arr.length-1; i++){
    if(arr[i]=="C"){
      temp++;
      memo=i
    }
  }
  if(temp==1){
    ans++
  }

  if(ans==2){
    arr.splice(0,1);
    arr.splice(memo-1,1);
    if(/A-Z/.test(arr)==false){
      ans++
    }
    if(ans==3){
      console.log("AC");
    }else{
      console.log("WA");
    }
  }else{
    console.log("WA");
  }
 

  

}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

