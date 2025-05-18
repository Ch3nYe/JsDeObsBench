function Main(input){
  var ary = [];
  for(var i=0;i<input.split("\n")[0].split(" ")[0];i++){
  	ary.push(1);
  }
  var str = input.split("\n")[1];
  for(var i=2;i<input.split("\n").length;i++){
  	var jumon = input.split("\n")[i].split(" ");
    var newAry = [];
    for(var j=0;j<ary.length;j++){
        newAry.push(0);
    }
    if(jumon[1]=="L"){
      for(var j=0;j<str.length;j++){
        if(j!=0||str[j]!=jumon[0])newAry[str[j]==jumon[0]?j-1:j]+=ary[j];
      }
    }else{
      for(var j=0;j<str.length;j++){
        if(j!=ary.length-1||str[j]!=jumon[0])newAry[str[j]==jumon[0]?j+1:j]+=ary[j];
      }
    }
    ary=newAry.concat();
  }
  var golems = 0;
  for(var i of ary)golems+=i;
  console.log(golems);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));