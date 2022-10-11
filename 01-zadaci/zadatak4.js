//Napiši funkciju koja pretvara broj X u sate i minute
//Ispis : 120 -> “Ovo je 2 sata i 0 minuta”
function Funkcija(X) {
    var sat = Math.floor(X / 60);
    var minuta = X % 60;
    return sat + " h i "+ minuta + " min";
  }
  
  console.log(Funkcija(70));