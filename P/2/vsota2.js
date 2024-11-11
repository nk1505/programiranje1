function vsota(a, b) {
    if(b < a){
    var c = a;
    a = b;
    b = c;
  }

  var vs = 0;
    for(;a<=b; a++){
        vs += a;
  }
  return vs;
}
