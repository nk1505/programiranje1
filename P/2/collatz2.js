function collatz(n) {
  var najvisja = 1;
  while(n != 1){
    if (najvisja < n){
      najvisja = n;
    }
    if(n % 2 == 0){
      n /= 2;
    } else {
      n = 3 * n + 1;
    }
  }
  return najvisja;
}
