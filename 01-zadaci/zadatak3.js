//Napiši funkciju koja provjerava nalazi li se dani broj X unutar [100,150000] 
//Ispis : 53 -> “53 nije unutar [100,150000]”

function Funkcija(X) {
    if (X < 100 || X > 150000) {
      return "Broj " + X + " se ne nalazi unutar [100,150000].";
    } 
    else {
      return "Broj " + X + " se nalazi unutar [100,150000].";
    }
  }
  console.log(Funkcija(53)); 