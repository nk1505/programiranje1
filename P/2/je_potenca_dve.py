function je_potenca_dve(n) {
 for (var i = 0; 2**i <= n; i++){
        if(2**i == n){
            return true;
        }
    }
   return false;
}
