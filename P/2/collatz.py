function collatz(n) {
  var ponovitve = 0;
  while(n != 1){
    if(n % 2 == 0){
      n /= 2;
    } else {
      n = 3 * n + 1;
    }
    ponovitve++;
  }
  return ponovitve;
}
