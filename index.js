function theBeatlesPlay(musicians, instruments){
var array = new Array();
var arrayLength = musicians.length;
let i = 0; 

for (i; i < arrayLength; i++){
  array[i] = `${musicians[i]} plays ${instruments[i]}`;
}

return array;
  
}