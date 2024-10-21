function vsota_pravih_deliteljev(n) {
    var vsota = 0;
    for (var i = 1; i < n; i++){
     if(n % i == 0){
          vsota += i;
     }
   }
   return vsota;
}
