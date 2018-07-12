// var gifts =['drone', 'Jordans', 'clothes', 'corgi', 'books','pomsky']
// function wrapGift(gifts) {
//   console.log(gifts+ "has been wrapped")
// }
// for (var counter = 0; counter < gifts.length; counter++){
//   var gift =gifts[counter]
//   wrapGift(gift)

function printBadges(array){
  for(var i = 0; i< array.length ; i++){
    console.log("Welcome " + array[i] + "! You are employee #" + (i+1)+ ".")
  }
  return array
}


function tailsNeverFails(){
  heads = false;
  tails = 0;
  while(heads === false){
    var num = Math.random()
    if(num >= 0.5){
      tails++
    }else{
      heads = true
    }
  }
  
  return "You got " + tails + " tails in a row!"
}
