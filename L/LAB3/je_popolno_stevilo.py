function  je_popolno_stevilo(n) {
    var vsota = 0;
    for (var i = 1; i < n; i++){
        if(n % i == 0){
            vsota += i;
        }
   }
   if (vsota == n){
        return true;
   }
   return false;
}
