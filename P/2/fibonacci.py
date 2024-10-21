function fibonacci(n) {
    if(n < 1){
    return -1;
  }
    var a = 1;
  var b = 0;
  var c = 0;
  for(var i = 1; i < n; i++){
    c = a + b;
        b = a;
        a = c;
  }
  return a;
}
