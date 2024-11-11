function vsota(a, b) {
    if(b < a){
    return -1;
  }

  var vs = 0;
    for(;a<=b; a++){
        vs += a;
  }
  return vs;
}
