//Napiši funkciju koja prima dva objekta, te u slučaju da imaju iste kljućeve vraća true
//Ispis : {a:1,b:2,c:3}, {a:321,b:3,c:1} -> true
objekt1 = { a: 1, b: 2, c: 3 };
objekt2 = { a: 321, b: 3, c: 1 };

function IstiObjekti(objekt1, objekt2) {
  for (var o1 in objekt1) {
    for (var o2 in objekt2) {
      if (o1.a == o2.a || o1.b == o2.b || o3.c == o3.c) {
        return true;
      }
    }
  }
  return false;
}

IstiObjekti(objekt1, objekt2);