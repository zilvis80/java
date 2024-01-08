let ticket = 28;

switch (ticket) {
  case 1:
    console.log('vartotojas laimejo vandens');
    break;
  case 2:
    console.log('vartototjas laimejo limonada');
    break;
  case 3:
    console.log('vartototjas laimejo arbata');
    break;
  case 4:
    console.log('vartototjas laimejo kava');
    break;

  default:
    console.log('nera tokio bilieto');
    break;
}

let a = 3;
let b = 5;
let c = 8;
let rezultatas = 0;
switch (a) {
  case 1:
    rezultatas = a + b + c;
    console.log(rezultatas);
    break;
  case 2:
    rezultatas = b * c;
    console.log(rezultatas);
    break;
  case 3:
    rezultatas = a * a;
    console.log(rezultatas);
    break;
  default:
    console.log(klaida);
    break;
}
