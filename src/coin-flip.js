export default function randomNumber(n) {
  /*
    Your implementation, using the flip() function
  */
 var nInt = parseInt(n,10);
 //edge case handle
 if(nInt<1 || nInt>=1000000){
     throw new Error ("n is out of range, n must be greater than 0 and less than 1000000");
 }
  
  var bin = nInt.toString(2);
  var newRand = 0;
  for(var i=1; i<=bin.length;i++){
      newRand = newRand << 1;
      newRand = newRand | Number(flip());
      newRand = newRand <<bin.length-i;
      if(newRand>=nInt){
          //this is how I handle the number generated being greter than n, replace last bit with a 0 so it will be lesser
          newRand = newRand >>(bin.length-i)+1; 
          newRand = newRand <<1;
      }
      else{
          newRand = newRand >>(bin.length-i);
      }
      
  }
  
  return newRand;
}

function flip() {
  return Math.random() >= 0.5;
}