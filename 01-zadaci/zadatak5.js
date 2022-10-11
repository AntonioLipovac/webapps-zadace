//Napiši funkciju kojoj se predaje polje brojeva, te ona ispisuje brojeve djeljive s 3
//Ispis : [1,2,3,4,5,6,7,8,9,10] -> “Brojevi djeljivi s 3: 3,6,9”

var polje =  [1,2,3,4,5,6,7,8,9,10] ;
function djeljivost_s_3() {
  for (let i of polje) {
    if (i % 3 == 0) {
      console.log("Broj " + i + " nalazi se u polju i djeljiv je s brojem 3.");
    }
  }
}
djeljivost_s_3();