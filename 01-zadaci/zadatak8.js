//Napiši funkciju koja vraća predano polje obrnutim redosljedom
//Ispis : [3,4,5,6] -> [6,5,4,3]
normalno_polje = [3,4,5,6];
obrnuto_polje = [];
function ObrnutiRedoslijed(normalno_polje) {
  for (let i of normalno_polje) {
    obrnuto_polje.unshift(i);
  }
  for (let j of obrnuto_polje) {
    console.log(j);
  }
}
ObrnutiRedoslijed(normalno_polje);