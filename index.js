function theBeatlesPlay(musicians, instruments){
  var array = new Array();
  var arrayLength = musicians.length;
  let i = 0;

  for (i; i < arrayLength; i++){
      array[i] = `${musicians[i]} plays ${instruments[i]}`;
    }

  return array;

}

function johnLennonFacts(facts){
  var array = new Array();
  var arrayLength = facts.length;
  let i = 0;

  while(i < arrayLength){
    array[i] = `${facts[i]}!!!`;
    i++
  }

  return array;
}
