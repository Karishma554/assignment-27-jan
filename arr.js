var sizeof = prompt("Enter the num of values to enter");
var arr1 = [];
var i = 0;
for(i = 0; i<sizeof; i++){
   var value = prompt("Enter the number to compare");
   arr1.push(value);
}
var maxnum = arr1[0];
for (i=0; i<sizeof; i++){
  if(arr1[i] > maxnum){
maxnum = arr1[i];
}
}
alert("the maxnum number is" +maxnum);