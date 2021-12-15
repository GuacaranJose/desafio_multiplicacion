function multiplicacion() {
  let numerousu = prompt("Ingrese un numero entero del 1 al 20");

  //rango de los numero(alerta si pone un numero mayor a 20 o menor a 1)
  if (numerousu < 1 || numerousu > 20) {
    alert = "Por favor ingresar un numero entre el 1 al 20";
    multiplicacion();
  }

  //multiplicacion

  for (let mul = 1; mul <= numerousu; mul++) {
    console.log(`${mul} x ${numerousu} = ${mul * numerousu}`);
  }

  //factotial

  function fibo(f) {
    if (f == 0) {
      return 0;
    }
    if (f == 1) {
      return 1;
    }

    let f1 = f - 1;
    let f2 = f - 2;

    return fibo(f1) + fibo(f2);
  }

  function factorial(f) {
    if (f == 1) return 1;

    return f * factorial(f - 1);
  }

  for (let mul = 1; mul <= numerousu; mul++) {
    console.log(`El factorial de ${mul} es ${factorial(mul)}`);
  }
}
